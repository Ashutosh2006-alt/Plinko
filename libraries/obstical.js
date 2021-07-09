class Obstical {
   constructor(x, y) {
      var options = {
         'isStatic': true
      }
      this.x = x;
      this.y = y;
      this.body = Bodies.circle(this.x, this.y, 15 / 2, options);
      this.image = loadImage("images/b1.png");
      World.add(world,this.body)
   }

   display() {
      push();
      fill(0, 0, 0);
      ellipseMode(CENTER);
      ellipse(this.body.position.x, this.body.position.y, 15, 15);
      pop();
   }
}