const mongoose = require('mongoose')

const apiSchema = new mongoose.Schema({
    heading:{
        type:String,
        required:[true, "Please Enter  topic"],
        maxlength:[50,"Name can not Exceed more the 50 charecter"],
        minlength:[4,"please more than 4 charecter"]
    },

    description:{
        type:String,
        required:[true, "Please Enter  description"],
        minlength:[50,"please more than 50 charecter"]
    },
    category:{
        type:String,
        required:[true, "Please Enter  category"],

    },
    count:{
      type:Number  
    },
    
   
   
    Date:{
        type:Date,
        default:Date.now
    }
})


module.exports = mongoose.model("api",apiSchema);
