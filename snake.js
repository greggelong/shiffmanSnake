// sz is a global variable that scales the snake so it
// appears to move on a grid

class Snake{
  constructor(){
    this.x =0;
    this.y =0;
    this.xspeed = 1;
    this.yspeed = 0;

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
    rect(this.x,this.y,sz,sz)
  }


}