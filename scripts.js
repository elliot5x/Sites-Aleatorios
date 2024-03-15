document.addEventListener('DOMContentLoaded', function () {
    // Espera o DOM ser carregado antes de manipular os elementos

    // Obtém o elemento com o ID 'role'
    var role = document.getElementById('role');

    // Verifica se o elemento 'role' foi encontrado no DOM
    if (role) {
        var ultimoScroll = window.pageYOffset;

        window.onscroll = function () {
            var novoScroll = window.pageYOffset;
            if (ultimoScroll > novoScroll) {
                // Rolar para cima
                role.style.opacity = "0";
            } else {
                // Rolar para baixo
                role.style.opacity = "0";
            }
            ultimoScroll = novoScroll;
        }
    } else {
        console.error("Elemento com ID 'role' não encontrado no DOM.");
    }
});
