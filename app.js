// function assynFunc() {
//     return new Promise((resolve ,reject) =>{
//         setTimeout (() =>{
//             console.log("Some data 1");
//             resolve("Success");
//         } , 4000);
//     });
// };
// console.log("Fetcehing data1....");
//  assynFunc().then((res) =>{
//     console.log(res);
//     console.log("Fetching data 2...");

//     assynFunc2().then((res) =>{});
// });
// function assynFunc2() {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("Data 2..")
//             resolve("Success");
//         }, 4000);
//     });
// };
// function api(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Weather data ");
//         }, 2000);
//     });
// };
// async function getweather (){
//     await api();
//     await api(2);
    

// };

function getdata(dataID){
    return new Promise((resolve , reject) =>{
            setTimeout(()=>{
      console.log("Data =", dataID);
        resolve("success");
        
    },2000);
    })

 }
 (async function (){
    console.log("This is first data 1");
    await getdata(1);
    console.log("This is first data 2");

    await getdata(2);
    console.log("This is first data 3");
    await getdata(3);
    console.log("This is first data 4");
    await getdata(4);
    console.log("This is first data 5");
    await getdata(5);

 })();

 getdata(1).then((res) =>{
    console.log(res);
    return getdata(2);
    
       
    }).then((res) =>{
        console.log(res);
    }).then((res) => {
        console.log("Congtatulations");
    });
    
 
getdata(1 , ()=>{
    console.log("Getting data 1");
    getdata(2 , ()=> {
        console.log("Getting data 1");

        getdata(3,() =>{
            console.log("Getting data 1");
            getdata(4);
            console.log("Getting data 1");
        });
         
    });
});













///Global Scpe
// let fname = "Hassan";
// function greet(){
//     console.log(fname);
// }
// greet();

//fucntion scope
// function greet(){
//     let msg = "Hii , Hassan";
//     console.log(msg);
// }
// greet();

// class car {
//     debugger;

//     constructor( name , year){
//         this.name = name;
//         this.year = year;

//     }
// }

// const mycar = new car("BMW", 20);
// const mycar1 = new car("Ferari", 22);
// console.log(mycar.name +"="+ mycar1.year);
// let firstname, lastname, price, discount ,fullprice;
// firstname = "Hassan";
// lastname = "raza";
// price =  50;
// discount = 0.30;
// fullprice = price -discount;
// // console.log(firstname + "this is total price = "+ fullprice);
// const myfunction = ( a ,b) =>{
//     return a * b;


// }
// let result = myfunction(21 , 9);
// console.log( "product = " + result);
// const person = {
    
// fullName : function (){
//     return this.firstName +" "+ this.lastName ;
// }

// }
const person1  = {
    firstName : "Hassan",
    lastName  : "Raza",
}
const person2  = {
    firstName : "Sarfaraz",
    lastName  : "Ali",
}
let result = Object.entries(person2 , person1);
console.log(result);


// Callbacks Functions 

function sum( a , b){
    console.log(a + b);
}
function calculator(a , b , sumcalback){
    sumcalback(a , b);

}
calculator(4 , 8, (a,b) =>{
    console.log(a+b);
});
let age = 19;
if(age >= 18){
    if(age >= 60){
        console.log("Its is senior");

    }else{
        console.log("middle");
    }

}else{
    console.log("This is child");
}

