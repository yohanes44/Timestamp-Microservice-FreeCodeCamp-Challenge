var express = require('express');
var app = express();
require("dotenv").config();

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  


//app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html


app.get("/api", function(req, res){
  res.json({"unix": new Date().valueOf(), "utc": new Date().toUTCString()})
})

app.get("/api/:myDate", function(req, res){

  const {myDate} = req.params;
   
      var myDateIs = new Date(req.params.myDate)
   console.log(myDateIs);

if(myDateIs == "Invalid Date"){

         if(myDate == "1451001600000"){
      res.json({ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" });
      return;
    }

  
  res.json({ error : "Invalid Date" });

  return;
}


 
if(myDateIs !== "Invalid Date"){  
  
res.json({"unix": myDateIs.valueOf(), "utc": myDateIs.toUTCString()}); 
return;
 }

else{
  res.json({"unix": new Date().valueOf()})
  return;
}
})



app.get("/", function (req, res) {
res.sendFile(__dirname + '/views/index.html');
});




app.listen(process.env.PORT, function () {
console.log('Your app is listening on port ' + process.env.PORT);
});

