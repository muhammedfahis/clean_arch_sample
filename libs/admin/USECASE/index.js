const {addPostUseCaseFactory} = require('./addPostUseCase');
const {addPostDB} = require('../DB/DBfunction')


const addPostUseCase = addPostUseCaseFactory({
    addPostDB
});



module.exports ={
    addPostUseCase
}