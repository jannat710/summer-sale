let total = 0;
function handleCLikBtn(target) {
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);
    const totalPrice = target.childNodes[3].childNodes[5].innerText.split(" ")[0];

    // Total Amount
    total = parseFloat(total) + parseFloat(totalPrice);
    const inDecimalTotalPrice = total.toFixed(2);
    document.getElementById("total-price").innerText = inDecimalTotalPrice;

    // Discount Amount
    const discount = inDecimalTotalPrice * 0.2;
    const inDecimalDiscount =  discount.toFixed(2);
    document.getElementById("discount-price").innerText = inDecimalDiscount;

    // New Amount
    const newTotalPrice = inDecimalTotalPrice - inDecimalDiscount;
    const inDecimalNewTotal = newTotalPrice.toFixed(2);
    document.getElementById("new-price").innerText = inDecimalNewTotal;

    // Enable Make Purchase Button
    const makePurchase = document.getElementById("purchase");
    if(inDecimalTotalPrice > 0){
        makePurchase.disabled = false ;
    }else{
        makePurchase.disabled = true ; 
    }

}