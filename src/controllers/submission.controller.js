const express = require("express");
const Submission = require("../models/submission.model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const submission = await Submission.find().populate({path: "studentId",select: { firstName: 1, lastName: 1, _id: 0 },
      })
      .populate({path:"evaluationId",select: { evaluationdate: 1, _id: 0 },
      }).lean().exec();
    return res.status(200).send({ submission: submission });
  } catch (error) {}
});

router.post("/", async (req, res) => {
  try {
    const submission = await Submission.create(req.body);
    return res.status(200).send({ submission: submission });
  } catch (error) {
    console.log(error);
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const submission = await Submission.findByIdAndUpdate( req.params.id,req.body,
      {
        new: true,
      }
    ).lean().exec();
    return res.status(200).send(submission);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const submission = await Submission.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(submission);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;