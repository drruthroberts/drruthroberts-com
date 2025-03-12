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

customElements.define('details-modal', DetailsModal);  

const menuItems = document.querySelectorAll('.header__menu-item');  
const customMenuContainer = document.querySelector('.custom-header-menu-container');  
const menuTitles = document.querySelectorAll('.header-menu__identify_value');  

function showMenu() {  
  if (customMenuContainer) {  
    customMenuContainer.classList.add('show');  
  }  
}  

function hideMenu() {  
  if (customMenuContainer) {  
    customMenuContainer.classList.remove('show');  
  }  
}  

function handleMouseOver(item) {  
  const menuOption = item.querySelector('.header__menu-option');  

  if (menuOption && customMenuContainer) {  
    let matchFound = false;  
    menuTitles.forEach(title => {  
      if (menuOption.textContent === title.value) {  
        matchFound = true;  
      }  
    });  
    if (matchFound) {  
      showMenu(); // Call showMenu without arguments  
    }  
  }  
}  
 
const mouseOverHandlers = new Map();  
menuItems.forEach(item => {  
  const mouseOverHandler = () => handleMouseOver(item); // Store in variable  
  mouseOverHandlers.set(item, mouseOverHandler) // Store in map relating item to handler  
  item.addEventListener('mouseover', mouseOverHandler);  
  item.addEventListener('mouseout', hideMenu);  
});  

customMenuContainer.addEventListener('mouseover', showMenu);  
customMenuContainer.addEventListener('mouseout', hideMenu);  

//Check current URL and manage visibility based on conditions  
const currentUrl = window.location.href;  
const menuContent = document.querySelector('.custom-header-menu');  

if (currentUrl === "https://drruthroberts.com/collections/all-products" && window.innerWidth >= 768) {  


  if (customMenuContainer.dataset.menu == "SHOP") {  
    showMenu(); //Call showMenu without arguments  
    menuContent.style.position = 'unset';  

    // Remove event listeners from menu items  
    menuItems.forEach(item => {  
      item.removeEventListener('mouseover', mouseOverHandlers.get(item));  
      item.removeEventListener('mouseout', hideMenu);  
    });  

    customMenuContainer.removeEventListener('mouseover', showMenu);  
    customMenuContainer.removeEventListener('mouseout', hideMenu);  
  }  
}  
document.addEventListener('DOMContentLoaded', function() {  
  const grandTitles = document.querySelectorAll('.menu-drawer__grandchildlink');  
  grandTitles.forEach(title => {  
    if (title.href == "https://drruthroberts.com/#") {  
      title.style.color = "#efa316";  
    }  
  });  
});  