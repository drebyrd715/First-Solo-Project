//////////////// DECLARE ALL MY CONST ////////////////////
const gameBoard = document.querySelector("#gameBoard");
////// ctx is what we draw on ////////
const ctx = gameBoard.getContext("2d") //game in 2d//
const scoreBoard = document.querySelector("#scoreBoard");
const resetButton = document.querySelector("#resetButton");
//// need game width/height in variable so i can access them ////////
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
/////// create game objects and select my colors for game in CSS //////
let paddle1 = paddle1;
let paddle2 = paddle2;
let ball = ball;
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
