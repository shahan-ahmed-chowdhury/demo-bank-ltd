////////////////////////User input function\\\\\\\\\\\\\\\\\\\\\\\\\
function userValue (userInput, counterText) {
    if (userInput.value > 0) {
        const userInfo = parseFloat(userInput.value);
        const counter = parseFloat(counterText.innerText);
        const sum = counter + userInfo;
        counterText.innerText = sum;
        userInput.value = '';
        return sum;  
    }
}
///////////////////////total balance function\\\\\\\\\\\\\\\\\\\\\\\\\
function totalBalance(sum, isDecreasing) {
    if (sum > 0 && isDecreasing == true) {
        const balanceCounter = document.getElementById('balance-counter');
        const balanceNumber = parseFloat(balanceCounter.innerText);
        if (sum < balanceNumber) {
            const newTotal = balanceNumber - sum;
            balanceCounter.innerText = newTotal;
        }
    }
    else if(sum > 0) {
        const balanceCounter = document.getElementById('balance-counter');
        const balanceNumber = parseFloat(balanceCounter.innerText);
        const newTotal = balanceNumber + sum;
        balanceCounter.innerText = newTotal;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositCounter = document.getElementById('deposit-counter');
    const depositTotal = userValue(depositField, depositCounter);
    totalBalance(depositTotal);
});

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawCounter = document.getElementById('withdraw-counter');
    const withdrawTotal = userValue(withdrawField, withdrawCounter);
    totalBalance (withdrawTotal, true)
});