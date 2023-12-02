const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AimeSchema = new Schema(
  {
    Id: {
      type: String,
      require: true,
    },

    Policy_Name: {
      type: String,
      require: true,
    },

    Insurer: {
      type: String,
      require: true,
    },
    Premium_Account: {
      type: String,
      require: true,
    },

    Next_Due_Date: {
      type: String,
      require: true,
    },

    Maturity_Date: { type: String, require: true },

    Type: { type: String, require: true },

    Policy_Group: { type: String, require: true },
  },

  { timestamps: true }
);

module.exports = mongoose.model("aimetasks", AimeSchema);
