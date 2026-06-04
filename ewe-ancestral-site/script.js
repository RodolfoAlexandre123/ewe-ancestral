/* ==========================================
   MENU MOBILE (HAMBURGUER)
   ========================================== */
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
    
    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        });
    });
}

/* ==========================================
   BOTÃO DE COMPRAR - WHATSAPP
   ========================================== */
function comprarWhatsApp(produto) {
    // Número do WhatsApp (formato internacional sem +)
    const numero = '5511972852147';
    
    // Mensagem personalizada
    const mensagem = `Olá! Tenho interesse em comprar: *${produto}*\n\nGostaria de mais informações sobre pagamento e frete.`;
    
    // Codificar mensagem para URL
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    
    // Abrir em nova aba
    window.open(url, '_blank');
}

/* ==========================================
   SCROLL SUAVE E ANIMAÇÕES
   ========================================== */
const scrollAnimations = () => {
    // Mudar cor da navbar ao scrollar
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        }
    });
}

/* ==========================================
   INICIALIZAÇÃO
   ========================================== */
// Chamar todas as funções quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    scrollAnimations();
    
    console.log('%c🤘 EWÉ ANCESTRAL 🤘', 'color: #8B0000; font-size: 20px; font-weight: bold;');
    console.log('%cSite oficial carregado com sucesso!', 'color: #fff;');
});

/* ==========================================
   EFEITO PARALLAX (OPCIONAL)
   ========================================== */
// Adiciona efeito de profundidade ao scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero::before');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});