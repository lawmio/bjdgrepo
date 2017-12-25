// let x:[string,number]
// x = ["hello",10]

// x[3] = "world"; // OK, 'string' can be assigned to 'string | number'

// console.log(x[10].toString()) // OK, 'string' and 'number' both have 'toString'


// enum Color {Red = 1, Green, Blue}  
// let c: Color = Color.Green;
// console.log(c)

// let notSure: any = 4;
// console.log(notSure)
// notSure = "maybe a string instead";
// console.log(notSure)
// notSure = false; // okay, definitely a boolean
// console.log(notSure)



// function printLabel(labelledObj: { label: string }) {
//     console.log(labelledObj.label);
// }

// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);

// interface SquareConfig {
//     color?: string;
//     width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//     let newSquare = {color: "white", area: 100};
//     if (config.color) {
//         // Error: Property 'clor' does not exist on type 'SquareConfig'
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }

// let mySquare = createSquare({color: "black"});
// console.log(mySquare)


// interface Point{
//     readonly x: number
//     readonly y: number
// }

// let p1:Point = {x:10,y:20}

// p1.x = 5//error,because x is readonly


// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!

// interface StringArray {
//     [index: number]: string;
// }

// let myArray: StringArray;
// myArray = ["Bob", "Fred"];

// let myStr: string = myArray[0];
// console.log(myArray)
// console.log(myStr)


// let z = 100
// function addToZ(x,y){
//     return x + y + z
// }

// function add(x:number,y:number):number{
//     return x + y
// }

// let myadd = function (x:number,y:number):number{
//     return x + y
// }

// let myAdd: (x:number,y:number) => number = function(x:number,y:number){
//     return x + y
// }



// class Greeter{
//     greeting:string
//     constructor(message:string){
//         this.greeting = message
//     }
//     greet(){
//         return "Hello " + this.greeting;
//     }
// }

// let greeter = new Greeter("world")
// console.log(greeter.greet())

// class Animal {
//     name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//       console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
//   }
  
//   class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//       console.log("Slithering...");
//       super.move(distanceInMeters);
//     }
//   }
  
//   class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 45) {
//       console.log("Galloping...");
//       super.move(distanceInMeters);
//     }
//   }
  
//   let sam = new Snake("Sammy the Python");
//   let tom: Animal = new Horse("Tommy the Palomino");
  
//   sam.move();
//   tom.move(34);

// function extend<T,U>(first: T, second: U): T & U{
//     let result = <T & U>{}
//     for(let id in first){
//         (<any>result)[id] = (<any>first)[id]
//     }
//     for(let id in second){
//         if(!result.hasOwnProperty(id)){
//             (<any>result)[id] = (<any>second)[id]
//         }
//     }
//     return result
// }

// class Person {
//     constructor(public name: string){}
// }

// interface Loggable{
//     log():void
// }

// class ConsoleLogger implements Loggable{
//     log(){
//     }
// }

// let jim = extend(new Person("jim"), new ConsoleLogger())
// let n = jim.name
// jim.log(); //交叉类型

// function padLeft(value: string,padding:string|number|boolean){
//     if(typeof padding === "number"){
//         return Array(padding + 1).join(" ") + value
//     }
//     if(typeof padding === "string"){
//         return padding + value
//     }
//     throw new Error (`Expected string or number , got'${padding}'.`)
// }
// console.log(padLeft("Hello world",4))

function getGreeting() {
    return "howdy";
}
class MyGreeter extends Greeter { }

greet("hello");
greet(getGreeting);
greet(new MyGreeter());

type GreetingLike = string | (() => string) | MyGreeter;

declare function greet(g: GreetingLike): void;