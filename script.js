
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        
        nav.classList.toggle('nav-active');
        
        burger.classList.toggle('toggle');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        });
    });
}


function comprarWhatsApp(produto) {
    const numero = '5511972852147';
    
    const mensagem = `Olá! Tenho interesse em comprar: *${produto}*\n\nGostaria de mais informações sobre pagamento e frete.`;
    
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, '_blank');
}


const scrollAnimations = () => {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    scrollAnimations();
    
    console.log('%c🤘 EWÉ ANCESTRAL 🤘', 'color: #8B0000; font-size: 20px; font-weight: bold;');
    console.log('%cSite oficial carregado com sucesso!', 'color: #fff;');
});


window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero::before');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});
