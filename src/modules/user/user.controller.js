const {
    createUser,
    loginUser,
    buyPoints
} = require('./user.service');



const makeUser = async (req, res, next) => {


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

const login = async(req,res, next) => {

    try{
        const returnedUser = await loginUser(req);
        res.send(returnedUser);
    } catch (error){
        console.log(error);
        res.status(error.status);
        res.send({
            message: error.message
        });
    }
}

const buy = async(req,res, next) => {

    try{
        const returned = await buyPoints(req);
        res.send(returned);
    } catch (error){
        console.log(error);
        res.status(error.status);
        res.send({
            message: error.message
        });
    }
}

module.exports = {
    makeUser,
    login,
    buy
}
 