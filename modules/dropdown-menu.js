import outsideClick from "./outsideClick.js";

export default function initDropdownMenu(){
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');  // (1) seleciona o elemento 
    
    dropdownMenus.forEach(menu => {
        ['touchstart','click'].forEach(userEvent => { // [... ...] quando que usar mais de um tipo de evento em uma linha. 
            menu.addEventListener(userEvent, handleClick); // (2) ativa a função handleClick quando usar o click//hover ou touchstart(mobile)
        });
    });
    
    function handleClick(event) {
        event.preventDefault(); // (3) Previne abrir uma nova janela
        this.classList.add('active'); // (4) Adiciona active ao elemento selecionado (*li dropdown)
        outsideClick(this, ['touchstart','click'], () => {  // (5) cria a função de click fora do submenu
            this.classList.remove('active'); // (6) 
        });
    };
}




