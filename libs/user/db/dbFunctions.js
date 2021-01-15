const db = require('../../connections/databaseConnection');
const COLLECTION = require('../../constants/constants')




const checkUserDB =async(username,password) =>{
   
    try {
        return await db.get().collection(COLLECTION['CLN_USER']).findOne({userName:username,password:password})
    } catch (error) {
        return new Error(error)
    }
}

const addUserDB = async(user) =>{
    try {
        const newUser =await db.get().collection(COLLECTION['CLN_USER']).insertOne(user)
        return  {
            message:'USER ADDED SUCCESSFULLY',
            newUser: user
        }
    } catch (error) {
        return new Error(error)
    }
}

const getAllPostsDB = async() =>{
    try {
        return await db.get().collection(COLLECTION['CLN_POST']).find().toArray()
    } catch (error) {
        return{
            message:error.message
        }
    }
}




module.exports ={
    addUserDB,
    checkUserDB,
    getAllPostsDB
}