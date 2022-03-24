
const mongoose = require("mongoose");

// STUDENTSCHEMA
// Step 1 :- creating the schema

const evaluationSchema = new mongoose.Schema(
    {
        //, 
       evaluationdate: { type: String, required: true },
       instructorId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true} ,
       batchId:{type:mongoose.Schema.Types.ObjectId,ref:"batch",required:true}
    },
    {
      versionKey: false,
      timestamps: true, // createdAt, updatedAt
   }
  );
  const Evaluation = mongoose.model("evaluation", evaluationSchema); // user => users
  module.exports = Evaluation; 