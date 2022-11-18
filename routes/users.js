const express = require("express");
const router = express.Router()

router.use(logger);

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.render("users/new")
});

router.post("/", (req, res) => {
    const isValue = false
if (isValue) {
    users.push({ firstName: req.body.firstName})
    res.redirect(`/users/${users.length -1}`)
} else {
console.log("error")
res.render('users/new', {firstName: req.body.firstName})

}

});


router
  .route("/:id")
  .get((req, res) => {
    // console.log(req.user)
    res.send(`Get User with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Put User with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User with ID ${req.params.id}`);
  })
  
const users = [{name: "Kyle"}, { name: "Sally"}] 
  
router.param("id", (req, res, next, id) => {
    // console.log(id)
    req.user = users[id]
    next()
})

// logger middleware
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router

