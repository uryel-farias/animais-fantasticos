export default function initAccordion(){
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
