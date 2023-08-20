let total = 0;
function handleCLikBtn(target) {
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);
    const totalPrice = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(totalPrice);
    const inDecimalTotalPrice = total.toFixed(2);
    document.getElementById("total-price").innerText = inDecimalTotalPrice;
}