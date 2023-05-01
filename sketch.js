const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ball, ballImg;
var hoop, hoopImg;
var background, backgroundImg;

function preload(){
    backgroundImg = loadImage("./images/bk.png");
    hoopImg = loadImage("./images/hoop.png");
    ballImg = loadImage("./images/bk.png");
}

function setup(){
    background(51)
    createCanvas(900,500);

    Engine.update(engine);
}

function draw(){

    Engine.update(engine);
    drawSprites();
}