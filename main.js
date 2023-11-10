function_toca_som(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listadeteclas = document.querySelectorAll(".tecla");

led contador = 0;
while(contador < listadeteclas.length){
    const efeito = listadeteclas[contador].classList[1];
    const idAudio = "#som_"+efeito;
    listadeteclas[contador].onclick = function(){
        tocasom (idAudio)
    }
    contador = contador + 1;
    console .log(contador);
}
