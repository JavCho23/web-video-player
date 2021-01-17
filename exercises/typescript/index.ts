console.log('Hello, TypeScript');

function add(a:number,b:number):number {
    return a + b
}

let numerador:number = 42
let denominador:number = 6

let resultado: number = numerador / denominador 


// Arreglos 

const people: Array<string | number> = []
people.push(1)
people.push('Miguel')
 

// Enum

enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = 'Azul'
}

let colorFavorito: Color = Color.Rojo

// Any

let comodin: any = "Joker"
comodin = { type: 'Wildcard' }

// Object

let someObject: Object = {}