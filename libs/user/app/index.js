const {
  loginUserControllerFactory,
  signUpUserControllerFactory,
  getHomePageControllerFactory,
  getPostsControllerFactory,
} = require("./userController");
const {
  loginUserUseCase,
  signUpUserUseCase,
  getHomePageUseCase,
  getPostsUseCase
} = require("../usecase");

const loginUserController = loginUserControllerFactory({
  loginUserUseCase,
});

const signUpUserController = signUpUserControllerFactory({
  signUpUserUseCase,
});

const getHomePageController = getHomePageControllerFactory({
  getHomePageUseCase,
});

const getPostsController = getPostsControllerFactory({
    getPostsUseCase
});

module.exports = {
  loginUserController,
  signUpUserController,
  getHomePageController,
  getPostsController,
};
