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


const menuItems = document.querySelectorAll('.header__menu-item');
const customMenuContainer = document.querySelector('.custom-header-menu-container');

function showMenu() {
  customMenuContainer.classList.add('show');
}

function hideMenu() {
  customMenuContainer.classList.remove('show');
}

function handleMouseOver(item) {  
  const menuOption = item.querySelector('.header__menu-option');  
  if (menuOption) {  
    if (menuOption.textContent === "SHOP" || customMenuContainer) {  
      showMenu();  
    } else {  
      console.error("Element with class 'header__menu-option' not found in item:", item);  
    }  
  }   
}  

menuItems.forEach(item => {  
  item.addEventListener('mouseover', () => handleMouseOver(item));  
  item.addEventListener('mouseout', hideMenu);  
});  

customMenuContainer.addEventListener('mouseover', showMenu);  
customMenuContainer.addEventListener('mouseout', hideMenu);  

// Check current URL and remove event listeners if it matches  
const currentUrl = window.location.href;  
const menuContent = document.querySelector('.custom-header-menu');
if (currentUrl === "https://drruthroberts.com/collections/all-products" && window.innerWidth >= 768) {   
  console.log('here==>');  
  customMenuContainer.classList.add('show');  
  menuContent.style.position = 'unset';

  // Remove event listeners from menu items  
  menuItems.forEach(item => {  
    item.removeEventListener('mouseover', () => handleMouseOver(item));  
    item.removeEventListener('mouseout', hideMenu);  
  });  

  // Remove event listeners from the custom menu container  
  customMenuContainer.removeEventListener('mouseover', showMenu);  
  customMenuContainer.removeEventListener('mouseout', hideMenu);  
} 


customElements.define('details-modal', DetailsModal);




