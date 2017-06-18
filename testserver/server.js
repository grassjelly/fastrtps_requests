var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 8000;
var bodyParser = require("body-parser");


server.listen(port, function() {
    console.log('Server listening at port %d', port);
});

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.post('/medstats', function(req, res) {
    /*
    http://localhost:8000/medstats
    {
    "msg" : "Hello from subscriber"
    }
    */
    var msg = req.body.msg;
    console.log("Received: %s", msg);
    res.end("Success");
});
