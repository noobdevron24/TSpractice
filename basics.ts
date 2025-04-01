let userName: string;
let userAge: number;

userAge = 33;
userName = 'Ron'; 

const user =(name: string, age: number) => {
  console.log(`Hello my name is ${name}, and i am ${age} years old`);
}

user(userName, userAge);