
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;
}

document.getElementById('Deposit-button').addEventListener('click', function () {

    const prevesDepositAmount = getInputValue('Deposit-input');



    const depositTotal = document.getElementById('Deposit-total');
    const depositTotalText = depositTotal.innerText;
    const prevesisDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = prevesisDepositTotal + prevesDepositAmount;


    //update blance

    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previesBlanceTotal = parseFloat(blanceTotalText);
    blanceTotal.innerText = previesBlanceTotal + prevesDepositAmount;



})

//Withdrow  

document.getElementById('Withdraw-button').addEventListener('click', function () {

    const withdrawAmount = getInputValue('Withdraw-input')

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previesWithdrawTotal = parseFloat(withdrawTotalText);

    withdrawTotal.innerText = withdrawAmount + previesWithdrawTotal;


    //update blance after withdraw
    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previesBlanceTotal = parseFloat(blanceTotalText);
    blanceTotal.innerText = previesBlanceTotal - withdrawAmount;




})