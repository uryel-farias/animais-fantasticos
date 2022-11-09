export default function initAnimaNumeros(){

    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((valorNumero)=>{
        const total = +valorNumero.innerText;

        const incremento = Math.floor(total / 100);
        let start = 0;
        
        const timer = setInterval(()=>{
            
            start = start + incremento;
            valorNumero.innerText = start;
            if(start > total){
                valorNumero.innerText = total;
                clearInterval(timer);
            }
        }, 25);

    });

    function handleMutation(){

    }

    const observeTarget = document.querySelector('.numeros');
    const observer = new MutationObserver(handleMutation);
    observer.observe(observeTarget, {attributes:true});


}
