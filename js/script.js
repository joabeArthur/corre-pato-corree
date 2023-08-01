const pato = document.querySelector('.pato');

/*const sherekt = document.querySelector('.sherekt');*/

const pipe = document.querySelector('.pipe');

const pontos = document.querySelector('.pontos');

const Pvalue = document.querySelector('.Pvalue');

const cabo = document.querySelector('.cabo');

const menu = document.querySelector('.menu');

const btn = document.querySelector('.btn-play');

const pontoF = document.querySelector('.Pvalue > span');

const board = document.querySelector('.board');

/*const faca = document.querySelector('.faca');*/

const incrementPontos = () => {
    pontos.innerHTML = +pontos.innerHTML + 10
}

const count = 0;

const output = document.querySelector('#output');

var p = pontos;




const jump = () => {

    

    pato.classList.add('jump');
    setTimeout(() => {
        pato.classList.remove('jump');
        
    }, 500);
}



document.addEventListener('keydown', jump);




const loop = setInterval(() => {



    /*const facaPosition = faca.offsetLeft;*/

    const pipePosition = pipe.offsetLeft;

 

    
    const patoPosition = +window.getComputedStyle(pato).bottom.replace('px', '');



/* if (facaPosition <= 120 && facaPosition > 0 && patoPosition < 80 || pipePosition <= 120 && pipePosition > 0){

        faca.style.animation = 'none';
        faca.style.left = `${facaPosition}px`;

        pato.style.animation = 'none';
        pato.style.bottom = `${patoPosition}px`;

        pato.src = '../imgs/imagsj/death.gif';
        pato.style.width = '180px'
        pato.style.marginLeft = '40px'
        pato.style.marginBottom = '-59px'

        

        clearInterval(loop);
    };*/
  
    
    incrementPontos()
    
    if (pipePosition <= 120 && pipePosition > 0 && patoPosition < 80 /*|| facaPosition <= 120 && facaPosition > 0*/){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        

        pato.style.animation = 'none';
        pato.style.bottom = `${patoPosition}px`;

        pato.src = '../imgs/imagsj/death.gif';
        pato.style.width = '180px'
        pato.style.marginLeft = '40px'
        pato.style.marginBottom = '-59px'

        menu.style.display = "flex"


        

        clearInterval(loop);
        

    }

  
    

}, 10);


/* -------------------------------------------------------------------------------------------------------- */

 



/* -------------------------------------------------------------------------------------------------------- */



