/*let formas = [];

function setup() {
  createCanvas(300, 400);
  noStroke();
  iniciarForma();
  dibujarFormas();
}

function draw() {
  background(255);
  dibujarFormas();
}

function keyPressed() {
  for (let forma of formas) {
    if (keyCode === LEFT_ARROW && forma.group === 'primario') {
      forma.move(-5, 0);
    } else if (keyCode === RIGHT_ARROW && forma.group === 'secundario') {
      forma.move(5, 0);
    }
  }
  if (key === 'r' || key === 'R') {
    iniciarForma();
  }
}

function iniciarForma() {
   //(4 vertices, color, group);
  formas = [
    // Amarillo (primario)
    new Forma([[0, 0], [105, 0], [85, 145], [0, 240]], color(255, 233, 0), 'primario'),

    // Rojo (primario)
    new Forma([[230, 0], [300, 0], [300, 75], [255, 60]], color(230, 0, 0), 'primario'),
    new Forma([[115, 170], [300, 195], [300, 215], [120, 190]], color(230, 0, 0), 'primario'),

    // Azul celeste (primario)
    new Forma([[250, 90], [300, 90], [300, 135], [260, 130]], color(30, 160, 230), 'primario'),
    new Forma([[0, 240], [100, 190], [100, 290], [0, 300]], color(30, 160, 230), 'primario'),

    // Verde (secundario)
    new Forma([[110, 35], [250, 0], [300, 90], [260, 150], [150, 180]], color(20, 130, 60), 'secundario'),
    new Forma([[180, 290], [230, 280], [230, 400], [160, 400]], color(20, 130, 60), 'secundario'),

    // Naranja (secundario)
    new Forma([[80, 0], [120, 0], [110, 20], [80, 10]], color(220, 80, 40), 'secundario'),
    new Forma([[0, 350], [160, 360], [150, 400], [0, 400]], color(210, 70, 40), 'secundario'),

    // Otros (sin mover)
    new Forma([[0, 240], [80, 270], [100, 340], [30, 330]], color(180), 'otro'),
    new Forma([[100, 210], [165, 210], [170, 330], [135, 330]], color(30), 'otro'),
    new Forma([[165, 210], [210, 200], [220, 270], [175, 290]], color(255, 233, 0), 'primario'),
    new Forma([[230, 280], [300, 270], [300, 400], [230, 400]], color(100), 'otro')
  ];
}

function dibujarFormas() {
  for (let forma of formas) {
    forma.display();
  }
}
*/

