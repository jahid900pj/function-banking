
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const prevesisTotal = parseFloat(totalText);

    totalElement.innerText = prevesisTotal + amount;

}

document.getElementById('Deposit-button').addEventListener('click', function () {

    const depositAmount = getInputValue('Deposit-input');

    updateTotalField('Deposit-total', depositAmount);

    //update blance

    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previesBlanceTotal = parseFloat(blanceTotalText);
    blanceTotal.innerText = previesBlanceTotal + depositAmount;

})

//Withdrow  

document.getElementById('Withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('Withdraw-input')

    updateTotalField('withdraw-total', withdrawAmount)


    //update blance after withdraw
    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previesBlanceTotal = parseFloat(blanceTotalText);
    blanceTotal.innerText = previesBlanceTotal - withdrawAmount;


})