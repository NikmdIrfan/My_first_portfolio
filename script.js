let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Bila menu icon diklik
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');  // tukar icon jadi X
    navbar.classList.toggle('active');  // toggle navbar muncul/hilang
};