alert("Hola Isaac, Soy una función.")


function calculateDiscountedPrice (price, discountPercentage){
    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount

    return priceWithDiscount
}

const originalPrice = 100
const discountPercentage = 20
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)

console.log('original price: $' + originalPrice);
console.log('Discount: ' + discountPercentage + '%');
console.log('price with  Discount: ' + finalPrice);