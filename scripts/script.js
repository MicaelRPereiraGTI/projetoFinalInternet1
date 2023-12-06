document.addEventListener("DOMContentLoaded", function () {
    var botoesAdicionar = document.querySelectorAll('.btn-adicionar');
    var botoesRemover = document.querySelectorAll('.btn-remover');
    var produtos = document.querySelectorAll('.produto-card');

    botoesAdicionar.forEach(function (botao) {
        botao.addEventListener('click', function () {
            var spanQuantidade = botao.nextElementSibling;
            var quantidadeAtual = parseInt(spanQuantidade.textContent);
            spanQuantidade.textContent = quantidadeAtual + 1;
        });
    });

    botoesRemover.forEach(function (botao) {
        botao.addEventListener('click', function () {
            var spanQuantidade = botao.previousElementSibling;
            var quantidadeAtual = parseInt(spanQuantidade.textContent);
            spanQuantidade.textContent = Math.max(0, quantidadeAtual - 1);
        });
    });

    produtos.forEach(function (produto) {
        produto.addEventListener('mouseenter', function () {
            produto.style.transform = 'scale(1.05)';
            produto.style.transition = 'transform 0.3s ease';
        });

        produto.addEventListener('mouseleave', function () {
            produto.style.transform = 'scale(1)';
            produto.style.transition = 'transform 0.3s ease';
        });
    });

    // function atualizarPosicaoCarrinho() {
    //     var posicaoCarrinho = document.querySelector('.img-carrinho');  
    //     var quantidadeTotal = calcularQuantidadeTotal();
    //     posicaoCarrinho.textContent = quantidadeTotal;
    // }

    function calcularQuantidadeTotal() {
        var spansQuantidade = document.querySelectorAll('.quantidade');
        var quantidadeTotal = 0;

        spansQuantidade.forEach(function (span) {
            quantidadeTotal += parseInt(span.textContent);
        });

        return quantidadeTotal;
    }

    var currentLocation = window.location.href;

    document.querySelectorAll(".navbar-desk a").forEach(function (link) {
        if (currentLocation.includes(link.getAttribute("href"))) {
            link.parentNode.classList.add("active");
        }
    });
});
