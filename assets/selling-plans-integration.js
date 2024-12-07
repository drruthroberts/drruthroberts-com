
const purchaseOptions = document.querySelectorAll('input[name^="bulkPurchaseOption"]');  
const currentQuantity = document.querySelector('.bulk-purchase-quantity');  
const productId = document.querySelector('.bulk-purchase-group').dataset.id;
//Create a mapping object for option IDs to their respective quantities  


// if(productId == "7469452525633") {
//   const specialQuantityMap = {  
//     "one_pack_purchase": 1,  
//     "three_pack_purchase": 5,  
//     "six_pack_purchase": 10  
//   }; 

//   purchaseOptions.forEach(option => {  
//     option.addEventListener('change', (event) => {  
//       event.preventDefault();  
//       const quantity = specialQuantityMap[event.target.id];  
//       if (quantity) {  // Check if quantity is defined  
//         currentQuantity.value = quantity;  
//         if (currentQuantity.value > 1)   
//           document.querySelector('.bulk-purchase-decrease').classList.remove('disabled');  
//       }  
      
//       const selectedPack = event.target.closest('.bulk-purchase-group-item').querySelector('.purchase-pack-box');  
  
//       // Remove 'selected' class from all packs  
//       const allPacks = document.querySelectorAll('.purchase-pack-box');  
//       allPacks.forEach(pack => {  
//         pack.classList.remove('selected');  
//       });  
//       // Add 'selected' class to the currently checked pack  
//       if(event.target.checked) {  
//         selectedPack.classList.add('selected');  
//       }  
//     });  
//   });
// }

// else {
//   const quantityMap = {  
//     "one_pack_purchase": 1,  
//     "three_pack_purchase": 3,  
//     "six_pack_purchase": 6  
//   };
//   purchaseOptions.forEach(option => {  
//     option.addEventListener('change', (event) => {  
//       event.preventDefault();  
//       const quantity = quantityMap[event.target.id];  
//       if (quantity) {  // Check if quantity is defined  
//         currentQuantity.value = quantity;  
//         if (currentQuantity.value > 1)   
//           document.querySelector('.bulk-purchase-decrease').classList.remove('disabled');  
//       }  
      
//       const selectedPack = event.target.closest('.bulk-purchase-group-item').querySelector('.purchase-pack-box');  
  
//       // Remove 'selected' class from all packs  
//       const allPacks = document.querySelectorAll('.purchase-pack-box');  
//       allPacks.forEach(pack => {  
//         pack.classList.remove('selected');  
//       });  
//       // Add 'selected' class to the currently checked pack  
//       if(event.target.checked) {  
//         selectedPack.classList.add('selected');  
//       }  
//     });  
//   }); 
// }



// Define quantity mappings  
const quantityMaps = {  
  "7469452525633": {  
    "one_pack_purchase": 1,  
    "three_pack_purchase": 5,  
    "six_pack_purchase": 10  
  },  
  default: {  
    "one_pack_purchase": 1,  
    "three_pack_purchase": 3,  
    "six_pack_purchase": 6  
  }  
};  

// Determine the appropriate quantity map based on product ID  
const quantityMap = quantityMaps[productId] || quantityMaps.default;  

purchaseOptions.forEach(option => {  
  option.addEventListener('change', (event) => {  
    event.preventDefault();  
    const quantity = quantityMap[event.target.id];  

    if (quantity) {  // Check if quantity is defined  
      currentQuantity.value = quantity;  
      document.querySelector('.bulk-purchase-decrease').classList.toggle('disabled', currentQuantity.value <= 1); // Toggle disabled class based on quantity  
    }  

    const selectedPack = event.target.closest('.bulk-purchase-group-item').querySelector('.purchase-pack-box');  

    // Remove 'selected' class from all packs and add to the currently checked pack  
    document.querySelectorAll('.purchase-pack-box').forEach(pack => {  
      pack.classList.remove('selected');  
    });  

    if (event.target.checked) {  
      selectedPack.classList.add('selected');  
    }  
  });  
});