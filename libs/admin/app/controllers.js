function addPostControllerFactory({
    addPostUseCase
}) {
    return async function addPostController({
       body:objPostData,
        ...source
    }) {
        try {
            return {
                body: await addPostUseCase({
                    objPostData,
                    source
                })
            }
        } catch (error) {
            new Error(error.message)
        }
        
    }
    
}



module.exports ={
    addPostControllerFactory
}