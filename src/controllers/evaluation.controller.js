const express = require("express");
const Evaluation = require("../models/evaluation.model");
const router = express.Router();
const Submission =require("../models/submission.model")

router.get("/", async (req, res) => {
  try {
    const evaluation = await Evaluation.find().populate({
        path: "instructorId",select: { firstName: 1, lastName:1,_id: 0 },

        
      }).
      populate( {
          path: "batchId",
          select: { batchname: 1, _id: 0 },
        })

      .lean()
      .exec();
    return res.status(200).send({ evaluation: evaluation });
  } catch (error) {}
});

//particular evaluation

router.get("/particular/:id",async(req,res)=>{
  const submission = await Submission.find({ evaluationId: req.params.id })
    .populate({
      path: "studentId",
      select: { firstName: 1, lastName: 1, _id: 0 },
    })
    .populate({
      path: "evaluationId",select: { evaluationdate: 1, _id: 0 },})
    .lean()
    .exec();

  res.status(200).send(submission)
})
router.get("/highestmark/:id",async(req,res)=>{
  try {
    const submission = await Submission.find({ evaluationId: req.params.id }).sort({marks:-1}).limit(1)

      .populate({
        path: "studentId",
        select: { firstName: 1, lastName: 1, _id: 0 },
      })
      .populate({
        path: "evaluationId",
        select: { dateOfEvaluation: 1, _id: 0 },
      })
      .lean()
      .exec();

    res.status(200).send(submission);

    
  } catch (error) {
    console.log(error)
    
  }
})

router.post("/", async (req, res) => {
  try {
    const evaluation = await Evaluation.create(req.body);
    return res.status(200).send({ Evaluation: evaluation });
  } catch (error) {
    console.log(error);
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const evaluation = await Evaluation.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(evaluation);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const evaluation = await Evaluation.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(evaluation);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;