
var bullet,speed,weight;
var wall,thickness;




function setup() {
  createCanvas(800,400);
  speed=random(223,321)
  weight=random(30,51)
  thickness=random(22,83);
  bullet =createSprite(50, 200, 30, 20);
  bullet.shapeColor=color("white")
  bullet.velocityX = speed;
  wall =createSprite(600, 200, thickness,height/2);
  wall.shapeColor=color(80,80,80)
  
  
  
  
}


function draw() {
  background("lightpink"); 
  
  if (hasCollided(bullet,wall))
  {
     bullet.velocityX=0;
     var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);


     if(damage>10)
     {
        wall.shapeColor=color(255,0,0);
     }

     if(damage<10)
      {
         wall.shapeColor=color(0,255,0)
      }
 
     
 
    } 

  drawSprites();
}

function hasCollided(lbullet,lwall)
{
   bulletRightEdge=lbullet.x +lbullet.width;
   wallLeftEdge=lwall.x;
   if(bulletRightEdge>=wallLeftEdge)
   {
       return true;
   }
   
       return false;
}
