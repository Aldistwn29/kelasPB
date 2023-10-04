const profile ={
    fristName: "Raffi",
    lastName: "Ahmad",
    age: 19
}
let fristName = "Dimas";
let age= 20;
console.log(fristName);
console.log(age);
// menginisialisasikan nilai baru dengan destrucing object
({fristName, age} = profile);
console.log(fristName);
console.log(age);