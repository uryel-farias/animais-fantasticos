const linksInternos = document.querySelectorAll('a[haref^=#]');

function handleLink(event){
    console.log(event);
}

linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink);
})