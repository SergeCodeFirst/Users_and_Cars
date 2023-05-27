const UserController = require('../controllers/user.controller.js')


module.exports = app => {
    app.get("/api", UserController.testApi );
    app.post("/api/user/add", UserController.AddUser );
    app.get("/api/user/findall", UserController.findAll );
    app.get("/api/user/find/:_id", UserController.findOne );
}