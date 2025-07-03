class Cuadrado{

    constructor( x_ , y_ ){

        this.x = x_;
        this.y = y_;

        this.t = 50;
        push();
        colorMode( HSB ,360,100,100,100);
        this.elColor = color( random(200,280) , 100 , 100 , 30 );
        pop();

    }

    crecer(){
        this.t += 4;
    }

    dibujar(){
        push();
        fill(this.elColor);
        rect( this.x , this.y , this.t , this.t );
        pop();
    }

}