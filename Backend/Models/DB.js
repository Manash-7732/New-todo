const mongoose = require('mongoose');



mongoose.connect("mongodb+srv://Manash_7732:zCVeBidWmpxjaS67@cluster0.ooomc.mongodb.net/").then(function(){
    console.log("mongoose server is connected")
}).cathch(function(error){
    console.log("server us not connected");
})

const createdSchema= new mongoose.schema({
    title:string,
    description:string,
    completed:boolean
})

const User = mongoose.model('User', createdSchema);  
module.exports = User;

