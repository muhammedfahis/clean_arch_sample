const {addPostDB} = require('../DB/DBfunction')
function addPostUseCaseFactory({
    addPostDB
}) {
    return async function addPostUseCase({
        objPostData,
        ...source
    }) {
        try {
            const newPost ={
                title:objPostData['title'],
                discription:objPostData['discription'],
                note:objPostData['note']
            }
            await addPostDB(newPost);
            return{
                 objPostData,
                 message:'POST ADDED SUCCESSFULLY'
            }
        } catch (error) {
            new Error(error.message)
        }
        
    }
    
}

module.exports={
    addPostUseCaseFactory
}