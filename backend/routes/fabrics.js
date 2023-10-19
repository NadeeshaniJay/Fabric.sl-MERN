const router = require("express").Router();
let fabric = require("../models/fabric");

router.route("/add").post((req,res)=> {
    const name = req.body.name;
    const code = req.body.code;
    const qty = Number(req.body.qty);
    const category = req.body.category;
    const price = Number(req.body.price);
    const imageURL = req.body.imageURL;

    const newfabric = new fabric({
        name,
        code,
        qty,
        category,
        price,
        imageURL

    })

    newfabric.save().then(() => {
        res.json("Item Added")
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/").get((req,res) => {
    fabric.find().then((fabrics) => {
        res.json(fabrics)
    }).catch((err) => {
        console.log(err)
    })
})

router.route("/update/:id").put(async(req,res) => {
    let fabricId = req.params.id;
    const {name, code, qty, category, price} = req.body;

    const updatefabric = {
        name,
        code,
        qty,
        category,
        price,
    imageURL

    }

    const update = await fabric.findByIdAndUpdate(fabricId, updatefabric)
    .then(() => {
        res.status(200).send({status: "Item Updated"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating data",error: err.message});
    });

});

router.route("/delete/:id").delete(async (req,res) => {
    let fabricId = req.params.id;

    await fabric.findByIdAndDelete(fabricId)
        .then(() => {
            res.status(200).send({status: "Item Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete item", error: err.message});
    })
})

router.route("/get/:id").get(async (req,res) => {
    let fabricId = req.params.id;
    const foundfabric = await fabric.findById(fabricId)
    .then((fabric) => {
        res.status(200).send({status: "Item Fetched",fabric})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with get item", error: err.message});
    })
})

module.exports = router;
