
const mongoose = require("mongoose");

// STUDENTSCHEMA
// Step 1 :- creating the schema

const submissionSchema = new mongoose.Schema(
    {
        marks:{type:Number,required:true},
        evaluationId: {type: mongoose.Schema.Types.ObjectId,ref: "evaluation",required: true,
        },
        studentId: {
          type: mongoose.Schema.Types.ObjectId,ref: "user",required: true,
        },
      },
    {
      versionKey: false,
      timestamps: true, // createdAt, updatedAt
   }
  );
  const Submission = mongoose.model("submission", submissionSchema); // user => users
  module.exports = Submission; 