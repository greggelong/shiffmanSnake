function setup() {
    createCanvas(800, 480);
    background(0);
    fill(0, 255, 0);
    textSize(sz);
    makeFood();
    x[0] = 20;
    y[0] = 12;
    x[1] = 21;
    y[1] = 12;
    //x[2]= 22;
    // y[2]=12
    frameRate(5);
  }
  
  function draw() {
    background(0);
    //print(x,y)
  
    // draw food
    fill(0, 255, 0);
    text("F", fx * sz, fy * sz);
    displaySnake();
    //print(l, x[l],y[l], x, y)
  }
  
  function checkeat() {
    if (x[0] == fx && y[0] == fy) {
      // increace array
      //l++; // add to back
      x[x.length] = x[x.length - 1];
      y[x.length] = y[x.length - 1];
      makeFood();
    }
  }
  
  function displaySnake() {
    // get location
    let headx = x[0];
    let heady = y[0];
  
    // only one can be true at a time
    xspeed = 0;
    yspeed = 0;
    if (N) yspeed = -1;
    if (S) yspeed = +1;
    if (E) xspeed = +1;
    if (W) xspeed = -1;
  
    // update that location
  
    headx += xspeed;
    heady += yspeed;
  
    if (x.length > 1) {
      /// if length is > 1 shift the down losing one
  
  
      for (let i = x.length -1; i > 0; i--) {
        
        x[i] = x[i - 1];
        y[i] = y[i - 1];
      }
    }
  
    // add new location
  
    x[0] = headx;
    y[0] = heady;
  
    checkeat();
  
    //show
  
    for (i = 0; i <= x.length; i++) {
      if (i == 0) {
        fill(255, 0, 0);
      } else fill(0, 255, 0);
  
      text(i%10, x[i] * sz, y[i] * sz);
    }
  }
  
  function makeFood() {
    fx = floor(random(w - 1)) + 1;
    fy = floor(random(h - 1)) + 1;
  }
  
  function keyPressed() {
    N = false;
    S = false;
    E = false;
    W = false;
  
    //console.log(key);
    switch (key) {
      case "i":
        //console.log('up');
        N = true;
        break;
      case "k":
        //console.log('DOWN');
        S = true;
        break;
      case "j":
        //console.log('LEFT');
        W = true;
        break;
      case "l":
        //console.log('RIGHT');
        E = true;
        break;
    }
  }