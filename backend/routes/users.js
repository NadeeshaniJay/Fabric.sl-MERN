const router = require("express").Router();
const user = require("../models/user");

router.route("/createAcc").post((req,res)=> {
   const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    const newuser = new user({
        firstName,
        lastName,
        email,
        password
    })

    newuser.save().then(() => {
        res.json("User Added")
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/login").post(async (req, res) => {
    // Get the user email and password from the request body
    const { email, password } = req.body;
  
    try {
     
      const newuser = await user.findOne({ email });
      
      if (!newuser) {
        return res.status(400).json({ error: "User not found" });
      }
      res.status(200).json({ user: newuser});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  });

module.exports = router;