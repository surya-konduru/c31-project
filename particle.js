class Particle {
  constructor(x, y) {
    var options = {
      restitution: 0.4
    }
    this.radius = 10;
    this.body = Bodies.circle(x, y, this.radius, options);
    this.colour = color(random(0, 225), random(0, 225), random(0, 225));
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);
    noStroke();
    fill(this.colour);
    ellipseMode(RADIUS);
    ellipse(0, 0, this.radius, this.radius);
    pop();
  }
};

