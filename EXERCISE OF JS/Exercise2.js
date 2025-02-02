// use Javascript to create a game of snake water & gun. The game should ask you to entera S , W or G. The computer should be able to randomly generatea S, W and G and declre win or loss using alert. Use confirm and prompt wherever required.


let game = {
    1: "S",
    2: "W", 
    3:"G"
}
let a = Math.floor(Math.random()* game.length)
console.log(game[1]);


// const user = prompt('enter S or W or G')
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }