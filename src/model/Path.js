function Path() {
  const particles = [];
  const hue = random(100);
  return {
    add(position, force) {
      particles.push(Particle(position, force, hue));
    },
    update() {
      particles.forEach(particle => particle.update());
    },
    display() {
      for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].lifespan <= 0) {
          particles.splice(i, 1);
        } else {
          particles[i].display(particles[i + 1]);
        }
      }
    },
  };
}
