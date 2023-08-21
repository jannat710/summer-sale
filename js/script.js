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

    // Enable Make Purchase Button
    const makePurchase = document.getElementById("purchase");
    if (inDecimalTotalPrice > 0) {
        makePurchase.removeAttribute('disabled');
    } else {
        makePurchase.removeAttribute('disabled', true);
    }

    //Enable Apply Button
    const inputField = document.getElementById("text-delete");
    const btnField = document.getElementById("btn-delete");
    
    if (inDecimalTotalPrice >= 200) {
      btnField.removeAttribute('disabled');
    }
    
    btnField.addEventListener("click", function() {
      if (inputField.value === "SELL200") {

        // Discount Amount
        const discount = inDecimalTotalPrice * 0.2;
        const inDecimalDiscount = discount.toFixed(2);
        document.getElementById("discount-price").innerText = inDecimalDiscount;

        // New Amount
        const newTotalPrice = inDecimalTotalPrice - discount;
        const inDecimalNewTotal = newTotalPrice.toFixed(2);
        document.getElementById("new-price").innerText = inDecimalNewTotal;
      }
    });


    //Clear Page
    const goHome = document.getElementById("go-home");
    goHome.addEventListener('click', function () {
        window.location.href = "https://summer1-sale.netlify.app/";
    })


}