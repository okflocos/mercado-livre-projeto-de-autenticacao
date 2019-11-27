const express = require("express")  
const router = express.Router() 
const controller = require("../controllers/sessionControllers")  

router.post("/", controller.getToken)   

module.exports = router 