const {loginUserUseCaseFactory} = require('../usecase/loginUseCase');
const {checkUserDB,addUserDB,getAllPostsDB} = require('../db/dbFunctions');
const { signUpUserUseCaseFactory } = require('./signUpUseCase');
const {getHomePageUseCaseFactory} = require('./homePageUseCase');
const {getPostsUseCaseFactory} =require('./getPostUseCase')



const loginUserUseCase =loginUserUseCaseFactory({
  checkUserDB
});

const signUpUserUseCase= signUpUserUseCaseFactory({
  addUserDB
});

const getHomePageUseCase =getHomePageUseCaseFactory();

const getPostsUseCase = getPostsUseCaseFactory({
  getAllPostsDB
})


module.exports ={
    loginUserUseCase,
    signUpUserUseCase,
    getHomePageUseCase,
    getPostsUseCase
}