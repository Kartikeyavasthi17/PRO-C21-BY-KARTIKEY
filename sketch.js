var bullet;
var wall;
var speed;
var weight;
var thick;

function setup() {
  createCanvas(1400,1400);

 speed =Math.round(random(223,321));

thick =Math.round(random(30,52));

 weight =Math.round(random(400,1500));

 bullet = createSprite(50, 300, 30, 30);
 bullet.shapeColor ="white";
 bullet.velocityX =speed;

 wall =createSprite(1000,300,thick,height/2);
 wall.shapeColor ="pink";
}
function draw() {
  background(0,0,0);  

  if(hasCollided(bullet,wall))

  {
    bullet.velocityX =0;
    var damage =0.5 * weight * speed * speed / (thick * thick * thick);

    if(damage > 10)
    {
      wall.shapeColor =color(255,0,0);
    }

    if(damage < 10)
    {
      wall.shapeColor =color(0,255,0);
    }

  }

  drawSprites();

}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge >= wallLeftEdge)
  {
   return true;
  }

   return false;

}
