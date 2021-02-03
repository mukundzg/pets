var petsObj = {
    name: 'some',
    age: 2,
    color: 'blue',
    action: 'add'
}
var attrArray = ['name', 'age', 'color', 'action'];

function petsActionFunction(petsData) {
    var resp = validateInput(petsData);
    console.log(resp);
    if (resp) {
        //call insert

        switch (petsData.action) {
            case 'add':
                //call add function()
                console.log('calls add function');
                break;

            case 'get':
                //call get function()
                console.log('calls get function');
                break;

            case 'delete':
                //call delete function(arg)
                console.log('calls delete function with the passed argument');
                break;
        }
    }

    return resp;
}

function validateInput(petsData) {
    var retOutput = false;
    for (var i = 0; i < attrArray.length; i++) {
        if (petsData[attrArray[i]] == null || petsData[attrArray[i]] == '' || petsData[attrArray[i]] == undefined) {
            retOutput = false;
            break;
        }
        else {
            retOutput = true;
        }
    }
    if (retOutput) {

        if (!isNaN(petsData.age)) {
            retOutput = true

        }
        else {
            retOutput = false;

        }
    }

    if (retOutput) {
        if (petsData.action == 'delete') {
            //check for delete condition attribute and validate
        }
    }

    return retOutput;

}

const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/pets', (req, res) => {
    var petsData = req.body;

    var resp = petsActionFunction(petsData);

    if(resp){
        res.json({status:'S'});
    }
    else{
        res.json({status:'E'});
    }   

    

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


