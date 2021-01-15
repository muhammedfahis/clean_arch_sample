
function getHomePageUseCaseFactory(){
    return async function getHomePageUseCase({
        ...source
    }) {
        console.log('home page useCase');
        console.log(source,'....................');
        console.log(req.token,'??????????????????????');
        return;
    }
}


module.exports={
    getHomePageUseCaseFactory
}