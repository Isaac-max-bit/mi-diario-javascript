// const productName = 'Smartphone'
// const price = 499
// const brand = 'TechCo'

// function getProductDetails (){
//     const productName = 'Laptop'
//     const price = 899

//     return `The ${productName} costs $${price} and is from the brand ${brand}.`
// }

// console.log(`the ${productName} costs $${price} and is from the brand ${brand}`)

// const userPoints = 150


// function checkAccess(){
//     if(userPoints < 100){
//         const message = "Access denied: Insufficient points!"
//         return message
//     } else {
//         const message = "Access granted: Enjoy the premium features!"
//         return message
//     }
// }

// console.log(checkAccess());


// const globalVariable = '😃'

// function localOne (){
//     console.log('Global 1: ', globalVariable);
//     // console.log('Local 1: ', LocalVariable);

//     function localTwo() {
//         const carrot = '🥕'
//         console.log('Local 2: ', carrot)
//     }

//     function localThree (){
//         console.log('Local 3: ', carrot)
//     }

//     localTwo();
//     localThree();
// }

// console.log(localOne());

const globalVariable = '😃';

function localOne() {
    console.log('Global 1: ', globalVariable);
    // console.log('Local 1: ', LocalVariable);

    const carrot = '🥕'; // Mover carrot aquí para que sea accesible en localOne

    function localTwo() {
        console.log('Local 2: ', carrot);
    }

    function localThree() {
        console.log('Local 3: ', carrot); // Ahora carrot es accesible
    }

    localTwo();
    localThree();
}

localOne(); // Cambié console.log(localOne()); por solo localOne();
