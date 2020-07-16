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

    if (depositAmount < 0) {
        alert("Amount cannot be negative.");
        document.getElementById("depositValue").value = "";
    } else {
        if (confirm("Are you sure you want to deposit?") == true) {
            updateValue("currentDeposit", depositAmount);
            document.getElementById("depositValue").value = "";
            updateValue("currentBalance", depositAmount);
        } else {
            document.getElementById("depositValue").value = "";
        }
    }
})

//withdraw button handler
const withdrawBtn = document.getElementById("withdraw");
withdrawBtn.addEventListener("click", function () {
    const withdrawAmount = getValueFromDWInput("withdrawValue");

    if (withdrawAmount < 0) {
        alert("Amount cannot be negative.");
        document.getElementById("withdrawValue").value = "";
    } else {
        if (confirm("Are you sure you want to withdraw?") == true) {
            updateValue("currentWithdraw", withdrawAmount);
            document.getElementById("withdrawValue").value = "";
            updateValue("currentBalance", -1 * withdrawAmount);
        } else {
            document.getElementById("withdrawValue").value = "";
        }
    }
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