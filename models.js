const mongoose  =require("mongoose");
mongoose.set('strictQuery', false);

const stuSchema =  new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    classID:{
        type: Number,
        unique: true,
        required: true
    },

})

const clsSchema =  new mongoose.Schema({
    class:{stuSchema},
    stuCount:{
        type: Number,
        required: true
    },

})

const Student =  mongoose.model("Student", clsSchema );
module.exports=Student;