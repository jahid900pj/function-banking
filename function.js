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
function updateBlance(amount, isAdd) {
    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previesBlanceTotal = parseFloat(blanceTotalText);
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

    updateTotalField('Deposit-total', depositAmount);

    //update blance
    updateBlance(depositAmount, true);

})

/////////////////////// Withdrow  

document.getElementById('Withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('Withdraw-input')

    updateTotalField('withdraw-total', withdrawAmount)

    //update blance after withdraw
    updateBlance(withdrawAmount, false)

})