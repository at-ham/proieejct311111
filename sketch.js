const Engine=Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var d=[];
var pl=[];
var p=[];
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);
  ground = new Ground (240,790,480,10);
for (i=0;i<=480;i=i+80){
  d.push(new Divisions(i,800-135,10,250))

}

for (i=40;i<=480;i=i+50){
  pl.push(new Plinko(i,75))
  
}
for (i=0;i<=480;i=i+50){
  pl.push(new Plinko(i,175))
  
}
for (i=75;i<=480;i=i+50){
  pl.push(new Plinko(i,275))
  
}

for (i=50;i<=480;i=i+50){
  pl.push(new Plinko(i,375))
  
}












}

function draw() {
  Engine.update(engine);
  background(0);  
 ground.display();
 for (i=0;i<d.length;i++){
  d[i].display();
}
for (i=0;i<pl.length;i++){
  pl[i].display();
}

if(frameCount%60===0){
  p.push(new Particle(random(10,470),15,10))


}
for (i=0;i<p.length;i++){
  p[i].display();
}
}