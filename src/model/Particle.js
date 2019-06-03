function Particle(pos, force, hue) {
  const position = createVector(pos.x, pos.y);
  const velocity = createVector(force.x, force.y);
  let drag = 0.95, lifespan = 255;
  return {
    get lifespan() { return lifespan; },
    get position() { return position; },
    update() {
      position.add(velocity);
      velocity.mult(drag);
      lifespan--;
    },
    display(otherParticle) {
      stroke(0, lifespan);
      fill(0, lifespan / 2);
      ellipse(position.x, position.y, 8, 8);
      if (otherParticle) {
        line(position.x, position.y, otherParticle.position.x, otherParticle.position.y);
      }
    },
  };
}
