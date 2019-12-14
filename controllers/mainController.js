const mongoose = require("mongoose");

exports.get_data = (req, res, next) => {
  try {
    mongoose.model("BEST").find({}).exec().then(result => {
      return res.status(200).json({
        result
      });
    })
  }catch(err) {
    console.log(err);
  }
}

exports.post_data = (req, res, next) => {
  try {
    mongoose.model("BEST").create(req.body.data).then(result => {
      return res.status(201).json({
        message: "Content Created",
        result
      })
    })
  }catch(err) {
    console.log(err);
  }
};