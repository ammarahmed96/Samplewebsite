let express = require("express");
let app = express();
let path = require("path");
let serveStatic = require("serve-static");

app.get("/",function(req, res){
    res.sendFile(path.join(__dirname+'/pages/test.html'))
});

app.get("/image1",function(req, res){
    res.sendFile(path.join(__dirname+'/pages/picbank/pic_320x240.jpg'))
});

// app.use(express.static('public'));

app.use(serveStatic(path.join(__dirname,'public')));

app.listen(3000, function(){
    console.log("Server is started on port 3000");
})

