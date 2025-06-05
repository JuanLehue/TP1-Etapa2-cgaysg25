let figuras = [];
let cant = 10;
let dibujadas = 0;
let paleta;

let AMP_MIN = 0.001;
let AMP_MAX = 0.1;
let amortigua = 0.9;
let amp;
let ampCruda;
let mic;
let gestorSenial;

function preload(){

    paleta = new Paleta("data/Paleta.png");

    for(let i=0; i<cant; i++){
        let nombre = "data/Figura"+i+".png";
        figuras[i] = loadImage(nombre);

    }
}

function setup(){
    createCanvas(300,400);
    background(200);
    imageMode(CENTER);

    mic = new p5.AudioIn();
    mic.start();

    gestorAmp = new GestorSenial(AMP_MIN, AMP_MAX);
    gestorAmp.f =amortigua;
}

function draw(){
    //background(255);
    ampCruda = mic.getLevel();
    gestorAmp.actualizar(ampCruda);
    amp = gestorAmp.filtrada;

    //let texto = "Amplitud: " + nfc(amp, 4);
    //text(texto, 50,50);
    let posY = map(amp, 0, 1, height, 0  );
    //ellipse(width/2 +  50, posY, 50, 50 );
}


function keyPressed() {
  if (key === 'c') {
      if (dibujadas < 20){
        dibujarFigura();
      }
  }

}

function dibujarFigura(){ 

    push();
    noStroke();
    tint( paleta.darColor());

    let cual = int(random(cant));
    let x = random( 0 , width);
    let y = random( 0 , height);

    translate(x,y);
    let angulo = radians(map( x , 0 , width , 90 , 540 ));
    rotate(angulo);
    scale(random(0.2,0.8));
    
    
    image(figuras[cual], 0, 0);
    pop();
    dibujadas++;
}