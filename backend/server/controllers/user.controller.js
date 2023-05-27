const User = require("../models/user.model")


module.exports.testApi = (req, res) => {
    return res.json({results: [1,2,3,4,5], msg: "Welcome to express"})
}

module.exports.findAll = (req, res) => {
    User.find({})
        .then(result => res.json({results: result, msg:"Here are all the user"}))
        .catch(error => res.status(400).json({errors: error, mgs:"Opps! that didn't work"}))
}

module.exports.findOne = (req, res) => {
    User.find({_id: req.params._id})
        .then(result => res.json({results:result, msg: "Here is your user"}))
        .catch(error => res.status(400).json({errors:error, msg:"Opps! that didn't work"}))
}

module.exports.AddUser = (req, res) => {
    User.create(req.body)
        .then(result => res.json({results: result, msg:"New User added succesfuly!"}))
        .catch(error => res.status(400).json({errors: error, msg:"Opps! that didn't work"}))
}