const express = require("express");

const router = express.Router();



const linkController = require("../controllers/linkController")

router.get("/", linkController.allLinks)

router.get('/:title', linkController.redirect)

router.get("/add", (req, res) => (

res.render("index", {error:false, body: {}} )

));

router.post('/', express.urlencoded({extended: true}), linkController.addLink);

router.delete("/:id", linkController.deleteLink)

router.delete("/",express.json(), linkController.deleteLink)

module.exports = router;