var box1;

function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(100, 45, 20, 15, 3, -2);

}

function draw() 
{
  background(220);
  box1.move();
  box1.show();
}

