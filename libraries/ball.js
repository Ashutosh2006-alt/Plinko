class Ball {
    constructor(x, y, radius) {
        var options = {
            restitution: 1,
            friction: 0,
            density: 1,
            frictionAir:0.01
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        this.radius = radius;
        World.add(world, this.body);
    }

    display() {
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            colorMode(HSB);
            stroke(0,0,0);
            translate(pos.x, pos.y);
            rotate(angle);
            fill(this.color);
            ellipse(0, 0, this.radius * 2);
            pop();
    }
}