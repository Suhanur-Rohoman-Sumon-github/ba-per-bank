document.getElementById('new-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field')
    const newDepositAmauntstring = depositField.value ;
    const newDepositAmaunt = parseFloat(newDepositAmauntstring)

    const depositElement = document.getElementById('deposit-amount');
    const prviousDepositString = depositElement.innerText ;
    const prviousDeposit = parseFloat(prviousDepositString)

    const currentDeposit = newDepositAmaunt + prviousDeposit ;
    depositElement.innerText = currentDeposit;

    const totalDeposit = document.getElementById('total-amount')
    const totalDepositAmountString=totalDeposit.innerText;
    const totalDepositAmount = parseFloat(totalDepositAmountString)

    const currentTotalAmount = totalDepositAmount + newDepositAmaunt;
    totalDeposit.innerText = currentTotalAmount;

    depositField.value = '';
})