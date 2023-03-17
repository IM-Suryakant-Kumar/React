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

// let obj2 = obj;
// obj2.name = "abcd"

// let obj2 = { ...obj }; // shallow copy
// obj2.name = "abcd";
// obj2.add.country = "abcd";

// let obj2 = { ...obj, add:{...obj.add}};
// obj2.name = "abcd";
// obj2.add.country = "abcd";

// let obj2 = { ...obj, add:{...obj.add, state: {...obj.add.state}}}; // deep copy
// obj2.add.state.code = "abcd";

let obj2 = JSON.parse(JSON.stringify(obj))  // deep copy
obj2.add.state.code = "abcd";

console.log(obj);
console.log(obj2);
