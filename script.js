let menuBar = document.querySelector('#menubar');
let navBar = document.querySelector('.navbar');

menuBar.onclick = () => {
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}