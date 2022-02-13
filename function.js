//////////////////////
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;
}
//////////////////////
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const prevesisTotal = parseFloat(totalText);

    totalElement.innerText = prevesisTotal + amount;

}
////////////////////////

function getCurrentBlance() {
    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previesBlanceTotal = parseFloat(blanceTotalText);
    return previesBlanceTotal;
}
////////////////////////
function updateBlance(amount, isAdd) {
    const blanceTotal = document.getElementById('blance-total');
    // const blanceTotalText = blanceTotal.innerText;
    // const previesBlanceTotal = parseFloat(blanceTotalText);

    previesBlanceTotal = getCurrentBlance();

    if (isAdd == true) {
        blanceTotal.innerText = previesBlanceTotal + amount;
    }
    else {
        blanceTotal.innerText = previesBlanceTotal - amount;
    }
}
/////////////////////////
document.getElementById('Deposit-button').addEventListener('click', function () {
    /// Deposit total
    const depositAmount = getInputValue('Deposit-input');
    if (depositAmount > 0) {
        updateTotalField('Deposit-total', depositAmount);
        //update blance
        updateBlance(depositAmount, true);
    }


})

/////////////////////// Withdrow  

document.getElementById('Withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('Withdraw-input')
    const carrentBlance = getCurrentBlance();
    if (withdrawAmount > 0 && withdrawAmount <= carrentBlance) {
        updateTotalField('withdraw-total', withdrawAmount)
        //update blance after withdraw
        updateBlance(withdrawAmount, false)

    }
    if (withdrawAmount > carrentBlance) {
        console.log("You don't have that mosh money")
    }

})