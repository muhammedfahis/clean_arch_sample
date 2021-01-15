const db = require('../../connections/databaseConnection');
const COLLECTION = require('../../constants/constants');



async function addPostDB(post) {
    try {
        return await db.get().collection(COLLECTION['CLN_POST']).insertOne(post)
    } catch (error) {
        return{
            message:error.message
        }
    }
    
}

module.exports ={
    addPostDB
}