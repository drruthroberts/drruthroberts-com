// Get the modal
var ebModal = document.getElementById('shippingModal');

// Get the <span> element that closes the modal
var ebSpan = document.querySelectorAll(".shipping-close");

// When the user clicks on <span> (x), close the modal
ebSpan.forEach(closeitem => {
    closeitem.onclick = function() {
        ebModal.style.display = "none";
    }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == ebModal) {
        ebModal.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded',function(){
    var modalPrimaryContent = document.querySelector('.shipping-primary-modal');
    modalPrimaryContent.classList.add("shipping-modal-content");
    modalPrimaryContent.classList.remove("shipping-primary-modal");
});






