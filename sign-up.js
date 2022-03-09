var fName;
var lName;
var email;
var password;
var cPassword;
var phone;

function printName()
{
    fName = document.getElementById("fname").value;
    console.log(fName);
}

async function collectData()
{
    fName = document.getElementById("fname").value;
    lName = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    cPassword = document.getElementById("Cpassword").value;
    phone = document.getElementById("phone").value;
    /*
    console.log(fName);
    console.log(lName);
    console.log(validateEmail(email));
    console.log(confirmPassord());
    console.log(phone);
    */
    const data = {fName, lName, email, password, cPassword, phone};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    const response = await fetch('/api'/*'../server/api'*/, options);
    const d = await response.json();
    console.log(d);
    
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