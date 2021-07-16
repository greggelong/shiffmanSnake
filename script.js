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
  console.log(key);
  switch (key){
    case 'i':
      console.log('up');
      break;
    case 'k':
      console.log('DOWN');
      break;
    case 'j':
      console.log('LEFT');
      break;
    case 'l':
      console.log('RIGHT');
      break;
  } 
}


