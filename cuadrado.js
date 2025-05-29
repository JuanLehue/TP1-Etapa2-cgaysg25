class Forma {
  constructor(vertices, col, group) {
    this.vertices = vertices;
    this.col = col;
    this.group = group;
  }

  move(dx, dy) {
    this.vertices = this.vertices.map(([x, y]) => [x + dx, y + dy]);
  }

  display() {
    fill(this.col);
    beginShape();
    for (let [x, y] of this.vertices) {
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}