function openNav() {
    document.getElementById("mySidenav").style.width = "200px"; // Define a largura da sidenav para 200px
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0"; // Define a largura da sidenav de volta para 0
}

function showCategory(category) {
    // Oculta todos os containers de livros
    var containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        container.style.display = 'none';
    });

    // Exibe o container correspondente à categoria selecionada
    var selectedContainer = document.getElementById(category);
    if (selectedContainer) {
        selectedContainer.style.display = 'block';
    }
}
