let tamanhoPilhas = 7; 

let origem = [];
let destino = [];
let intermediario = [];

let estados = [];
let frameRate = 1;
let idSetInterval = 0; //Para conseguirmos parar de executar set interval


//-------------Executar-----------------------------------------\\
function executar(){
    clearInterval(idSetInterval);
    tamanhoPilhas  = document.getElementById('quantidade').value;
    frameRate = document.getElementById('frameRate').value;
  
    setarPilhasIniciais(tamanhoPilhas);
    
    pegarEstado(); //Pega o estado antes das alterações
    revolver(tamanhoPilhas,origem,destino,intermediario); //Pega o estado após cada alteração
    animar();
}


//------------Setar estado inicial------------------------------\\

function setarPilhasIniciais(quantidade){
    origem = [];
    destino = [];
    intermediario = [];

    estados = [];
    for(let i = quantidade; i > 0; i--){
        origem.push(i);
    }
}

//------------Resolução---------------------------------//
function revolver(n, _origem, _destino, _intermediario){
    let bloco ;
   
    if(n==1){
        bloco = _origem.pop();
        _destino.push(bloco);
        pegarEstado()
    }else{
        revolver(n-1, _origem, _intermediario, _destino);
        revolver(1, _origem, _destino, _intermediario );
        revolver(n-1, _intermediario,_destino,_origem );
    }

}

//---------------Guardar o estado---------------------//
function pegarEstado(){
    estados.push([copy(origem),copy(destino),copy(intermediario)]);
}

function copy(array){
    return array.slice();
}

function limparPilha(){
    for(let i = 0; i < 3;i++){
        pilhas[i].innerHTML = '';
    }
}

//---------------Animação--------------------------------//

function animar(){
    let canvas = document.getElementById("animation");
    let count = 0;

    idSetInterval = setInterval(()=>{
        let frame = gerarFrame(estados[count]);
        canvas.innerHTML = frame.outerHTML;
        count++;

        if(count == estados.length){
            clearInterval(idSetInterval);
        }
    },1000/frameRate)
}

function gerarFrame(estado){
    let frame = document.createElement('div');
    frame.setAttribute('class','frame')
    for(let colunaArray of estado){
        let coluna = gerarColuna(colunaArray);
        frame.appendChild(coluna);
    }

    return frame
}


function gerarColuna(colunaArray){
    let coluna = document.createElement('div');
    coluna.setAttribute('class','coluna');

    for(let blocoInt of colunaArray){
        console.log(blocoInt);
        let bloco = gerarBloco(blocoInt);
        coluna.appendChild(bloco);
    }

    blocosVazios = tamanhoPilhas - colunaArray.length;
    for(let i = 0; i < blocosVazios; i++){
        let bloco = gerarBloco(0);
        coluna.appendChild(bloco);
    }

    return coluna
}

function gerarBloco(tamanho){
    let bloco = document.createElement('div'); //Bloco 
    let alinhador = document.createElement('div');
    alinhador.setAttribute('class','bloco-alinhador')
    alinhador.style.setProperty('width',`${200}px`)
    bloco.setAttribute('class','bloco');
    alinhador.appendChild(bloco);
    let border=  (200*tamanho/tamanhoPilhas); // Quanto menor o tamanho, maior o padding.
    bloco.style =  `
                     width: ${border}px;
                   `

    return alinhador;
}
