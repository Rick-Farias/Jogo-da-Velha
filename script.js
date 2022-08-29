document.addEventListener('DOMContentLoaded', ()=>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) =>{
        square.addEventListener('click', clicou);
    })
})
function clicou (event) {
    let square = event.target;
    let position = square.id;
    console.log(square)
    console.log(position)
    if(movimento(position)){
        let text = document.getElementById("text");
        let p1 = document.getElementById("p1");
        let p2 = document.getElementById("p2");
        if(playerTime == 0){
            console.log("teste")
            p1.innerHTML = 1 + parseInt(p1.innerHTML);
        }else{
            console.log("teste2")
            p2.innerHTML = 1 + parseInt(p2.innerHTML);
        }
        text.innerHTML = "O jogo acabou!!"
    }
    updateSquares();
}

function updateSquares(){
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) =>{
        let position = square.id;
        let simbolo = board[position];

        if (simbolo != ''){
            square.innerHTML = `<div  class='${simbolo}' ></div>`
        }
    })
}

let reset = document.getElementById("reset");
reset.addEventListener('click', ()=>{
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) =>{
        let position = square.id;
        let simbolo = board[position];

        if (simbolo != ''){
            square.innerHTML = `<div  class='' ></div>`
        }
    })

    let text = document.getElementById("text");
    text.innerHTML = ""

    board = ['', '', '','', '', '','', '', '']
    gameover =false;
})

let j1 = document.getElementById("J1");
let j2 = document.getElementById("J2");


let iniciar = document.getElementById("iniciar");
iniciar.addEventListener('click', ()=>{
    let text = document.getElementById("text");

        if(j1.checked == true && j2.checked == true){
            text.innerHTML ="Selecione apenas UM jogador";
        }else if(j1.checked == true && j2.checked == false){
            playerTime = j1.value;
            text.innerHTML ="";
            gameover =false;
        }else{
            playerTime = j2.value;
            text.innerHTML ="";
            gameover =false;
        }
})


