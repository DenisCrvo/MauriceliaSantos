/* Importar fontes do Google Fonts (se não estiver no HTML) */
/* @import url('https://fonts.com/css2?family=Montserrat:wght@400;600;700&family=Roboto:wght@400;500&display=swap'); */

body {
    font-family: 'Roboto', sans-serif;
    color: #333; /* Mantido para texto geral, se desejar um contraste maior */
}

/* Cores e estilos personalizados */
:root {
    --primary-color: #585659; /* Seu novo cinza escuro principal */
    --primary-color-dark: #403e41; /* Um tom mais escuro para hover */
    --secondary-color: #f8f9fa; /* Cor de fundo clara para seções */
    --dark-grey: #343a40; /* Pode ser ajustado se quiser um cinza mais específico */
    --light-grey: #e9ecef;
    --text-color: #495057; /* Cor do texto para contraste */
}

/* Top Bar */
.top-bar {
    background-color: var(--primary-color); /* Usando a cor principal */
    color: white;
    font-size: 0.85rem;
}

.top-bar .social-icons a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
}

.top-bar .social-icons a:hover {
    color: var(--light-grey);
}

/* Navbar */
.navbar-brand span {
    color: var(--primary-color) !important; /* Marca com a cor principal */
    font-size: 1.5rem;
}

.navbar-nav .nav-link {
    color: var(--text-color) !important;
    font-weight: 500;
    margin-right: 1.5rem;
    transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover,
.navbar-nav .nav-link.active {
    color: var(--primary-color) !important; /* Ativo com a cor principal */
}

.btn-primary-custom {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    color: white;
    padding: 0.6rem 1.5rem;
    border-radius: 0.3rem;
    font-weight: 600;
    transition: background-color 0.3s ease, border-color 0.3s ease;
}

.btn-primary-custom:hover {
    background-color: var(--primary-color-dark); /* Tom mais escuro no hover */
    border-color: var(--primary-color-dark);
}

/* Hero Section */
.hero-section {
    min-height: auto; /* Alterado para auto para se ajustar ao conteúdo em mobile */
    background-color: var(--secondary-color);
    overflow: hidden;
    padding: 60px 0;
}

.hero-section .text-section {
    padding-right: 3rem;
}

.hero-section h1 {
    font-family: 'Montserrat', sans-serif;
    color: var(--primary-color);
    font-size: 3.5rem;
    line-height: 1.2;
}

.hero-section p.lead {
    font-size: 1.25rem;
    color: var(--text-color);
}

.hero-section .btn-outline-secondary-custom {
    border: 1px solid var(--light-grey);
    color: var(--text-color);
    background-color: white;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
}

.hero-section .btn-outline-secondary-custom:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
    box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.hero-section .btn-outline-secondary-custom i {
    color: var(--primary-color);
}

.btn-primary-custom-large {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    color: white;
    padding: 1rem 2.5rem;
    border-radius: 0.5rem;
    font-weight: 700;
    font-size: 1.1rem;
    transition: background-color 0.3s ease, border-color 0.3s ease;
}

.btn-primary-custom-large:hover {
    background-color: var(--primary-color-dark);
    border-color: var(--primary-color-dark);
}

.hero-section .image-section {
    background-image: url('https://images.pexels.com/photos/8111853/pexels-photo-8111853.jpeg');
    background-size: cover;
    background-position: center;
    min-height: 600px;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    /* Remova a classe d-none d-lg-block do HTML e use CSS para controlar a exibição */
    display: block; /* Garante que a imagem seja exibida por padrão */
}

/* Responsividade */
@media (max-width: 991.98px) { /* Para tablets e dispositivos menores (ex: iPads na vertical) */
    .hero-section .text-section {
        padding-right: 0;
        text-align: center;
        margin-top: 2rem; /* Adiciona espaço entre a imagem e o texto no mobile */
    }
    .hero-section h1 {
        font-size: 2.5rem;
    }
    .hero-section p.lead {
        font-size: 1.15rem; /* Ajuste o tamanho da fonte para mobile */
    }
    .hero-section .image-section {
        min-height: 350px; /* Altura menor para imagem em mobile */
        margin-top: 0; /* Remove a margem superior desnecessária aqui */
    }
    .navbar-nav {
        text-align: center;
        margin-top: 1rem;
    }
    .navbar-nav .nav-item {
        margin-right: 0;
        margin-bottom: 0.5rem;
    }
    .btn-primary-custom {
        width: 100%;
        margin-top: 1rem;
    }
}

@media (max-width: 767.98px) { /* Para celulares (ex: iPhones) */
    .top-bar {
        display: none; /* Oculta a barra superior em telas muito pequenas */
    }
    .hero-section h1 {
        font-size: 2rem;
    }
    .hero-section p.lead {
        font-size: 1rem;
    }
    .btn-primary-custom-large {
        width: 100%;
        font-size: 1rem;
    }
    .hero-section .image-section {
        min-height: 250px; /* Altura ainda menor para imagem em telas menores de celular */
    }
}