class Figura {

    constructor(x_, y_, an_, al_, figuras, cual, paleta) {
        this.x = x_;
        this.y = y_;
        this.an = an_;
        this.al = al_;
        this.baseX = x_;
        this.baseY = y_;
        this.cual = cual;
        this.figuras = figuras;
        this.paleta = paleta;
        this.elColor = paleta.darColor();
        this.cambioDeColorHecho = false;
        this.maxAn = random(150, 200);
        this.angulo = 0;
        this.tipo = (this.cual % 2 === 0) ? 'par' : 'impar'; // Alterna entre círculo y cuadrado
        this.tiempoCreacion = millis();
        this.delayCrecimiento = random(0, 2000);
        this.distRotacion = random(0.5, 3);
        this.velocidadBase = (this.tipo === 'par') ? 0.01 : -0.005;
        this.velocidad = this.velocidadBase;
        //this.creciendo = false;
    }



    cambiarColor() {
        if (!this.cambioDeColorHecho) {
            this.elColor = this.paleta.darColor();
            this.cambioDeColorHecho = true;
        }
    }

    dibujar(haySonido) {
        push();
        noStroke();

        translate(this.x, this.y);
        rotate(this.angulo || 0);
        tint(this.elColor);
        image(this.figuras[this.cual], 0, 0, this.an, this.al);
        pop();

        if (haySonido) {
            this.crecer();
        }
    }



    rotar(pitch, duracion) {
        this.umbralNota = 55;

        let factorDuracion = map(duracion, 0, 3000, 1, 3, true);

        let velocidadObjetivo = this.velocidadBase; // valor por defecto

        if (this.tipo === 'par') {
            if (pitch > this.umbralNota) {
                velocidadObjetivo = map(pitch, this.umbralNota, 127, 0.01, 0.05) * factorDuracion * this.distRotacion;
            }
        } else if (this.tipo === 'impar') {
            if (pitch <= this.umbralNota) {
                velocidadObjetivo = map(pitch, 0, this.umbralNota, -0.005, -0.025) * factorDuracion * this.distRotacion;
            }
        }

        // Ajuste manual de la velocidad hacia la velocidad objetivo
        let paso = 0.001; // Qué tan rápido cambia la velocidad

        if (this.velocidad < velocidadObjetivo) {
            this.velocidad = min(this.velocidad + paso, velocidadObjetivo);
        } else if (this.velocidad > velocidadObjetivo) {
            this.velocidad = max(this.velocidad - paso, velocidadObjetivo);
        }

        this.angulo += this.velocidad;
    }

    crecer() {

        if (this.an < this.maxAn) {
            this.an += random(0.1, 5);
        }
        if (this.al < this.maxAn) {
            this.al += random(0.1, 5);
        }
    }

}

