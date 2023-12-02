const express = require("express");

const router = express.Router();

const aimeData = require("../models/AimeModel.js");

const allpolicies = require("./allpolicydata.json");

router.get("/api", async (req, res) => {
  try {
    const testdata = await aimeData.find();

    res.json(testdata);

    console.log(testdata);
  } catch (e) {
    res.json(e);
  }
});

router.post("/api", async (req, res) => {
  console.log("object");

  try {
    allpolicies?.forEach(async (item) => {
      const policyData = new aimeData({
        Id: item?.Id,
        Policy_Name: iten?.Policy_Name,
        Insurer: item?.Insurer,
        Premium_Account: item?.Premium_Account,
        Next_Due_Date: item?.Next_Due_Date,
        Maturity_Date: item?.Maturity_Date,
        Type: item?.Type,
        Policy_Group: item?.Policy_Group,
      });

      await policyData.save();
    });

    res.status(200).json("Response Success");
  } catch (e) {
    console.log(e);

    res.status(400).json("Error");
  }
});

module.exports = router;
