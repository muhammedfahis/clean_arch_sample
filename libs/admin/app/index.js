const {addPostControllerFactory} = require('./controllers');
const {addPostUseCase} =require('../USECASE/index')


const addPostController = addPostControllerFactory({
  addPostUseCase
});

module.exports ={
    addPostController
}