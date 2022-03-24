
const mongoose = require("mongoose");

// STUDENTSCHEMA
// Step 1 :- creating the schema

const studentSchema = new mongoose.Schema(
    {
        //, 
        roll: { type: String, required: true },
        batch: { type: String, required: false },
    },
    {
      versionKey: false,
      timestamps: true, // createdAt, updatedAt
   }
  );
  const Student = mongoose.model("student", studentSchema); // user => users
  module.exports = Student; 