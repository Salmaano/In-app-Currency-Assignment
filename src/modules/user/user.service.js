const {User, userSchema} = require('../../models/user.model');

const errors = require('../../errors/common.errors');

/**
 * creates a user document and saves it in the database
 * @property firstName - user's first name
 * @property lastName - users's last name
 * @property password - account password
 * @property phoneNumber - the user's phone number
 * @returns response - a JSON object of the new user's document
 */
const createUser = async (req) => {

    console.log(req.body);
    const{
        firstName,
        lastName,
        phoneNumber,
        password
    } = req.body;

    const checkUser = await User.find({
        name: phoneNumber
    })    

    if (checkUser){
        throw new errors.UserExists('The phone number provided has already been registered with another account');
    };

    const createdUser = new User({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        password: password
    }); 

    await createdUser.save();

    return createdUser;

}

const buyPoints = async (req) => {
    const {
        points,
        paymentMethod: {
            
        }
    } = req.body;
}


module.exports = {
    createUser
};