var express = require('express')
    , app = express()
    , path = require('path')
    , clientDir = path.join(__dirname, '../client')
;


app.use(express.static(clientDir));

app.get('/', function(req,res){
    res.sendfile(clientDir + '/index.html');
})

// Start server
var server = app.listen(7000, function () {
    console.log('Listening on port ' +server.address().port);
});