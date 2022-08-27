function initTabNav(){
    // 2 - armazena o conteudo das imagens que estão nos li e depos armazena 
    // as sessões de conteudo 
    const tabMenu = document.querySelectorAll(".js-tabmenu li");  
    const tabConteudo = document.querySelectorAll(".js-tabconteudo section");

    // 3 - verifica se a quantidade de itens dos li são iguais as de conteudo 
    if(tabMenu.length && tabConteudo.length){

        // 6 - remone a classe aido de todas as sessoes e depois adicoana a classe ativo no index que foi passado 
        function activeTab(index) {
            tabConteudo.forEach((section) => {
                section.classList.remove("ativo");
            });
            tabConteudo[index].classList.add("ativo");
        }

        // 4 - adiciona a classe ativo ao primeiro item da lista
        tabConteudo[0].classList.add("ativo");

        // 5 - adiciona um evento a cada item da lista li, passando qual foi o item e seu index
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener("click", () => {
                activeTab(index);
            });
        });
    }
}


initTabNav(); // 1 - função ativada

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


function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]'); //seleciona todos os links a que comecem com # da classe .js-menu 
    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href'); //getAtt
        const section = document.querySelector(href); //pega o id que está relacionado a section
        section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });


        //forma alternativa
        //const topo = section.offsetTop;

        //window.scrollTo({
        //    top: topo,
        //    behavior: 'smooth',
        //});
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
        }
    );  
}

initScrollSuave();

function teste(resp){
    let res = resp;
    for (let i=1; i<10;i + 1){
        if (i % 2== 0){
            res = res + 1;
        } else {
            res = res + 2;
        }
    
        if (res > 5) {
            res = res - 5;
        }
    }

    return res;
}

teste();
