class DetailsModal extends HTMLElement {
  constructor() {
    super();
    this.detailsContainer = this.querySelector('details');
    this.summaryToggle = this.querySelector('summary');

    this.detailsContainer.addEventListener(
      'keyup',
      (event) => event.code.toUpperCase() === 'ESCAPE' && this.close()
    );
    this.summaryToggle.addEventListener(
      'click',
      this.onSummaryClick.bind(this)
    );
    this.querySelector('button[type="button"]').addEventListener(
      'click',
      this.close.bind(this)
    );

    this.summaryToggle.setAttribute('role', 'button');
  }

  isOpen() {
    return this.detailsContainer.hasAttribute('open');
  }

  onSummaryClick(event) {
    event.preventDefault();
    event.target.closest('details').hasAttribute('open')
      ? this.close()
      : this.open(event);
  }

  onBodyClick(event) {
    if (!this.contains(event.target) || event.target.classList.contains('modal-overlay')) this.close(false);
  }

  open(event) {
    this.onBodyClickEvent =
      this.onBodyClickEvent || this.onBodyClick.bind(this);
    event.target.closest('details').setAttribute('open', true);
    document.body.addEventListener('click', this.onBodyClickEvent);
    document.body.classList.add('overflow-hidden');

    trapFocus(
      this.detailsContainer.querySelector('[tabindex="-1"]'),
      this.detailsContainer.querySelector('input:not([type="hidden"])')
    );
  }

  close(focusToggle = true) {
    removeTrapFocus(focusToggle ? this.summaryToggle : null);
    this.detailsContainer.removeAttribute('open');
    document.body.removeEventListener('click', this.onBodyClickEvent);
    document.body.classList.remove('overflow-hidden');
  }
}


// document.querySelectorAll('.header__menu-item').forEach(item => {  
//   item.addEventListener('mouseover', function() {  
//     if (item.querySelector('.header__menu-option').textContent == "SHOP") {  
//       document.querySelector('.custom-header-menu-container').classList.add('show');  
//     }  
//   }); 
//   item.addEventListener('mouseout', function() {  
//       document.querySelector('.custom-header-menu-container').classList.remove('show');  
//   }); 
  
//   document.querySelector('.custom-header-menu-container').addEventListener('mouseover', function() {
//     document.querySelector('.custom-header-menu-container').classList.add('show');
//   });

//   document.querySelector('.custom-header-menu-container').addEventListener('mouseout', function() {
//     document.querySelector('.custom-header-menu-container').classList.remove('show');
//   });
// });  

const menuItems = document.querySelectorAll('.header__menu-item');
const customMenuContainer = document.querySelector('.custom-header-menu-container');

function showMenu() {
  customMenuContainer.classList.add('show');
}

function hideMenu() {
  customMenuContainer.classList.remove('show');
}

menuItems.forEach(item => {
  item.addEventListener('mouseover', function() {
    const menuOption = item.querySelector('.header__menu-option');  
    // console.log(menuOption.textContent, "ere");
    if(menuOption){
      if (menuOption.textContent === "SHOP" || customMenuContainer) {  
        showMenu();  
        
      } else {  
        console.error("Element with class 'header__menu-option' not found in item:", item);  
      }
  } 
  });

  item.addEventListener('mouseout', hideMenu);
});

// Using a single listener for the custom menu container
customMenuContainer.addEventListener('mouseover', showMenu);
customMenuContainer.addEventListener('mouseout', hideMenu);




customElements.define('details-modal', DetailsModal);




