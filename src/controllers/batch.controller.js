const express = require("express");
const Batch = require("../models/batch.model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const batch = await Batch.find()
      .populate({
        path: "studentId",
        select: { roll: 1, _id: 0 },

        populate:{
            path:"userId",
            select:{firstName:1,lastName:1,_id:0}
        }
      })
      
      .lean()
      .exec();
    return res.status(200).send({ batch: batch });
  } catch (error) {}
});
router.post("/", async (req, res) => {
  try {
    const batch = await Batch.create(req.body);
    return res.status(200).send({ batch: batch });
  } catch (error) {
    console.log(error);
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const batch = await Batch.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(batch);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const batch = await Batch.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send(batch);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;