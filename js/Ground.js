class Ground{

  constructor(){
      var ground_options ={
          isStatic:true
      }

      this.body = Bodies.rectangle(450,390,900,20,ground_options);
      World.add(world,this.body);
  }

  display(){
      noStroke();
      fill("black");
      rectMode(CENTER);
      rect(this.body.position.x,this.body.position.y,900,20);
  }
}