let webSound;     //initializing variable for loading web-audio

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  webSound = createAudio('./Clockwork.mp3');
  webSound.autoplay(true);
  webSound.loop();
  webSound.speed(1.1);
}

function createRect()               //function definition for creating "seconds" rectangles
{
  rect(xpos,0,width/60,height-100);
  xpos+=width/60;                   //x-coordinate for rectangle being incremented through 60 divisions
}

let timer = 1000;                   //initializing the value to increment the "milliseconds" with
let eventChange = timer;            //initial setup for the counter
let xpos = 0;                       //setting starting position of the 1st rectangle
let hoursElapsed = 0;               //initializing the "hours" counter
let minutesElapsed = 0;             //initializing the "minutes" counter
let seasonName = 'SPRING';          //initializing the "seasons" counter

function draw() {
  strokeWeight(1);
  if(millis()>eventChange)          //looping the code to progress with every second
  {
    if(xpos>=0 && xpos<width/4)             //checking from 0-1/4 of viewport width
    {
      fill(0,int(random(150,256)),0);       //generating random shades of green
      createRect();                         //function call for generating rectangles
    }
    if(xpos>=width/4 && xpos<width/2)       //checking for 1/4-1/2 of viewport width
    {
      fill(int(random(210,256)),int(random(210,256)),0);
      createRect();
      seasonName = 'SUMMER';                //setting season name
    }
    if(xpos>=width/2 && xpos<3*width/4)     //checking for 1/2-3/4 of viewport width
    {
      fill(int(random(200,256)),int(random(50,165)),0);
      createRect();
      seasonName = 'FALL';
    }
    if(xpos>=3*width/4 && xpos<width)       //checking for 3-4-full viewport width
    {
      fill(0,0,int(random(150,256)));
      createRect();
      seasonName = 'WINTER';
    }
    if(xpos>=width)                         //exection reserved if x-coordinates goes path viewport width
    {
      background(0);                        //clear-screen
      xpos=0;                               //reset rectangle starting x-coordinate to 0
      minutesElapsed++;                     //increment the "minutes" counter
      seasonName = 'SPRING';                //reset "seasons" counter
      if(minutesElapsed % 60==0)            //condition for incrementing the "hours" counter
      {
        hoursElapsed++;
        minutesElapsed = 0;                 //reset the "minutes" counter to 0 after completion of hour
      }
    }
    eventChange = millis() + timer;         //increment eventChange by 1 second
  }

  //code for bottom display
  fill(0);
  strokeWeight(0);
  rect(0,height-100,width,height-100);
  fill(255);
  textSize(32);
  text(seasonName, 30, height-40);
  text('Hours Elapsed: ' +hoursElapsed, width/2.5, height-40);
  text('Minutes Elapsed: '+minutesElapsed, width/1.25, height-40);
}