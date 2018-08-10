let express = require("express");
let app = express();
let path = require("path");

//app.set('views', './pages');
//app.set('view engine', 'ejs');

app.get("/",function(req, res){
    res.sendFile(path.join(__dirname+'/pages/index.html'))
})

app.listen(3000, function(){
    console.log("Server is started on port 3000");
})

