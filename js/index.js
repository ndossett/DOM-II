const logoHead = document.querySelector('.logo-heading')

function highlight(event) {
event.target.style.backgroundColor = 'orange';
    setTimeout(function() {
    event.target.style.backgroundColor = '';
}, 700);  
}
logoHead.addEventListener('mouseenter', highlight)

const introimg = document.querySelector('.intro img')

function bigBorder(event) {
    event.target.style.border = '10px dotted #FF8C00';
    setTimeout(function() {
        event.target.style.border = '';
    }, 500);       
}
introimg.addEventListener('mouseover', bigBorder)