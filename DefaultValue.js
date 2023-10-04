const profile ={
    fristName: "Raffi",
    lastName: "Ahmad",
    age: 30
}
const {fristName, age, lastName, isMale = false} = profile;
console.log(fristName);
console.log(lastName);
console.log(age);
console.log(isMale);
