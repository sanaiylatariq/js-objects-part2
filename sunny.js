// // objects in depth
 const tinderuser = {}
tinderuser.id = "123abc"
tinderuser.name = "sanaiyla"
tinderuser.isLoggedIn = "false"
// // // console.log(tinderuser);
const primeuser = {
    name:"kato",
    email:"sunny@gmail.com",
    fullinfo: {
userfullname:{
    firstname:"tariq",
    lastname:"mehmood",
    grandpaname:{
        naniname:"nani"
    }}}}
// // console.log(primeuser.fullinfo.userfullname.firstname);
// // console.log(primeuser.fullinfo.userfullname.grandpaname.naniname);
// // let obj1 = {1:"a", 2:"b"}
// // let obj2 = {3:"a", 4:"b"}
// // let obj3 = {5:"a", 6:"b"}
// // let objall = Object.assign({},obj1,obj2,obj3)
// // console.log(objall);
// // let array1 = [1,2,3,4]
// // let array2 = [4,5,6,]
// // let array3 = [5,6,7,]
// // console.log(Array.of(array1,array2,array3));
// // console.log(Array.apply(array1,array2,array3));
// // // console.log(Array.assign({},array1,array2,array3));
// // console.log(Array.bind(array1,array2,array3));
// // let arrayall = Array(array1,array2,array3)
// // console.log( Array(...array1,...array2,...array3))
// // let obj1 = {1:"a",2:"b"}
// // let obj2 ={3:"a",4:"b"}
// // let obj3 = {5:"a",6:"b"}

// // let objall = Object.assign({},obj1,obj2,obj3)
// // console.log(objall);
// // let array1 = [0,1,2,3,]
// // let array2 = [5,56,6,]
// // let array3 = [5,6,7,]
// // console.log(array3.push(99));
// // console.log(array1.pop());
// // let arrayall = Array(...array1,...array2,...array3)
// // console.log(arrayall);
// // console.log(Array.of(obj1));
// // console.log(Array.isArray(array1));
// // let obj1 = {a:"1", b:"2"}
// // let obj2 = {c:"1", d:"2"}
// // let obj3 = {e:"1", f:"2"}
// //  let objall = Object.assign({},obj1,obj2,obj3)
// // let objalls =  {...obj1,...obj2,...obj3}
// // console.log(objall);
// // console.log(objalls);


// // arrays ko combine karnay k lye simple brackets


// let array1 = [1,2,3,]
// let array2 = [4,5,6,]
// let array3 = [4,5,6,7,]
// let arrayall = Array (...array1,...array2,...array3)
// console.log(arrayall);


// // objects ko combine karnay k lye parenthesis


// let obj1 = {1:"a", 2:"b"}
// let obj2 = {3:"a", 4:"b"}
// let obj3 = {3:"a", 4:"b"}
// let objall = {...obj1,...obj2,...obj3}

// console.log(objall);
let sunny = [
    {
        name:"sunny",
        id:"sunny@gmail.com"
    }, 
    {
        name:"sunny",
        id:"sunny@gmail.com"
    }, 
    {
        name:"sunny",
        id:"sunny@gmail.com"
    }, 
]
console.log( sunny[1].id)
console.log(sunny[1].name);
console.log(tinderuser);

// obj.keys ya values kren to apk ps obj array mn convert hojaega which u can use later


console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(typeof Object.values(tinderuser));

// array darr array
console.log(Object.entries(tinderuser));

// agar ek value nh hay to system crash karay ga so to avoid this we ask particular obj if itb has that property or not


console.log(tinderuser.hasOwnProperty(`isLoggedIn`));
console.log(tinderuser.hasOwnProperty(`address`));
