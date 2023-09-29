//initializing variable for loading web-audio
let webSound;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  webSound = createAudio('./Clockwork.mp3');
  webSound.autoplay(false);  
  webSound.loop();
  webSound.speed(1.1);
}

//function call for executing web-sound
function mouseClicked()
{
  webSound.play();
}

//function definition for creating "seconds" rectangles
function createRect()
{
  rect(xpos,0,width/60,height-100);
  xpos+=width/60;             //x-coordinate for rectangle being incremented through 60 divisions
}

let timer = 1000;             //initializing the value to increment the "milliseconds" with
let eventChange = timer;      //initial setup for the counter
let xpos = 0;                 //setting starting position of the 1st rectangle
let hoursElapsed = 0;         //initializing the "hours" counter
let minutesElapsed = 0;       //initializing the "minutes" counter
let seasonName = 'SPRING';    //initializing the "seasons" counter

function draw() {
  strokeWeight(1);

  //looping the code to progress with every second
  if(millis()>eventChange)
  {
    //checking every 1/4th division for "seasons" change
    if(xpos>=0 && xpos<width/4)
    {
      fill(0,int(random(150,256)),0);
      createRect();
    }
    if(xpos>=width/4 && xpos<width/2)
    {
      fill(int(random(210,256)),int(random(210,256)),0);
      createRect();
      seasonName = 'SUMMER';
    }
    if(xpos>=width/2 && xpos<3*width/4)
    {
      fill(int(random(200,256)),int(random(50,165)),0);
      createRect();
      seasonName = 'FALL';
    }
    if(xpos>=3*width/4 && xpos<width)
    {
      fill(0,0,int(random(150,256)));
      createRect();
      seasonName = 'WINTER';
    }
    if(xpos>=width)             //execution reserved if x-coordinates goes past viewport width
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

  //display bottom counter
  fill(0);
  strokeWeight(0);
  rect(0,height-100,width,height-100);
  fill(255);
  textSize(32);
  text(seasonName, 30, height-40);
  text('Hours: ' +hoursElapsed, width/1.3, height-40);
  text('Minutes: '+minutesElapsed, width/1.15, height-40);

  textSize(16);
  text('Turn On Sound & Click Anywhere For An Immersive Experience (Earphones Recommended)', width/4.5, height-45);
}