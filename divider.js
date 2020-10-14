class Divider {
  constructor(x, y) {
    var options = {
      isStatic: true
    }

    this.width = 10;
    this.height = 1100;

    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
  }

  display() {
    push();
    var pos = this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }
};

