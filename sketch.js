var hr
var mn
var sc


function setup() {
  createCanvas(800,400);

  angleMode(DEGREES);

}

function draw() {
  background(0);  
  drawSprites();

  translate(200,200)
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  
  strokeWeight(8)
  stroke(255,0,0)
  noFill();
  var scAngle = map(sc,0,60,0,360)
  arc(0,0,320,320,-90,scAngle-90)
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();


strokeWeight(8)
  stroke(50,205,50)
  noFill();
  var mnAngle = map(mn,0,60,0,360)
  arc(0,0,280,280,-90,mnAngle-90)
  push();
  rotate(mnAngle);
  stroke(50,205,50);
  strokeWeight(7);
  line(0,0,80,0);
  pop();

  strokeWeight(8)
  stroke(0,0,255)
  noFill();
  var hrAngle = map(hr%12,0,12,0,360)
  arc(0,0,240,240,-90,hrAngle-90)
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,60,0);
  pop();


}



