class Pillar {
   constructor(x, y) {
      var options = {
         isStatic: true,
         friction:0
      }
      this.x = x;
      this.y = y;
      this.w = 35;
      this.h = 180;
      this.body = Bodies.rectangle(this.x, this.y, this.w / 2, this.h, options);
      this.image = loadImage("images/p1.png");
      World.add(world, this.body);
   }
   display() {
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, this.w, this.h);
   }
}