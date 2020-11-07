class dustbin {
    constructor(x, y) {
     this.x=x
     this.y=y
     this.boxwidth=200 
      this.boxheight=100
    this.angle=0
    this.boxthickness=20 
    
     this.bottombody = Bodies.rectangle(this.x, this.y, this.boxwidth, this.boxthickness,{isStastic:true});
this.leftbody = Bodies.rectangle(this.x-this.boxwidth/2+20, this.y-this.boxheight/2,  this.boxthickness,this.boxheight,{isStastic:true});
this.rightbody = Bodies.rectangle(this.x+this.boxwidth/2-20, this.y-this.boxheight/2,  this.boxthickness,this.boxheight,{isStastic:true});      
Matter.Body.setAngle(this.leftbody,this.angle)
Matter.Body.setAngle(this.rightbody,-1*this.angle)

World.add(world, this.bottombody);
World.add(world, this.leftbody);    
World.add(world, this.rightbody);

}
    display(){
      var posleft=this.leftbody.position;
      var posright=this.rightbody.position;
      var pos =this.bottombody.position;
    
      push();
      translate(pos.x, pos.y);
     
      rectMode(CENTER);
      fill("yellow");
      angleMode(RADIANS)
      rect(0, 0, this.boxwidth, this.boxthickness);
      pop();
      push();
      translate(posleft.x, posleft.y);
     rotate(this.angle)
      rectMode(CENTER);
      fill("yellow");
      //angleMode(RADIANS)
      rect(0, 0, this.boxthickness, this.boxheight);
      pop();
      push();
      translate(posright.x, posright.y);
     rotate(-1*this.angle)
      rectMode(CENTER);
      fill("yellow");
    //  angleMode(RADIANS)
      rect(0, 0, this.boxthickness, this.boxheight);
      pop();  
    }
  };
  