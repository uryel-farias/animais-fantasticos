
export default function initScrollSuave() {
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
