


 function signUpUserUseCaseFactory({
    addUserDB
 }) {
    return async function signUpUserUseCase({
        objSignUpData,
        ...source
    }) {
        try {
          const userName = objSignUpData['username'];
          const email = objSignUpData['email'];
          const password= objSignUpData['password'];
          const newUser ={
              userName,
              email,
              password
          }
       return await addUserDB(newUser)
        } catch (error) {
            console.log(error);
        }
        
    }
    
}

module.exports={
    signUpUserUseCaseFactory
}