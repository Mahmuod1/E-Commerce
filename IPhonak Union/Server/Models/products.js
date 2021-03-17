const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
      unique: true
    },
    price:{
        type:Number,
        require:true
    },
    category: {
      type: String,
      required: true,
    },
    type:{
      type:Object,
      required:true
    },
    bundle:{
      type:Boolean
    },
    images:{
      type:Array
    },
    quantity: { 
      type: Array,
      required: true
    },
    rating: {
      type: Number,
    },
    description:{
      type: Array
    }
  }
);

module.exports = mongoose.model("Product", productSchema);
