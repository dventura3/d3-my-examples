var express = require('express'),
	bodyParser = require('body-parser');


/*--------------- Express Configuration -------------------*/

var app = express();

var SERVER_HOST = 'localhost';

var SERVER_PORT = 3300;

app.use(
    function crossOrigin(req,res,next){
        res.header('Access-Control-Allow-Origin','*');
        res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers','Content-Type, Authorization, Content-Length, X-Requested-With');

        if('OPTIONS' == req.method){
            res.send(200);
        }
        else
            next();
    }
);
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


/*--------------- Routes -------------------*/



//app.get("/v1/albums", manager.getAlbums);




app.listen(SERVER_PORT, SERVER_HOST);



