let paths = [], painting = false, next = 0, current, previous;

function setup() {
  createCanvas(700, 500);
  current = createVector(0, 0);
  previous = createVector(0, 0);
}

function draw() {
  background(200);
  if (painting && millis() > next) {
    current.x = mouseX;
    current.y = mouseY;

    let force = p5.Vector.sub(current, previous);
    force.mult(0.05);

    paths[paths.length - 1].add(current, force);

    next = millis() + random(100);
    previous.x = current.x;
    previous.y = current.y;
  }

  paths.forEach(path => {
    path.update();
    path.display();
  });
}

function mousePressed() {
  painting = true;
  next = 0;
  paths.push(Path());
  previous.x = mouseX;
  previous.y = mouseY;
}

function mouseReleased() {
  painting = false;
}
