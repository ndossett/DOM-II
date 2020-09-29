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

const nav = document.querySelectorAll('.nav-link')

nav.forEach(item => {
    item.addEventListener('mousedown', navStyle)
    function navStyle(event) {
        item.style.fontSize = '4rem'
        item.style.color = '#FF8C00'
    }
});

nav.forEach(item => {
    item.addEventListener('mouseup', navStyle)
    function navStyle(event) {
        item.style.fontSize = '1.6rem'
        item.style.color = '#000'
    }
});

