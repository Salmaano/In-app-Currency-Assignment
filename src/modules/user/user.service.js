const {User, userSchema} = require('../../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const errors = require('../../errors/common.errors');

const salt = 10;

/**
 * creates a user document and saves it in the database
 * @property firstName - user's first name
 * @property lastName - users's last name
 * @property password - account password
 * @property phoneNumber - the user's phone number
 * @returns response - a JSON object of the new user's document
 */
const createUser = async (req) => {
    const{
        firstName,
        lastName,
        phoneNumber,
        password
    } = req.body;

    const checkUser = await User.findOne({
       phoneNumber
    })    

    console.log(checkUser);

    if (checkUser){
        throw new errors.UserExists('The phone number provided has already been registered with another account');
    };

    encryptedPassword = await bcrypt.hash(password, salt);

    const createdUser = new User({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        password: encryptedPassword
    }); 

    await createdUser.save();

    return createdUser;

}

const loginUser = async (req) => {
    const {
        phoneNumber,
        password
    } = req.body;

    //add error check for input

    let returnedUser = await User.findOne({
        phoneNumber
     }); 


    if (!returnedUser){
        throw new errors.InvalidCredentials('Either the phone number or password provided is incorrect');
    }

    const passwordCheck = await bcrypt.compare(password, returnedUser.password);

    if (passwordCheck === false){
        throw new errors.InvalidCredentials('Either the phone number or password provided is incorrect');
    }

    const token = jwt.sign(
        {userID: returnedUser._id, phoneNumber},
        process.env.TOKEN_KEY,
        {
            expiresIn: "2h",
        }
    );

    return {accessToken: token};
}

const buyPoints = async (req) => {
    const {
        phoneNumber
    } = req.user;
    const {
        maqsadPoints,
        paymentMethod
    } = req.body

    if (maqsadPoints <= 0){
        throw new errors.InvalidAmount('Maqsad points cannot be less than or equal to zero');
    }

    
    if (!paymentMethod){
        throw new errors.PaymentRequired('Payment details have not been provided');
    }
    let res = null;
    const returnedUser = await User.findOne({
        phoneNumber
     });
    const userAmount = returnedUser.wallet;
    const finalAmount = userAmount + maqsadPoints;
    res = await User.updateOne({ phoneNumber: phoneNumber }, {wallet: finalAmount});

    return {message: `${maqsadPoints} points have been added to your wallet`};
}

module.exports = {
    createUser,
    loginUser,
    buyPoints
};