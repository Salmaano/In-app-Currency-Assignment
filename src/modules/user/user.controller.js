const {
    createUser
} = require('./user.service');



const makeUser = async (req, res, next) => {

    var environment = process.env.NODE_ENV

    console.log(environment);
    try{
        const returnedUser = await createUser(req);
        res.send(returnedUser);
    } catch(error){
        console.log(error);
        res.status(error.status);
        res.send({
            message: error.message
        });
    }
}

module.exports = {
    makeUser
}
 