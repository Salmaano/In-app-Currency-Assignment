const mongoose = require('mongoose');

// main().catch(err => console.log(err));


//check later if needed
// async function main() {

//     const mongoConnection = await mongoose.connect(parsedEnvVars.MONGO_HOST);

// }

const userSchema = new mongoose.Schema({
    firstName: {type : String, required:true},
    lastName: {type: String, required: true},
    wallet: {type: Number, required:false},
    phoneNumber: {type: String, required: true},
    password: {type: String, required:true},
    features: [{type:String, required:false}]
})

const User = mongoose.model('User', userSchema);


module.exports = {
    userSchema,
    User
};