class Snow{
    constuctor(x,y,width,height){
        var options={
            friction:0.1, 
            density:0.2
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.image=loadImage("snow4.webp");
        World.add(world,this.body)
    }
    display(){
      //  var pos= this.body.position;
        //var angles= this.body.angle;
        push ();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle)
        imageMode(CENTER)
        image (this.image,0,0,this.width,this.height)
        pop ();
    }
    
}