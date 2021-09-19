$(function(){
    $('.hamburger-menu').on('click',function(){
    $('.toggle').toggleClass('open');
    $('.menu').toggleClass('open');
    });
});
    
window.addEventListener('scroll', function(){
    let navbar = document.querySelector('nav');
    let windowPosition = window.scrollY > 1;
    navbar.classList.toggle('scrolling-active', windowPosition);
});