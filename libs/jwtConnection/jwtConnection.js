const jwt = require('jsonwebtoken');


async function jwtSignInFunction(payload) {   

    try {
        console.log('jwt called');
        const strToken = await jwt.sign(payload,'publickey',);
        return strToken;
    } catch (error) {
        new Error(error)
    }
}

const jwtVerifyFunction = async(strToken) =>{
    try {
        return await jwt.verify(strToken,'publickey')
    } catch (error) {
        new Error(error)
    }
}

const jwtDecodeFunction =async (token) =>{
    try {
        return jwt.decode(token,{complete:true})
    } catch (error) {
        new Error(error)
    }
}


module.exports={
    jwtSignInFunction,
    jwtVerifyFunction,
    jwtDecodeFunction
}