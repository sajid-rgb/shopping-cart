const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
let click = document.getElementById('firstQuantity').value;
let clickNumber = parseFloat(click);
let price = document.getElementById('firstPrice').innerText;
let firstPrice = parseFloat(price);
let sum = 1278;
button1.addEventListener("click", function () {
    clickNumber++;
    let totalPrice = clickNumber * price;

    if (clickNumber > 0) {
        document.getElementById('button2').disabled = false;
        sum = sum + firstPrice;
        document.getElementById("subTotal").innerText = sum
        document.getElementById("total").innerText = sum
    }
    update('firstQuantity', clickNumber)
    update('firstPrice', totalPrice)
})
button2.addEventListener("click", function () {
    clickNumber--;
    let totalPrice = clickNumber * firstPrice;
    if (clickNumber == 0) {
        document.getElementById('button2').disabled = true;
    }
    if (clickNumber >= 0) {
        sum = sum - price;
        document.getElementById("subTotal").innerText = sum
        document.getElementById("total").innerText = sum
    }
    update('firstQuantity', clickNumber)
    update('firstPrice', totalPrice)
})
let priceCase = 59
let click2 = document.getElementById('secondQuantity').value;
let clickNumber2 = parseFloat(click2);
button3.addEventListener("click", function () {
    clickNumber2--;
    let total = clickNumber2 * priceCase;
    console.log(clickNumber2);
    if (clickNumber2 == 0) {
        document.getElementById('button3').disabled = true;
    }
    if (clickNumber2 >= 0) {
        sum = sum - priceCase;
        document.getElementById("subTotal").innerText = sum
        document.getElementById("total").innerText = sum
    }
    update('secondQuantity', clickNumber2)
    update('secondPrice', total)
})
button4.addEventListener("click", function () {
    clickNumber2++;
    let total = clickNumber2 * priceCase;
    console.log(clickNumber2);
    if (clickNumber2 > 0) {
        document.getElementById('button3').disabled = false;
        sum = sum + priceCase;
        document.getElementById("subTotal").innerText = sum
        document.getElementById("total").innerText = sum
    }
    update('secondQuantity', clickNumber2)
    update('secondPrice', total)
})
function update(id, totalPrice) {
    document.getElementById(id).value = totalPrice;
    document.getElementById(id).innerText = totalPrice;
}

