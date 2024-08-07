document.addEventListener('DOMContentLoaded',function(){
    const firstAiticleDom = document.querySelector(".first-blog-articles");
    var articleItems = document.querySelectorAll(".custom-blog-articles__article");
    let articleCount = articleItems.length;
    var itmesPerPage = 8;
    let count = 0;

    // var targetItems = document.querySelectorAll('[data-index="'+targetIndex+'"]');
    var firstArticle = articleItems[0].cloneNode(true);
    firstArticle.classList.remove('hidden');
    firstAiticleDom.appendChild(firstArticle);
    console.log(firstAiticleDom);
    // console.log(targetItems[0], "erererer--->");

    articleItems.forEach((item, index) => {
        item.dataset.index = count;
        if((Number(index+1) % itmesPerPage) == 0){
            count++;
        }
        if (item.dataset.index == 0) {
            item.classList.remove('hidden');
        }else {
            item.classList.add('hidden');
        }
    });

    const paginationButton = document.querySelectorAll('.pagination-button');
    paginationButton.forEach((buttonItem) => {
        buttonItem.addEventListener('click', function(){
            const targetIndex = parseInt(buttonItem.dataset.count);
            paginationButton.forEach(element => {
                element.classList.remove('active');
            })

            buttonItem.classList.add('active');
            
          
            var targetItems = document.querySelectorAll('[data-index="'+targetIndex+'"]');
            console.log(targetItems[0], "erererer--->");
            firstAiticleDom.querySelector('.custom-blog-articles__article').remove();
            firstArticle = targetItems[0].cloneNode(true);
            firstArticle.classList.remove('hidden');
            firstAiticleDom.appendChild(firstArticle);


            articleItems.forEach((item) => {
                if (item.dataset.index == targetIndex) {
                    item.classList.remove('hidden');                    
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
    
    document.querySelectorAll('.arrow-button').forEach(arrowButton => {
        let updateValue = 0;
        arrowButton.addEventListener('click', function(){
            let buttonName = arrowButton.dataset.name;
            let activeValue = document.querySelector('.pagination-number-button.active').dataset.count;
            if (buttonName == 'next') {
                updateValue = Number(activeValue) + 1;
                if(updateValue == paginationButton.length + 1) {
                    buttonName.classList.add('disabled');
                    console.log('herer-------', buttonName);
                    buttonName.removeAttribute('onclick');
                }
            
            }else{
                updateValue = Number(activeValue) - 1;
                if (updateValue == 1) {
                    document.querySelector('.previous-button').disabled = true;
                }
            }
            document.querySelector(`[data-count="${updateValue}"]`).click();
           
        });
            let activePage = document.querySelector('.pagination-number-button.active').dataset.count;
            if (activePage == 1) {
                document.querySelector('[data-name="previous"]').disabled = true;
            } else if (activePage == paginationButtons.length) {
                document.querySelector('[data-name="next"]').disabled = true;
            }

    })

});