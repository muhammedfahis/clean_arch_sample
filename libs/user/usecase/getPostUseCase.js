const {getAllPostsDB} =require('../db/dbFunctions');

function getPostsUseCaseFactory({
    getAllPostsDB
}) {
    return async function getPostsUseCase({
        ...source
    }) {
        try {
            return await getAllPostsDB()
        } catch (error) {
            return{
                message:error.message
            }
        }
    }
    
}

module.exports={
    getPostsUseCaseFactory
}