var hr
var mn
var sc

var hrAngle, mnAngle, scAngle

function setup() {
  createCanvas(400,400);
  createSprite(400, 200, 50, 50);

  angleMode(DEGREES);

}

function draw() {
  background("black");  

  translate (200,200);
  rotate (-90);

  hr = hour ();
  mn = minute ();
  sc = second ();


  scAngle = map (sc,0,60,0,360);
  mnAngle = map (mn,0,60,0,360);
  hrAngle = map (hr % 12,0,12,0,360);

  //drawing seconds hand
  push();
  //rotate the hand based on angle calculated
  rotate(scAngle);
  stroke ("red");
  strokeWeight(7);
  line (0, 0, 100, 0);
  pop();

  push();
  //rotate the hand based on angle calculated
  rotate(mnAngle);
  stroke ("green");
  strokeWeight(7);
  line (0, 0, 75, 0);
  pop();

  push();
  //rotate the hand based on angle calculated
  rotate(hrAngle);
  stroke ("blue");
  strokeWeight(7);
  line (0, 0, 50, 0);
  pop();

  stroke (255,0,255);
  point (0,0);
  strokeWeight (10);
  noFill();
  stroke("red");
  arc (0, 0, 300, 300, 0, scAngle);

  stroke("green");
  arc (0, 0, 275, 275, 0, mnAngle);

  stroke("blue");
  arc (0, 0, 250, 250, 0, hrAngle);

  //drawSprites();
  
}