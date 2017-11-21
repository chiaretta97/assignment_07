var mySong;
var myVideo;
var mic;
var capture;

function preload() {
    mySong = loadSound('assets/Mosquito.mp3');
    myVideo = createVideo('assets/static.mp4');
}

function setup() {
  createCanvas(500,500)
  frameRate(100)
  
  mySong.loop();
  myVideo.loop();

 
  capture = createCapture(VIDEO);
  //capture.size(500, 500);
  capture.hide();
    
  myVideo.size(500,500);
  myVideo.hide();

  mic = new p5.AudioIn();
  mic.start();

  angleMode(DEGREES)
}

function draw() {
    
  //(between 0 and 1.0)
  var vol = mic.getLevel();
    
    if (vol < 0.1) {    
     mySong.play();
    image(myVideo, 0, 0, 500, 500);
             push()
         blendMode(LIGHTEST);
        fill(255,0,0)
        textFont('Saira Extra Condensed')
        textSize(40)
        text('Turn the VOLUME on', frameCount*3.5, random(150,153))
        fill(0,255,0)
        text('Turn the VOLUME on', frameCount*3, random(147,152))
            pop()
    textSize(63.5);
    noStroke()
           push()
    textFont('Saira Extra Condensed')
    blendMode(LIGHTEST);
    fill(255,0,0);
    text('SPEAAAAAAKKKKKKK', random(-5,0), random(268,270));
        fill(0,0,255);
    text('SPEAAAAAAKKKKKKK', random(2,5), random(269,272));
        fill(0,255,0);
    text('SPEAAAAAAKKKKKKK', random(0,3), random(266,269));
           pop()
      
    } else {
            
        mySong.stop();
        background(255);
        image(capture, 0, 0, 660, 500);
        filter('INVERT');
        filter('GRAY');
        push()
        blendMode(LIGHTEST);
        fill(255,0,0)
        rect(random(500),random(500),random(500),random(500))
        fill(0,0,255)
        rect(random(500),random(500),random(500),random(500))
        fill(0,255,0)
        rect(random(500),random(500),random(500),random(500))
        pop()
                if (mySong.isPlaying() === true) {
     mySong.pause();
      //mySong.play();

      background(0,255,0);
    }

  }

}


   
