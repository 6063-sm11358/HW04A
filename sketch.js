function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255);
}

let timer = 100;
let eventChange = timer;
let xpos = 0;
let hoursElapsed = 0;
let minutesElapsed = 0;

function draw() {
  strokeWeight(1);
  if(millis()>eventChange)
  {
    if(xpos<width)
    {
      rect(xpos,0,width/60,height-100);
      xpos+=width/60;
      if(xpos>=width)
      {
        background(0);
        xpos=0;
        minutesElapsed++;
        if(minutesElapsed%60==0)
        {
          hoursElapsed++;
          minutesElapsed = 0;
        }
      }
    }
    eventChange = millis() + timer;
  }
  fill(255);
  textSize(32);
  text('Hours Elapsed: ' +hoursElapsed, width/4, height-40);
  text('Minutes Elapsed: '+minutesElapsed, width/1.75, height-40);
}