document.addEventListener('DOMContentLoaded', function () {  
    // Select all menu content items  
    const menuContents = document.querySelectorAll('.menu-content-wrapper');  
    const menuItems = document.querySelectorAll('.header-menu-category-label');
    
    
    // Set the initial active item based on data-id  
    const setActiveItem = (activeId) => {  
        menuContents.forEach(item => {  
            item.classList.toggle('active', item.dataset.id == activeId);  
        });  

        menuItems.forEach(menu => {
            menu.classList.toggle('active', menu.dataset.id == activeId);
        });
    };  

    // Set the active item initially  
    setActiveItem(1);  

    // Add click event listener to each label  
    document.querySelectorAll('.header-menu-category-label').forEach(label => {  
        label.addEventListener('click', function () {  
            // Set the active item based on the clicked label's data-id  
            setActiveItem(label.dataset.id);  
        });  
    });  
});