document.addEventListener('DOMContentLoaded', function() {
    // Exemplo: Adicionar um efeito de rolagem suave para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Funcionalidade para o botão "Fale Comigo" do WhatsApp
    const whatsappButton = document.getElementById('whatsappButton');

    if (whatsappButton) {
        whatsappButton.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link

            // Use seu número de telefone completo aqui, incluindo o código do país e DDD.
            const phoneNumber = '5581997199683'; 
            
            // Mensagem pré-definida que aparecerá no WhatsApp.
            // Use encodeURIComponent para garantir que espaços e caracteres especiais sejam formatados corretamente.
            const message = encodeURIComponent('Olá, gostaria de mais informações sobre os seus serviços!'); 

            const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

            window.open(whatsappLink, '_blank'); // Abre o link em uma nova aba/janela
        });
    }

    // Você pode adicionar mais interatividade aqui, como:
    // - Validação de formulários
    // - Animações personalizadas
    // - Carregamento dinâmico de conteúdo
});