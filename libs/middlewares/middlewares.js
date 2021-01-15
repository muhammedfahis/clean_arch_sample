

const jwtVerifiyer =(req,res,next) =>{
    const bearerHeader = req.headers['authorization'];
    if(!bearerHeader) return next(res.sendStatus(403))
    const jwtToken = bearerHeader.split(' ');
    const strToken = jwtToken[1];
    req.strToken = strToken;
    console.log(strToken);
    next()
}


module.exports ={
    jwtVerifiyer
}