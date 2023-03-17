// let arr = ["hi", "I", "am", "Sujeet"];

// // let a = arr[0];
// // let b = arr[1];

// // let [a, b, , d] = arr;
// // let [a, b, , d, extra] = arr;
// let [a, b, , d, extra="hello"] = arr;

// console.log(a, b, d, extra);

// let obj = {
//     name: "Sujeet",
//     state: "Bihar",
//     country: "India",
// }

// let name = obj.name;
// let state = obj.state;

// let {name, state, country} = obj;

// let {name: FirstName, state, country, extra ="Hello"} = obj;

// console.log(FirstName, state, country, extra);


let obj = {
   name: "sujeet",
   add: {
      country: "India",
      state: {
         code: "DL",
         pin: "11111",
      },
   },
};

// let {name} = obj;

// let {add: {country: abdc}} = obj;

let {add: {state: {code: cd}}} = obj;

console.log(cd);