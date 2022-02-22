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

function collectData()
{
    fName = document.getElementById("fname").value;
    lName = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    cPassword = document.getElementById("Cpassword").value;
    phone = document.getElementById("phone").value;
    console.log(fName);
    console.log(lName);
    console.log(validateEmail(email));
    console.log(confirmPassord());
    console.log(phone);
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