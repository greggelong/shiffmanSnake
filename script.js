let mysnake;
let sz = 20; // global variable for size of snake to make it move on a grid
let food;
let selfCheck;
let smart;

function setup() {
  createCanvas(600,600);
  selfCheck = createCheckbox('random move', false);
  smart = createCheckbox('smart move', true);

  mysnake = new Snake(createVector(0,0),color(0,255,0,50));
  yoursnake = new Snake(createVector(0,400),color(0,0,255,50));
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
  yoursnake.update();
  yoursnake.show();
  
  
  fill(255,0,0);
  stroke(0);
  rect(food.x,food.y,sz,sz);

  if (selfCheck.checked()){
    walk();
  }
  if (smart.checked()){
    smartWalk();
    smartWalk2();
    
  }
  print(smart.checked())

  if (mysnake.eat(food)){
    // if snake eats the food get a new location
    pickLocation();

  }

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
  if (mysnake.eat(food)){
    // if snake eats the food get a new location
    pickLocation();

  }
  print("i am smart");
  // needs to be the snakes head
  print(mysnake.body[0].x,food.x);
 if (mysnake.body[0].x > food.x){
   mysnake.direct(-1,0);
  
   print("left")
   

 }
 else if (mysnake.body[0].x < food.x){
   mysnake.direct(1,0);
   
   print("right");
 }
 else if (mysnake.body[0].y > food.y){
  mysnake.direct(0,-1);
  
  print("up");

}
else if (mysnake.body[0].y < food.y){
  mysnake.direct(0,1);

  print("down");
}
}


function smartWalk2(){
  if (yoursnake.eat(food)){
    // if snake eats the food get a new location
    pickLocation();

  }
  print("i am smart");
  // needs to be the snakes head
  print(yoursnake.body[0].x,food.x);
 if (yoursnake.body[0].x > food.x){
   yoursnake.direct(-1,0);
  
   print("left")
   

 }
 else if (yoursnake.body[0].x < food.x){
   yoursnake.direct(1,0);
   
   print("right");
 }
 else if (yoursnake.body[0].y > food.y){
  yoursnake.direct(0,-1);
  
  print("up");

}
else if (yoursnake.body[0].y < food.y){
  yoursnake.direct(0,1);

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

