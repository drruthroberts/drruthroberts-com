class FilterCollection extends HTMLElement {
    constructor() {
        super();
        this.filterInputs = this.querySelectorAll('.filter-value-content-list__line input');
        this.productList = this.querySelectorAll('.coach-product-item');
        this.filterList = this.querySelectorAll('.filter-value-content-list__line');
        this.filterList.forEach(content => {
            var item_count = 0;
            const label = content.querySelector('input').dataset.value.toLowerCase();
            this.productList.forEach((item) => {
                const tagItem = item.dataset.value;
                
                // If there is a matching tag, display the item  
                if (tagItem.toLowerCase().indexOf(label) != -1) {  
                    item_count++;
                } 
            });
            content.querySelector('label').textContent = content.querySelector('label').textContent + "(" + item_count+ ")";
        });
     
        this.filterInputs.forEach(input => {
            input.addEventListener('change', this.FilterTags.bind(this));
        });
        this.filteredTags = [];
        this.currentPage = 1;
        this.itemsPerPage = 12;
        this.Pagination();
    }
    
    Pagination() {  
        // Calculate the start and end index for the current page  
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;  
        const endIndex = startIndex + this.itemsPerPage;  
    
        let count = 0; // Reset count for the actual index in the visible products  
    
        this.productList.forEach(product => {  
            if (product.classList.contains('active')) {  
                if (count >= startIndex && count < endIndex) {  
                    product.style.display = "block";   
                } else {  
                    product.style.display = "none";   
                }  
                count++;   
            }  
        });  
    
        this.PaginationNav();   
    }

    PaginationNav() {
        // this.totalCount = this.productList.filter(product => product.classList.contains('active')).length;  
        this.totalCount = 0;
        this.productList.forEach(product=>{
            if(product.classList.contains('active')){
                this.totalCount++;
            }
        })

        const existingPagination = this.querySelector('.pagenation-content');  
        if (existingPagination) {  
            existingPagination.remove();  
        }  

        if (this.totalCount >= this.itemsPerPage) {  
            const pagenatinContent = document.createElement('div');  
            pagenatinContent.classList.add('pagenation-content');  
            this.querySelector('.product-grid-container').appendChild(pagenatinContent);  
        
            let pageCount = Math.ceil(this.totalCount / this.itemsPerPage);  
            
            for (let page = 1; page <= pageCount; page++) {  
                const pageNumber = document.createElement('span');  
                pageNumber.classList.add('pagenation-number');  
                pageNumber.textContent = page;  
                pagenatinContent.appendChild(pageNumber);  
                if(this.currentPage == page) {
                    pageNumber.classList.add('bg-color');
                }
                // this.querySelector('.pagenation-number').classList.remove('bg-color');
                pageNumber.addEventListener('click', () => {  
                    this.currentPage = page;  
                    this.Pagination();
                });  
            }  
        }
    }

    FilterTags(e) {
        const filterTag = e.target.dataset.value;  
        if (e.target.checked) {  
            // If the checkbox is checked, add the tag  
            if (!this.filteredTags.includes(filterTag)) {  
                this.filteredTags.push(filterTag);  
            }  
        } else {  
            // If the checkbox is unchecked, remove the tag  
            this.filteredTags = this.filteredTags.filter(tag => tag !== filterTag);  
        }  
        this.updateProductList();  
    }
   
   
    updateProductList() {
        this.currentPage = 1;
        this.productList.forEach((item) => {
           
            const tagItem = item.dataset.value;
            const isMatchingTag = this.filteredTags.some(tag =>   
                tagItem.toLowerCase().indexOf(tag.toLowerCase()) !== -1  
            );  
            
            // If there is a matching tag, display the item  
            if (isMatchingTag) {  
                item.classList.add('active');
                item.style.display = "block";
               
            } else {
                item.classList.remove('active');
                item.style.display = "none";
            }
        });


        if( this.filteredTags.length == 0 ) {
            this.productList.forEach(item => {
                item.classList.add('active');
                item.style.display = "block";
            });
        }
        this.Pagination();
    }
}
window.customElements.define('filter-collection', FilterCollection); 

document.addEventListener('DOMContentLoaded', function(){
    var ul = document.querySelector('.coach-product-grid.product-grid');
    var lis = Array.from(ul.querySelectorAll('.coach-product-item'));

    for (var i = lis.length - 1; i > 0; i--) {
       var j = Math.floor(Math.random() * (i + 1));
       ul.insertBefore(lis[j], lis[i]);
    }

});