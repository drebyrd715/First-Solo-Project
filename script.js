////////// using all const so i can use them later /////////////
///////// trying to avoid css as much as possible //////////////
//////////////// DECLARE ALL MY CONST ////////////////////
const gameBoard = document.querySelector("#gameBoard");
////// ctx is what we draw on ////////
const ctx = gameBoard.getContext("2d") //game in 2d//
const scoreBoard = document.querySelector("#scoreBoard");
const resetButton = document.querySelector("#resetButton");
//// need game width/height in variable so i can access them ////////
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
///////////////// select my colors as variables to call them ////////////////////
const boardBackground = "lightblue";
const paddle1Color = "red";
const paddle2Color = "green";
const paddleBorder = "black";
const ballColor = "gold";
const ballBorderColor = "black"
///////////// make ball size(I'll make it a const) /////////////
const ballRadius = 10.5;
///////// how far paddles moves after hitting button ////////////
const paddleSpeed = 40;
let intervalID; ////// used to repeat a certian function at given time-interval///////
let ballSpeed = 1;
/////////////////// Coordinates of ball /////////////////
let ballxaxis = gameWidth / 2;
let ballyaxis = gameHeight / 2;
//////////////// direction the ball goes ////////////////////
let ballxaxisDirection = 0;
let ballyaxisDirection = 0;
///////////// Define playerScore/////////////////
let player1Score = 0;
let player2Score = 0;
//////////// Define 2 paddle objects //////////////
let paddle1 ={
    width: 18,
    height: 90,
    x: 0,
    y: 0,
}
let paddle2 ={
    width: 18,
    height: 90,
    x: gameWidth -18,
    y: gameHeight -90,
}
/////////// add eventlister to whole window to hear keydown events////////
////////// add event listener to reset button as well ///////////////////
window.addEventListener("keydown", changeDirection)
resetButton.addEventListener("click", resetGame);
/////////////// create my functions now //////////////////
startGame();

///// When game starts what happens?//////////
function startGame(){
    makeball();
    timeskip();
};
////// paddle function/////
function makePaddles(){
    ctx.StrokeStyle = paddleBorder;
// fillRect= draws a filled rectangle /// strokeRect= puts rectangle on canvas///// 
// got from W3 schools because I used canvas in html/////////
    ctx.fillStyle = paddle1Color;
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height); //// coordinates of paddle1/////
    ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
/// make sure the S in (strokeRect is lowercase)took me 2 hours o find this little problem smh
    ctx.fillStyle = paddle2Color;
    ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height); //// coordinates of paddle2/////
    ctx.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
};
/////// makeball function ////////
function makeball(){};
////// timeskip (paddle movement)//////
function timeskip(){
};
function eraseBoard(){};
function moveball(){};
function drawball(){};
function checkImpact(){};
function changeDirection(){};
function updateScore(){};
function resetGame(){};



