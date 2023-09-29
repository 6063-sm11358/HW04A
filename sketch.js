function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function createRect()
{
  rect(xpos,0,width/60,height-100);
  xpos+=width/60; 
}

let timer = 1000;
let eventChange = timer;
let xpos = 0;
let hoursElapsed = 0;
let minutesElapsed = 0;
let seasonName = 'SPRING';

function draw() {
  strokeWeight(1);
  if(millis()>eventChange)
  {
    if(xpos>=0 && xpos<width/4)
    {
      fill('#46EB3B');
      createRect();
    }
    if(xpos>=width/4 && xpos<width/2)
    {
      fill("#FFE945");
      createRect();
      seasonName = 'SUMMER';
    }
    if(xpos>=width/2 && xpos<3*width/4)
    {
      fill("#FF6D24");
      createRect();
      seasonName = 'FALL';
    }
    if(xpos>=3*width/4 && xpos<width)
    {
      fill("#2470FF");
      createRect();
      seasonName = 'WINTER';
    }
    if(xpos>=width)
    {
      background(0);
      xpos=0;
      minutesElapsed++;
      seasonName = 'SPRING';
      if(minutesElapsed%60==0)
      {
        hoursElapsed++;
        minutesElapsed = 0;
      }
    }
    eventChange = millis() + timer;
  }
  fill(0);
  strokeWeight(0);
  rect(0,height-100,width,height-100);
  fill(255);
  textSize(32);
  text(seasonName, 30, height-40);
  text('Hours Elapsed: ' +hoursElapsed, width/2.5, height-40);
  text('Minutes Elapsed: '+minutesElapsed, width/1.25, height-40);
}