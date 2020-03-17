var path = require("path");


module.exports = function (app){

//GET ROUTE
app.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});








//HOME ROUTE
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"))
});
}
