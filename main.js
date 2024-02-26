// Q1

let person3  = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]

    }

function displayFavFoods(person) {
    for (let[key, value] of Object.entries(person)){
        if (Array.isArray(value)) {
            console.log(`${key}: ${value.join(", ")}`);
        } else {
            console.log(`${key}: ${value}`);
        }
        if (key === 'shakes' && Array.isArray(value)) {
            for (let shakePreference of value) {
                for (let  [shakeShop, shakeFlavor] of Object.entries(shakePreference)) {
                    console.log(`${shakeShop}: ${shakeFlavor}`);
                }
            }
        }
    }
}
displayFavFoods(person3);

// Q 2

function Person(name, age) {
    this.Name = name;
    this.Age =  age;

    this.printInfo = ()  =>  {
        console.log(`${this.Name}, ${this.Age}`);
    };

    this.addAge  = () => {
        this.Age++;
    };
}


let person1 = new Person('Eliam',  1.5);
let person2 =  new Person('Anderson', 0);

person1.addAge();
person1.addAge();
person1.addAge();


person1.printInfo();
person2.printInfo();


// Q3 

// function stringLength(string){
//     if (string.length < 10) {
//         console.log('Small Number')
//     } else  {
//         console.log('Big Word')
//     }
// }
// stringLength('Hello and welcome to my TedTalk');

function strLng(str){
    const lengthPromise = new Promise((resolve, reject) =>{
        if (str.length  < 10) {
            resolve ('Small Number');
        } else {
            reject('Big Word!');
        }
    });
    console.log(lengthPromise);
};
strLng('Hello and welcome to my TedTalk')

