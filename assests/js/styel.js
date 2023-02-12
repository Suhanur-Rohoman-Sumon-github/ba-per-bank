document.getElementById('login-button').addEventListener('click', function(){
    const emailField = document.getElementById('email');
    const email = emailField.value;

    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    

    if(email === 'amarbank@takapoisa.com' && password === '44248124'){
        window.location.href ='bank.html';
    }
    else{
        alert('please write a valid mail or password')
    }

})

