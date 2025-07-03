class Figura {

    constructor(x_, y_, an_, al_, figuras, cual, paleta) {
        this.x = x_;
        this.y = y_;
        this.an = an_;
        this.al = al_;
        this.cual = cual;
        this.figuras = figuras;
        this.paleta = paleta;
        push();
        this.elColor = paleta.darColor();
        pop();
        this.maxAn = random(90, 120);
        this.angulo = 0;
        this.tipo = (this.cual % 2 === 0) ? 'par' : 'impar'; // Alterna entre círculo y cuadrado
    }

    dibujar() {
        push();
        noStroke();
        translate(this.x, this.y);
        rotate(this.angulo || 0);
        tint(this.elColor);
        image(this.figuras[this.cual], 0, 0, this.an, this.al);
        pop();
    }

    rotar(pitch) {
        this.umbralNota = 50; // Por ejemplo, 50 es la nota MIDI correspondiente a A3 (La)
        this.velocidad = 0.02; // velocidad de rotación


        // Alterna la velocidad de rotación según el tipo de figura
        if(this.tipo === 'par') {
            if(pitch > this.umbralNota) {   
                this.velocidad = map(pitch, this.umbralNota, 127, 0.02, 0.1); // velocidad de rotación para figuras pares
                this.angulo += this.velocidad; // incrementa el ángulo para figuras pares
            }
        } else if (this.tipo === 'impar') {
            if(pitch <= this.umbralNota) {
                this.velocidad = map(pitch, 0, this.umbralNota, -0.02, -0.1); // velocidad de rotación para figuras impares
                this.angulo += this.velocidad; // incrementa el ángulo para figuras impares
            } 
        }

        //let diff = pitch - this.umbralNota;
        //this.angulo += this.velocidad * Math.sign(diff) * Math.min(Math.abs(diff) * 0.05, 1);

    }


    crecer() {
        if (this.an < this.maxAn) {
            this.an += random(0.5, 3);
        }
        if (this.al < this.maxAn) {
            this.al += random(0.5, 3);
        }
    }

}
