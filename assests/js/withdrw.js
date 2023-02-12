document.getElementById('new-withdrw').addEventListener('click', function (){
    const withdrwField = document.getElementById('withdraw-field')
    const newWthdrwAmountString = withdrwField.value;
    const newWthdrwAmount = parseFloat(newWthdrwAmountString)
    
    const withdrawElement = document.getElementById('withdrw-amount')
    const priviosWithdrwAmountString = withdrawElement.innerText;
    const priviosWithdrwAmount = parseFloat(priviosWithdrwAmountString)

    const currentWithdrwBalance = newWthdrwAmount + priviosWithdrwAmount ;
    withdrawElement.innerText = currentWithdrwBalance;
    

    const totalDeposit = document.getElementById('total-amount')
    const totalDepositAmountString=totalDeposit.innerText;
    const totalDepositAmount = parseFloat(totalDepositAmountString)

    const currentTotalAmount = totalDepositAmount - newWthdrwAmount;
    totalDeposit.innerText = currentTotalAmount;

    withdrwField.value = '';
    if(currentWithdrwBalance > currentTotalAmount ){
        alert('tumar baper banke oto taka nai');
        return;
    }
    
    
})