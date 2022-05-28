function initTabNav(){
    const tabMenu = document.querySelectorAll(".js-tabmenu li");
    const tabConteudo = document.querySelectorAll(".js-tabconteudo section");


    if(tabMenu.length && tabConteudo.length){

        tabConteudo[0].classList.add("ativo");
        function activeTab(index) {
            tabConteudo.forEach((section) => {
                section.classList.remove("ativo");
            });
            tabConteudo[index].classList.add("ativo");
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener("click", () => {
                activeTab(index);
            });
        });
    }
}


initTabNav();

function initAccordion(){
    const accordionList = document.querySelectorAll('.js-accordion dt');
    
    if(accordionList.length){
        accordionList[0].classList.add('ativar-dd');
        accordionList[0].nextElementSibling.classList.add('ativar-dd');



        function activeAccordion() {
            this.classList.toggle('ativar-dd');
            this.nextElementSibling.classList.toggle('ativar-dd');
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        })
    }
}

initAccordion();