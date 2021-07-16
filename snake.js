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
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  show(){
    rect(this.x,this.y,10,10)
  }


}