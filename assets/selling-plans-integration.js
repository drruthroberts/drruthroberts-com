
const purchaseOptions = document.querySelectorAll('input[name^="bulkPurchaseOption"]');  
const currentQuantity = document.querySelector('.bulk-purchase-quantity');  

// Create a mapping object for option IDs to their respective quantities  
const quantityMap = {  
  "one_pack_purchase": 1,  
  "three_pack_purchase": 3,  
  "six_pack_purchase": 6  
};  

purchaseOptions.forEach(option => {  
  option.addEventListener('change', (event) => {  
    event.preventDefault();  
    const quantity = quantityMap[event.target.id];  
    if (quantity) {  // Check if quantity is defined  
      currentQuantity.value = quantity;  
      if (currentQuantity.value > 1)   
        document.querySelector('.bulk-purchase-decrease').classList.remove('disabled');  
    }  
    
    const selectedPack = event.target.closest('.bulk-purchase-group-item').querySelector('.purchase-pack-box');  

    // Remove 'selected' class from all packs  
    const allPacks = document.querySelectorAll('.purchase-pack-box');  
    allPacks.forEach(pack => {  
      pack.classList.remove('selected');  
    });  

    // Add 'selected' class to the currently checked pack  
    if(event.target.checked) {  
      selectedPack.classList.add('selected');  
    }  
  });  
});
