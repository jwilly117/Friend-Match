//require express
let express = require("express");

//set up express
let app = express();
let PORT = process.env.PORT || 9000;

//Standard use methods
app.use(express.urlencoded({extended: true }));
app.use(express.json());

//Require the routing files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Start Server
app.listen(PORT, () => {
    console.log("Listening on port: " + PORT);
})