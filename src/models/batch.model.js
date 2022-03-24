
const mongoose = require("mongoose");

// STUDENTSCHEMA
// Step 1 :- creating the schema

const batchSchema = new mongoose.Schema(
    {
        //, 
       batchname: { type: String, required: true },
       studentId:{type:mongoose.Schema.Types.ObjectId,ref:"student",required:true} ,
     
    },
    {
      versionKey: false,
      timestamps: true, // createdAt, updatedAt
   }
  );
  const Batch = mongoose.model("batch", batchSchema); // user => users
  module.exports = Batch; 