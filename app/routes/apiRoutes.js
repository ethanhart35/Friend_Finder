var allfriends = require("../data/friends");

module.exports = function(app){
//GET ROUTE
app.get("/api/friends", function(req,res){
    res.json(allfriends);
});







//POST ROUTE
app.post("/api/friends", function(req,res){
    
});
}
