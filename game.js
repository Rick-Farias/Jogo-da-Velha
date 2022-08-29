let board = ['', '', '','', '', '','', '', '']
let playerTime ;
let gameover =true;

let simbolo = ['o', 'x'];
let estados = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function movimento(position){

    if(gameover){
        return;
    }

    if(board[position] == ''){
    board[position] = simbolo[playerTime]

    gameover = vencedor();

    if(gameover == false){
        playerTime = (playerTime == 0) ? 1:0;
    }
    
    return gameover;
 }
}
function vencedor(){
    for(let i = 0; i < estados.length; i++){
        let seq = estados[i];
        let pos0 = seq[0]
        let pos1 = seq[1]
        let pos2 = seq[2]

        if(board[pos0] == board[pos1] &&
           board[pos2] == board[pos0] &&
           board[pos0] != ''){
            return true;
        }
    }
    return false;
}
