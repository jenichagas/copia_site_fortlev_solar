// Seleciona os elementos do DOM
const openModalButton = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModal');

const openModulesButton = document.getElementById('openModules');
const modulesfilter = document.getElementById('modulesfilter');
const closeModulesButton = document.getElementById('closeModules');

// Abre o modal
openModalButton.onclick = function() {
    modal.style.display = 'block';
}

// Abre o filtro de módulos
openModulesButton.onclick = function() {
    modulesfilter.style.display = 'block';
}

// Fecha o modal quando clicar fora do conteúdo do modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
    if (event.target == modulesfilter) {
        modulesfilter.style.display = 'none';
    }
}

// Fecha o modal quando o botão de fechar é clicado
closeModalButton.onclick = function() {
    modal.style.display = 'none';

}

// Fecha o filtro de módulos quando o botão de fechar é clicado
closeModulesButton.onclick = function() {
    modulesfilter.style.display = 'none';
}