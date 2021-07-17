let mysnake;
let sz = 20; // global variable for size of snake to make it move on a grid
let food;
let selfCheck;
let smart;

function setup() {
  createCanvas(600,600);
  selfCheck = createCheckbox('random move', false);
  smart = createCheckbox('smart move', true);

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
  stroke(0);
  rect(food.x,food.y,sz,sz);

  if (selfCheck.checked()){
    walk();
  }
  if (smart.checked()){
    smartWalk();
    
  }
  print(smart.checked())

}

function walk(){
  let mydirect = random(['i','k','j','l']);
  switch (mydirect){
    case 'i':
      console.log('up');
      mysnake.direct(0,-1);
      break;
    case 'k':
      console.log('DOWN');
      mysnake.direct(0,1);
      break;
    case 'j':
      console.log('LEFT');
      mysnake.direct(-1,0);
      break;
    case 'l':
      console.log('RIGHT');
      mysnake.direct(1,0);
      break;
  } 

}

function smartWalk(){
  print("i am smart");
  // needs to be the snakes head
  print(mysnake.body[0].x,food.x);
 if (mysnake.body[0].x > food.x){
   mysnake.direct(-1,0);
   print("left")
   print(mysnake.body[0].x,food.x);

 }
 if (mysnake.body[0].x < food.x){
   mysnake.direct(1,0);
   print("right");
 }
 if (mysnake.body[0].y > food.y){
  mysnake.direct(0,-1);
  print("up");

}
if (mysnake.body[0].y < food.y){
  mysnake.direct(0,1);
  print("down");
}


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


