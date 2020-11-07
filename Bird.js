class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.trajectry=[]
  }


  display() {
   var pos= this.body.position;

    var position=[pos.x,pos.y]
   
    if(pos.x>200 && this.body.velocity.x>10){
      this.trajectry.push(position);
    }

for(var num=0; num<this.trajectry.length; num=num+1){
    image(this.smoke,this.trajectry[num][0],this.trajectry[num][1])
}

    super.display();
  }
}
