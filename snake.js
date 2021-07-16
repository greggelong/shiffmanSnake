// sz is a global variable that scales the snake so it
// appears to move on a grid

class Snake{
  constructor(){
    this.x =0;
    this.y =0;
    this.xspeed = 1;
    this.yspeed = 0;

  }

  eat(pos){
    // pos is the vector of the food
    let d = dist(this.x,this.y,pos.x,pos.y);
    if (d < 1){
      return true;
    }else{
      return false;
    }
  }

  direct(x,y){
    this.xspeed = x;
    this.yspeed = y;
  }

  update(){
    this.x += this.xspeed*sz;
    this.y += this.yspeed*sz;

    this.x = constrain(this.x, 0, width-sz);
    this.y = constrain(this.y, 0, height-sz);
  }

  show(){
    fill(0,255,0);
    rect(this.x,this.y,sz,sz);
  }


}