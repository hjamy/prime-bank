//login button handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

//deposit button handler
const depositBtn = document.getElementById("deposit");
depositBtn.addEventListener("click", function () {
    const depositAmount = getValueFromDWInput("depositValue");
    updateValue("currentDeposit", depositAmount);
    document.getElementById("depositValue").value = "";
    updateValue("currentBalance", depositAmount);
})

//withdraw button handler
const withdrawBtn = document.getElementById("withdraw");
withdrawBtn.addEventListener("click", function () {
    const withdrawAmount = getValueFromDWInput("withdrawValue");
    updateValue("currentWithdraw", withdrawAmount);
    document.getElementById("withdrawValue").value = "";
    updateValue("currentBalance", -1 * withdrawAmount);
})


function getValueFromDWInput(id) {
    const value = document.getElementById(id).value;
    const amount = parseFloat(value);
    return amount;
}

function updateValue(id, amount) {
    const current = document.getElementById(id).innerHTML;
    const currentAmount = parseFloat(current);
    const totalBalance = amount + currentAmount;
    document.getElementById(id).innerHTML = totalBalance;
}