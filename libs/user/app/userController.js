const { signUpUserUseCase } = require("../usecase");

const loginUserControllerFactory = ({
    loginUserUseCase
}) =>{
    return async function loginUserController({
        body:objLoginBodyData,
        ...source
    }) {
        try {
            return{
                body: await loginUserUseCase({
                    objLoginBodyData,
                    source
                })
            }
        } catch (error) {
            return new Error(error)
        }
        
    }

}

const signUpUserControllerFactory =({
    signUpUserUseCase
}) =>{
    return async function signUpUserController({
        body:objSignUpData,
        ...source
    }) {
        try {
            console.log('controller Called');
            return{
                body: await signUpUserUseCase({
                    source,
                    objSignUpData
                })
            }
        } catch (error) {
            console.log(error);
        }
        
    }
}

const getHomePageControllerFactory =({
    getHomePageUseCase
}) =>{
    return async function getHomePageController({
        ...source
    }) {
        try {
            return{
                body: await getHomePageUseCase({
                    source
                })
            }
        } catch (error) {
           return new Error(error) 
        }
        
    }
}

const getPostsControllerFactory = ({
    getPostsUseCase
}) =>{
    return async function getPostsController({
        ...source
    }) {
        try {
            return {
                body: await getPostsUseCase({
                    ...source
                })
            }
        } catch (error) {
           return {
               message:error.message
           } 
        }
        
    }

}

module.exports={
    loginUserControllerFactory,
    signUpUserControllerFactory,
    getHomePageControllerFactory,
    getPostsControllerFactory
}