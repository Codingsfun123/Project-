var garden,rabbit,apple,grass,leaf,orangeLeaf,path,redImage;
var gardenImg,rabbitImg,appleImg,grassImg,leafImg,orangeleafImg,pathImg,redimageImg;



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  grassImg = loadImage("grass.png")
  leafImg = loadImage("leaf.png")
  orangeleafImg = loadImage("orangeLeaf.png")
  pathImg = loadImage("path.png")
  redimageImg = loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  createApples(random(30,370),400)
  drawSprites();
  apples.scal = 0.5
}

if (frameCount % 80 == 0){createApples}