let mysnake;
let sz = 20; // global variable for size of snake to make it move on a grid
let food;

function setup() {
  createCanvas(600,600);
  mysnake = new Snake();
  // need to call a functiion that picks a location on the grid
  pickLocation();
  frameRate(10);
}

function pickLocation(){
  let cols = floor(width/sz);
  let rows = floor(height/sz);
  console.log(cols,rows);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(sz);


}
function draw() {
  background(51);
  mysnake.update();
  mysnake.show();
  
  if (mysnake.eat(food)){
    // if snake eats the food get a new location
    pickLocation();

  }
  fill(255,0,0);
  rect(food.x,food.y,sz,sz);

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


