const titulo = document.querySelector('.titulo'); // Pega elemento do HTML
const tituloArray = titulo.innerHTML.split('') // Transforma string em Array


function escreve(elemento, elementoArray) {
    elemento.innerHTML = ''; // Zera o elemento la no HTML
    elementoArray.forEach((letra, index) => {
        setTimeout(() => {
            elemento.innerHTML += letra // Adiciona letra por letra no Elemento 
        }, 100 * index);
    });
}

escreve(titulo, tituloArray) // Chamando a função escreve passando o elemento e o elementoArray