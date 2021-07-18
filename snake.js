// sz is a global variable that scales the snake so it
// appears to move on a grid
let sz = 20;
class Snake{
  constructor(){
    //this.x =0;
    //this.y =0;
    this.body = [createVector(0,0)];

    this.xspeed = 1;
    this.yspeed = 0;


  }

  grow(){

    let head = this.body[0].copy()
    this.body.unshift(head);
  }

  eat(pos){
    // pos is the vector of the food
    let d = dist(this.body[0].x,this.body[0].y,pos.x,pos.y);
    if (d < 1){
      this.grow() // grow the snake if it eats the food
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
    // take a copy of the first in the array
    let head = this.body[0].copy();
    this.body.pop()
    head.x += (this.xspeed*sz);
    head.y += (this.yspeed*sz);
    this.body.unshift(head);


      

    this.body[0].x = constrain(this.body[0].x, 0, width-sz);
    this.body[0].y = constrain(this.body[0].y, 0, height-sz);
  }

  show(){
    fill(0,255,0);
    for (let i =0; i <this.body.length;i++){
    
    rect(this.body[i].x,this.body[i].y,sz,sz);
    }
  }


}