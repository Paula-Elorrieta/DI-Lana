function sumar(a: number, b:number): number {
    return a + b;
}

const resultado  = sumar(10,20);
console.log(resultado);

const sumarFlecha = (a:number, b:number):number => {
    return a + b;
}

const resultado2 = sumarFlecha(10,20);
console.log(resultado2);

function multiplicar( numero: number, otroNumero?: number, base:number = 2 ): number {
    return numero * base;
}

const multiplicarFlecha = ( numero: number, otroNumero?: number, base:number = 2 ): number => {
    return numero * base;
}

console.log(multiplicarFlecha(5,2));
console.log(multiplicarFlecha(5));
console.log(multiplicarFlecha(5,0,2));

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarPv: () => void;
}

function curar( personaje: PersonajeLOR, curarX:number ): void {

    personaje.pv += curarX;
}

const curarFlecha = ( personaje: PersonajeLOR, curarX:number ): void  =>{

    personaje.pv += curarX;
}


const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarPv() {
        console.log( 'Puntos de vida:', this.pv );
    }
}

curar( nuevoPersonaje, 20 );

nuevoPersonaje.mostrarPv();
