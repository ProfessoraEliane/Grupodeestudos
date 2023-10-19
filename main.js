function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;

function tocaSomRisada(){
    document.querySelector("#som_tecla_risada").play();
    
}
const listadeTeclas = document.querySelectorAll(".tecla");
listadeTeclas[2].onclick = tocaSomRisada;
