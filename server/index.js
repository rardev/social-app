const express = require('express');
const Datastore = require('nedb');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('../'));
app.use(express.json({limit: '1mb'}));

const database = new Datastore('database.db');
database.loadDatabase();

//get requst looking up data from database
app.get('/api', (request,response) => {
    database.find({},(err, data) => {
        response.json(data);
    })
})

//post request sending data to database
app.post('/api', (request, response) => {
    var emailvalid = true;
    var duplicate = false;
    var passvalid = true;
    const data = request.body;
    //var temp;
    console.log("Checking email validity");
    if(!validateEmail(data.email))
    {
        /*
        response.json({
            status: "Invalid Email"
        });
        */
        emailvalid = false;
    }

    console.log("Checking for duplicate email");
    database.find({email: data.email}, (err, d) => {
        if(err)
        {
            response.end();
            emailvalid = false;
            return;
        }
        console.log("Checking length of search result")
        console.log(d.length);
        if(d.length > 0)
        {
            /*
            response.json({
                status: "Email Already associated with an account"
            });*/
            duplicate = true;
        }

        console.log(emailvalid);
        console.log(passvalid);
        console.log(duplicate);
        if(emailvalid && passvalid && !duplicate)
        {
            database.insert(data);
            response.json({
                status: "Succesfully created account"
            });
        }
        else if(!emailvalid)
        {
            response.json({
                status: "Invalid Email"
            });
        }
        else if(duplicate)
        {
            response.json({
                status: "Email alread associated with an account"
            });
        }
        else
        {
            response.json({
                status: "Invalid Password"
            });
        }

    })

    //console.log("After email search");
    //console.log(data.body.cPass);
    console.log("Validating password");
    if(!confirmPassord(data.password,data.cPassword))
    {
        /*
        response.json({
            status: "Invalid Password"
        });
        */
        passvalid = false;
    }
});

function validateEmail(email)
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function confirmPassord(pass, cPass)
{   
    if(pass.length > 0)
        return pass == cPass;
    return false;
}