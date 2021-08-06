const express = require('express');
const bodyParser = require('body-parser');

let app = express();

let localhost = "127.0.0.1";
let port = 3000;

//creating middlewear for body-parser
app.use(bodyParser.urlencoded({extended: false}));

//creating middlewear for express for serving static files
app.use('/login', express.static(__dirname + '/public'));

app.get("/", (req,res) => {
    res.send("Hello!, This Is My Application");
});

app.post('/login', (req,res) => {
    console.log(req.body);
    //do some database process
    res.redirect("/");
});

app.listen(3000, () => {
    console.log(`Server is running at http://${localhost}:${port}`);
});