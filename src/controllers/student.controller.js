const express = require("express");
const Student = require("../models/student_model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const student = await Student.find()
      .populate({ path: "userId" ,  select: { firstName: 1, lastName: 1,_id:0}})
      .lean()
      .exec();
    return res.status(200).send({ student: student });
  } catch (error) {}
});
router.post("/", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    return res.status(200).send({ student: student });
  } catch (error) {
    console.log(error);
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(student);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(student);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;