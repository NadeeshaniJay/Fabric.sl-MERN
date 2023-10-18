const router = require("express").Router();
let user = require("../models/user");

router.route("/add").post((req,res)=> {
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const address = req.body.address;
    const contact_no = Number(req.body.contact_no);

    const newuser = new user({
        name,
        age,
        gender,
        address,
        contact_no
    })

    newuser.save().then(() => {
        res.json("User Added")
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/").get((req,res) => {
    user.find().then((users) => {
        res.json(users)
    }).catch((err) => {
        console.log(err)
    })
})

router.route("/update/:id").put(async(req,res) => {
    let userId = req.params.id;
    const {name, age, gender, address, contact_no} = req.body;

    const updateuser = {
        name,
        age,
        gender,
        address,
        contact_no
    }

    const update = await user.findByIdAndUpdate(userId, updateuser)
    .then(() => {
        res.status(200).send({status: "User Updated"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating data",error: err.message});
    });

});

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await user.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).send({status: "User Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req,res) => {
    let userId = req.params.id;
    const founduser = await user.findById(userId)
    .then((user) => {
        res.status(200).send({status: "User Fetched",user: user})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with get user", error: err.message});
    })
})

module.exports = router;
