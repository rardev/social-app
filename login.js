let userName;
let password;

async function collectData()
{
    userName = document.getElementById("userName").value;
    password = document.getElementById("password").value;
    
    const loginData = {userName, password};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    };
    const response = await fetch('/api'/*'../server/api'*/, options);
    const d = await response.json();
    console.log(d);
    console.log(loginData);
    
}


function validateEmail(email)
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function confirmPassord()
{   
    if(password.length > 0)
        return password == cPassword;
    return false;
}