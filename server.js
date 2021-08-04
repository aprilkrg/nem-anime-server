const express = require("express");
const app = express();


const PORT = 4000;

app.get("/*", function(req, res, next) {
    res.send("this is the catch all page");
    console.log("\n===== request =====")
    console.log(req.method,'@', req.url,)
});

app.listen(PORT, function(){
    console.log(`running on port ${PORT}`);
});