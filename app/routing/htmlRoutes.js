let path = require("path");

//Now for the Routing

module.exports = (app) => {

    //There are only two pages to return, 
    //Should be as simple as two app.get requests

    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
}

//This is a simple two page application