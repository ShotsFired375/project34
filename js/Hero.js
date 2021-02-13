class Hero {
  constructor (x,y,width,height) {
    var options = {
      density: 1,
      frictionAir: 1
    }
    this.x=x;
    this.y=y;
    
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
  }
  display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      rectMode(CENTER);
      image(superHeroImg, 0, 0, this.width, this.height);
      pop();
  }
}