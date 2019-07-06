
// create cart object with 0 inventory
var cart = {
    nachoCheese: 0,
    blazeDoritos: 0,
    classicLays: 0,
    bakedLays: 0,
    mtnDew: 0,
    bajaBlast: 0,
    classicCoke: 0,
    vanillaCoke: 0,

    // total cart value
    cartValue: 0,
}

// add Nacho Cheese Doritos to cart
function addNacho() {
    var totalDoritos = document.getElementById("nachoCheese").value;
    console.log(totalDoritos + " bags of Nacho Cheese Doritos has been selected.")
    var price = 1.25;
    var chargedTotal = 0;

    // return total number of items to cart object
    if (cart.nachoCheese == 0) {
        // add value user selects to cart
        cart.nachoCheese = totalDoritos;
        console.log(cart.nachoCheese);
        // determine the cost added to users cart
        chargedTotal = parseFloat(cart.nachoCheese) * 1.25;
        // save new dollar total to cart
        cart.cartValue = cart.cartValue + chargedTotal;
        console.log('The user requests ' + totalDoritos + ' nacho cheese doritos.');
        console.log('The user has been charged: ' + chargedTotal);
        // return the new variable values to the cart object
        return cart.nachoCheese, cart.cartValue;
    } else if (cart.nachoCheese > 0) {
        cart.nachoCheese = parseFloat(cart.nachoCheese) + parseFloat(totalDoritos.value);
        chargedTotal = cart.nachoCheese * price;
        cart.cartValue = cart.cartValue + chargedTotal;
        console.log("The user requests an additional " + totalDoritos + " bags of Dortios.")
        console.log("A charge of $" + chargedTotal + " has been added to the cart.")
        return cart.nachoCheese, cart.cartValue;
    }
}

// add Blaze Doritos to cart
function addBlaze() {
    var totalBlaze = document.getElementById("blazeDoritos").value;
    var price = 1.50;
    var chargedTotal = 0;

    if (cart.blazeDoritos == 0) {
        cart.blazeDoritos = totalBlaze;
        chargedTotal = parseFloat(cart.blazeDoritos) * price;
        cart.cartValue = cart.cartValue + chargedTotal;
        console.log(chargedTotal + ' has been charged to the cart.');
        console.log(cart.blazeDoritos + ' bags of Blaze Doritos have been added.');
        return cart.blazeDoritos, cart.cartValue;
    } else if (cart.blazeDoritos > 0) {
        cart.blazeDoritos = cart.blazeDoritos + totalBlaze;
        chargedTotal = parseFloat(cart.blazeDoritos) * price;
        cart.cartValue = cart.cartValue + chargedTotal;
        console.log('An additional ' + chargedTotal + 'has been added to the total');
        console.log('An additional ' + totalBlaze + 'have been added to the cart');
        return cart.blazeDoritos, cart.cartValue;
    }
}


// add Classic Lays to cart
function addClassic() {
    var totalClassic = document.getElementById("classicLays").value;
    var price = 1.25;
    var chargedTotal = 0;

    if (cart.classicLays == 0) {
        cart.classicLays = totalClassic;
        chargedTotal =  parseFloat(cart.classicLays) * price;
        cart.cartValue = cart.cartValue + chargedTotal;
        console.log(chargedTotal + ' has been charged to the cart.');
        console.log(cart.classicLays + ' bags of Classic Lays have been added.');
        return cart.classicLays, cart.cartValue;
    } else if (cart.classicLays > 0) {
        cart.classicLays = cart.classicLays + parseFloat(totalClassic.value);
        chargedTotal = parseFloat(cart.classicLays) * price;
        cart.cartValue = cart.cartValue + chargedTotal;
        console.log('An additional ' + chargedTotal + 'has been added to the total');
        console.log('An additional ' + totalClassic + 'have been added to the cart');
        return cart.classicLays, cart.cartValue;
    }
}

// add Baked Lays to cart
function addBaked() {
    var totalBaked = document.getElementById("bakedLays").value;
    var price = 1.65;
    var chargedTotal = 0;

    if (cart.bakedLays == 0) {
        cart.bakedLays = totalBaked;
        chargedTotal = parseFloat(cart.bakedLays) * price;
        cart.cartValue = cart.cartValue + chargedTotal;
        return cart.bakedLays, cart.cartValue;
    } else if (cart.totalBaked > 0) {
        cart.bakedLays = cart.bakedLays + totalBaked;
        chargedTotal = parseFloat(cart.bakedLays) * price;
        cart.cartValue = cart.cartValue + chargedTotal;
        return cart.bakedLays, cart.cartValue;
    }
}

// add Mountain Dew to cart
function addMtnDew() {
    var totalDew = document.getElementById("mtnDew").value;
    var price = 2.25;
    var chargedTotal = 0;

    if (cart.mtnDew == 0) {
        cart.mtnDew = totalDew;
        chargedTotal = cart.mtnDew * price;
        cart.cartValue = cart.cartValue + chargedTotal;
        return cart.cartValue, cart.mtnDew;
    } else if (cart.mtnDew > 0) {
        cart.mtnDew = cart.mtnDew + totalDew;
        chargedTotal = parseFloat(cart.mtnDew) * price;
        cart.value = cart.value + chargedTotal;
        return cart.mtnDew, cart.cartValue;
    }
}

// add Baja Blast to cart
function addBajaBlast() {
    var totalBaja = document.getElementById('bajaBlast').value;
    var price = 1.75;
    var chargedTotal = 0;

    if (cart.bajaBlast == 0) {
        cart.bajaBlast = totalBaja;
        chargedTotal = parseFloat(cart.bajaBlast) * price;
        cart.cartValue = cart.cartValue + chargedTotal;
        return cart.bajaBlast, cart.cartValue;
    } else if (cart.bajaBlast > 0) {
        cart.bajaBlast = cart.bajaBlast + totalBaja;
        chargedTotal = parseFloat(cart.bajaBlast) * price;
        cart.cartValue = cart.cartValue + chargedTotal;
        return cart.bajaBlast, cart.cartValue;
    }
}

// add Classic Coke to cart
function addCoke() {
    var totalCoke = document.getElementById('classicCoke').value;
    var price = 1.50;
    var chargedTotal = 0;

    if (cart.classicCoke == 0) {
        cart.classicCoke = totalCoke;
        chargedTotal = parseFloat(cart.classicCoke) * price;
        cart.cartValue = cart.cartValue + chargedTotal;
        return cart.cartValue, cart.cartValue;
    } else if (cart.classicCoke >= 1) {
        cart.classicCoke = cart.classicCoke + totalCoke;
        chargedTotal = parseFloat(cart.classicCoke) * price;
        cart.cartValue = cart.cartValue + chargedTotal;
        return cart.classicCoke, cart.cartValue;
    }
}

// add Vanilla Coke to cart
function addVanillaCoke() {
    var totalVanilla = document.getElementById('vanillaCoke').value;
    var price = 1.65;
    var chargedTotal = 0;

    if (cart.vanillaCoke == 0) {
        cart.vanillaCoke = totalVanilla;
        chargedTotal = parseFloat(cart.vanillaCoke) * price;
        cart.cartvalue = cart.cartValue + chargedTotal;
        return cart.cartValue, cart.vanillaCoke;
    } else if (cart.vanillaCoke >= 1) {
        cart.vanillaCoke = cart.vanillaCoke + totalVanilla;
        chargedTotal = parseFloat(cart.vanillaCoke) * price;
        cart.cartValue = cart.cartValue + chargedTotal;
        return cart.cartValue, cart.vanillaCoke;
    }
}

// calculate total


// alert window that displays total

