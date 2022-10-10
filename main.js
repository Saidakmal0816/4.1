// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
  
//   myFirst();
// //   mySecond();


// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }
  
//   let result = myCalculator(5, 5);
//   myDisplayer(result);

// function myDisplayer(something) {
//     document.getElementById("demo").innerHTML = something;
//   }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
  
// myCalculator(5, 5, myDisplayer);



 

// let order = (call_production) => {
//     console.log("Order placed, Please call the prodection");
//     call_production()
// }

// let production = () => {
//     console.log("production has been started");
// }

// order(production)


// let stocks = {
//     Fruits : ["strawberry", "grapes", "banana", "apple"],
//     liquid : ["water", "ice"],
//     holder : ["cone", "cup", "stick"],
//     toppings : ["chocolate", "peanuts"],
// };

// let order = (fruit_name, call_production) => {
//     setTimeout(() => {
//         console.log(`${stocks.Fruits[fruit_name]} was selected`);
//         call_production()
//     }, 2000)
// }

// let production = () => {
//     setTimeout(() => {
//         console.log("production has started");
//         setTimeout(() => {
//             console.log("fruit has been chopped");
//             setTimeout(() => {
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was addded`);
//                 setTimeout(() => {
//                     console.log("The machine has started");
//                     setTimeout(() => {
//                         console.log(`The ice cream was put into the ${stocks.holder[0]}`);
//                         setTimeout(() => {
//                             console.log(`The client want to eat with ${stocks.toppings[0]} and ${stocks.toppings[1]} `);
//                             setTimeout(() => {
//                                         console.log("The ice cream was served to the client");
//                                 },2000)
//                         },4000)
//                     },2000)
//                 }, 1000)
//             },1000)
//         },2000)
//     },0000)
// }
  

// order(0, production)
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts", "cream"],
};
let date = 4
let is_shop_open = true;
if (date < 3) {
    is_shop_open = false
}


let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work())
            },time)
        } else {
            reject(console.log("The shop is closed"))
        }
    })
}


order(2000, () => console.log(``))
    .then(() => {
    return order(0000, ()=> console.log("Muzqaymoq yeysan"))
    })
    .then(() => {
    return order(2000, ()=> console.log("mevali yeysan"))
    })
    .then(() => {
    return order(1000, ()=> console.log(` yana nma yeysan`))
    })
    .then(() => {
    return order(1000, ()=> console.log("uje tayyor buvotti"))
    })
    .then(() => {
    order(2000, () => console.log(`uje tayyor `))
    })
    .then(() => {
    return order(3000, ()=> console.log(`  ye tez`))
    })
    .then(() => {
    return order(2000, ()=> console.log("hammang yiysan"))
    })
    .catch(() => {
    console.log(" ye hammang");
    })
    .finally(() => {
    console.log("yeb bugan buseng yuqol hammang");
})