// function getInputValue() {
//     const DepositInput = document.getElementById('Deposit-input');
//     const depositAmountText = DepositInput.value;
//     const prevesDepositAmount = parseFloat(depositAmountText);

//     return prevesDepositAmount;
// }




document.getElementById('Deposit-button').addEventListener('click', function () {
    const DepositInput = document.getElementById('Deposit-input');
    const depositAmountText = DepositInput.value;
    const prevesDepositAmount = parseFloat(depositAmountText);



    const depositTotal = document.getElementById('Deposit-total');
    const depositTotalText = depositTotal.innerText;
    const prevesisDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = prevesisDepositTotal + prevesDepositAmount;


    DepositInput.value = '';

    //update blance

    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previesBlanceTotal = parseFloat(blanceTotalText);
    blanceTotal.innerText = previesBlanceTotal + prevesDepositAmount;



})

//Withdrow  

document.getElementById('Withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('Withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const previesWithdrawAmount = parseFloat(withdrawAmountText);

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previesWithdrawTotal = parseFloat(withdrawTotalText);

    withdrawTotal.innerText = previesWithdrawAmount + previesWithdrawTotal;
    withdrawInput.value = '';

    //update blance after withdraw
    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previesBlanceTotal = parseFloat(blanceTotalText);
    blanceTotal.innerText = previesBlanceTotal - previesWithdrawAmount;




})