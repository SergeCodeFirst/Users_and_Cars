const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/users_and_cars_DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("Connected Succesfully"))
    .catch((err)=> console.log("Problem!", err))