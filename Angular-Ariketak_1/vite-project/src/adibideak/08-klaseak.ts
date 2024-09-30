class PersonaNormal {

    constructor (
        public nombre: string,
        public direccion: string
    ){}

}

class Heroe extends PersonaNormal {

    constructor (
        public alterEgo:string,
        public nombreReal:string,
        public edad?: number
    ){
        super (nombreReal, "New York, Usa")
    }

}

const ironman = new Heroe("Ironman", "Tony Stark", 45);
console.log(ironman); 