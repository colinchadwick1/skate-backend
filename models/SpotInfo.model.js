const mongoose = require("mongoose");
const [Schema, model] = mongoose;

const spotSchema = new Schema({
  spotID : mongoose.ObjectId,
  spotName : String,
  description : String,
  rating : {type: Number , min: 1 , max: 5},
  location : {
    address : {type : String},
    coordinates : {
      lat: {type : Number},
      lng: {type : Number}
    }
  }
});

module.exports = model("Spot", spotSchema);