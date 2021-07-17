// sz is a global variable that scales the snake so it
// appears to move on a grid

class Snake{
  constructor(){
    //this.x =0;
    //this.y =0;
    this.body = [createVector(width/2,height/2)];

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
  
    /* 
    the code below doesn't work you really need to copy
    one increase it delete one then add the copy to the start
    this.body[0].x += this.xspeed*sz;
    this.body[0].y += this.yspeed*sz;
    if (this.body.length >= 2){
      this.body.pop();
      
    }

    */     

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