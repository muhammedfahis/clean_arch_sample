const { jwtSignInFunction } = require("../../jwtConnection/jwtConnection");
const { connectRedis } = require("../../redis/redisConnection");
const { addUserDB, checkUserDB } = require("../db/dbFunctions");
const {setRedisData} =require('../../redis/redisConnection');

const loginUserUseCaseFactory = ({ checkUserDB }) => {
  return async function loginUserUseCase({ objLoginBodyData, ...source }) {
    try {
      console.log("use case called");
      console.log(objLoginBodyData);
      let strUserName = objLoginBodyData["username"];
      let strPassword = objLoginBodyData["password"];

      const user = await checkUserDB(strUserName, strPassword);

      if (user) {
        const token = await jwtSignInFunction(user);
        // const redisData = await setRedisData(user,token);

        return {
          user,
          token,
          message: "USER FETCHED SUCCESSFULLY",
        };
      }
    } catch (error) {
      return {
          message:error.message
      };
    }
  };
};

module.exports = {
  loginUserUseCaseFactory,
};
