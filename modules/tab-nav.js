export default function initTabNav(){
    // 2 - armazena o conteudo das imagens que estão nos li e depos armazena 
    // as sessões de conteudo 
    const tabMenu = document.querySelectorAll(".js-tabmenu li");  
    const tabConteudo = document.querySelectorAll(".js-tabconteudo section");

    // 3 - verifica se a quantidade de itens dos li são iguais as de conteudo 
    if(tabMenu.length && tabConteudo.length){

        // 6 - remone a classe ativo de todas as seçoes e depois adiciona a classe ativo no index que foi passado 
        function activeTab(index) {
            tabConteudo.forEach((section) => {
                section.classList.remove("ativo");
            });
            const direcao = tabConteudo[index].dataset.anime;
            tabConteudo[index].classList.add("ativo", direcao);
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
