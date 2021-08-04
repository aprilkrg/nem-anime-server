const mongoose = require("mongoose");

const connectionStr = "mongodb://localhost:27017/anime";

mongoose.connect(connectionStr, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
    console.log("connected");
});
mongoose.connection.on("error", () => {
    console.log("error");
});
mongoose.connection.on("disconnected", () => {
    console.log("disconnected");
});