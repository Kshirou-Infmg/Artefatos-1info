/**
 * Alterna a visibilidade de um parágrafo.
 * @param {string} id - O ID do elemento parágrafo a ser alternado.
 */
function toggleParagraph(id) {
    const paragraph = document.getElementById(id);
    if (paragraph) {
        paragraph.classList.toggle('active');
    }
}


/*Parte menu suspenso*/ 
/* Função que mostra/oculta o menu suspenso */
function toggleDropdown() {
    document.getElementById("meuMenuDropdown").classList.toggle("show");
}

/*Fecha o menu se o usuário clicar fora dele*/
window.onclick = function(event) {
    /* ERRO CRÍTICO CORRIGIDO: 
      Trocado 'matches' por 'closest'.
      Isso garante que clicar no ÍCONE dentro do botão
      não feche o menu acidentalmente.
    */
    if (!event.target.closest('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}