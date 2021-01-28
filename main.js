const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
let click = document.getElementById('firstQuantity').value;
let clickNumber = parseFloat(click);
let price = document.getElementById('firstPrice').innerText;
let firstPrice = parseFloat(price);
let sum = 1278;
let sumTotal = 1291.32;
let myBalance = document.getElementById('myBalance').innerText;
let myBalanceFixed =parseFloat(myBalance);
if(clickNumber==1){
    var totalBalance =myBalanceFixed - sumTotal;
    balanceCheck2(totalBalance);

}
button1.addEventListener("click", function () {
    clickNumber++;
    let totalPrice = clickNumber * price;
    if (clickNumber > 0) {
        document.getElementById('button2').disabled = false;
        sum = sum + firstPrice;
        sumTotal = sumTotal + (firstPrice+12.12);
       var sumTotalFixed=sumTotal.toFixed(2)
       var totalBalance =myBalanceFixed - sumTotalFixed;
       var totalTax = sumTotalFixed -sum;
       var totalTaxFixed =totalTax.toFixed(2)
        document.getElementById('tax').innerText = totalTaxFixed;
        document.getElementById("subTotal").innerText = sum
        document.getElementById("total").innerText = sumTotalFixed
        balanceCheck(sumTotalFixed)
        balanceCheck2(totalBalance)
    }
    update('firstQuantity', clickNumber)
    update('firstPrice', totalPrice);
})
button2.addEventListener("click", function () {
    clickNumber--;
    let totalPrice = clickNumber * firstPrice;
    if (clickNumber == 0) {
        document.getElementById('button2').disabled = true;
    }
    
    if (clickNumber >= 0) {
        sum = sum - price;
        sumTotal = sumTotal - (firstPrice+12.12);
        sumTotalFixed=sumTotal.toFixed(2)
        totalTax = sumTotalFixed -sum;
        totalTaxFixed =totalTax.toFixed(2)
        totalBalance =myBalanceFixed - sumTotalFixed;
        document.getElementById('tax').innerText = totalTaxFixed;
        document.getElementById("total").innerText = sumTotalFixed
        document.getElementById("subTotal").innerText = sum
        balanceCheck(sumTotalFixed)
        balanceCheck2(totalBalance)
        
        
        
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
        sumTotal = sumTotal-(priceCase+1.2)
        var sumTotalFixed = sumTotal.toFixed(2);
        totalTax = sumTotalFixed -sum;
        totalTaxFixed =totalTax.toFixed(2)
        totalBalance =myBalanceFixed - sumTotalFixed;
        document.getElementById('tax').innerText = totalTaxFixed;
        document.getElementById("subTotal").innerText = sum
        document.getElementById("total").innerText = sumTotalFixed
        balanceCheck(sumTotalFixed)
        balanceCheck2(totalBalance)
    }
    update('secondQuantity', clickNumber2)
    update('secondPrice', total)
})
button4.addEventListener("click", function () {
    clickNumber2++;
    let total = clickNumber2 * priceCase;
    if (clickNumber2 > 0) {
        document.getElementById('button3').disabled = false;
        sum = sum + priceCase;
        sumTotal = sumTotal+(priceCase+1.2)
        var sumTotalFixed = sumTotal.toFixed(2);
        totalTax = sumTotalFixed -sum;
        totalTaxFixed =totalTax.toFixed(2)
        totalBalance =myBalanceFixed - sumTotalFixed;
        document.getElementById('tax').innerText = totalTaxFixed;
        document.getElementById("subTotal").innerText = sum
        document.getElementById("total").innerText = sumTotalFixed;
        balanceCheck(sumTotalFixed)
        balanceCheck2(totalBalance)
    }
    update('secondQuantity', clickNumber2)
    update('secondPrice', total)
})
function update(id, totalPrice) {
    document.getElementById(id).value = totalPrice;
    document.getElementById(id).innerText = totalPrice;
}
 
let remove=document.getElementById('remove')
let remove2=document.getElementById('remove2')
remove.addEventListener("click",function(){
    clickNumber = 1
    clickNumber2=1;
    sum = 1278;
    sumTotal = 1291.32;
    totalTax = 13.32;
        var totalBalance =myBalanceFixed - sumTotal;
        balanceCheck2(totalBalance);
        balanceCheck(sumTotal);
    
    
    document.getElementById("subTotal").innerText = sum
    document.getElementById('firstQuantity').value = clickNumber
    document.getElementById('secondQuantity').value = clickNumber2
    document.getElementById("firstPrice").innerText = firstPrice;
    document.getElementById("secondPrice").innerText = priceCase;
    document.getElementById('tax').innerText = totalTax;
    document.getElementById("total").innerText = sumTotal;
    
})
remove2.addEventListener("click",function(){
    clickNumber2 = 1;
    clickNumber = 1;
    sum = 1278;
    sumTotal = 1291.32;
    totalTax = 13.32;
    
        var totalBalance =myBalanceFixed - sumTotal;
        balanceCheck2(totalBalance);
        balanceCheck(sumTotal);
    
    
    document.getElementById("subTotal").innerText = sum
    document.getElementById('firstQuantity').value = clickNumber
    document.getElementById('secondQuantity').value = clickNumber2
    document.getElementById("firstPrice").innerText = firstPrice;
    document.getElementById("secondPrice").innerText = priceCase;
    document.getElementById('tax').innerText = totalTax;
    document.getElementById("total").innerText = sumTotal;
    
})

var checkOut =document.getElementById('checkOut')
checkOut.addEventListener("click",function(){
    document.getElementById('firstSection').style.display = "none";
    document.getElementById('secondSection').style.display = "block";
})
var press = document.getElementById('press')
press.addEventListener("click",function(){
    document.getElementById('secondSection').style.display = "none";
    document.getElementById('thirdSection').style.display = "block";
})

function balanceCheck(amount){
    document.getElementById('myAmount').innerText = amount;
    
}
function balanceCheck2(balance){
    document.getElementById('myBalance').innerText = balance;

}