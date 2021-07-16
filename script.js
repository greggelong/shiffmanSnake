let mysnake;

function setup() {
  createCanvas(600,600);
  mysnake = new Snake();
}

function draw() {
  background(51);
  mysnake.update();
  mysnake.show();
}

function keyPressed(){
  //console.log(key);
  switch (key){
    case 'i':
      //console.log('up');
      mysnake.direct(0,-1);
      break;
    case 'k':
      //console.log('DOWN');
      mysnake.direct(0,1);
      break;
    case 'j':
      //console.log('LEFT');
      mysnake.direct(-1,0);
      break;
    case 'l':
      //console.log('RIGHT');
      mysnake.direct(1,0);
      break;
  } 
}

