const express = require("express");
const makeController = require("../../../libs/fileController/useController");
const { jwtVerifiyer } = require("../../../libs/middlewares/middlewares");
const {
  loginUserController,
  signUpUserController,
  getHomePageController,
  getPostsController,
} = require("../../../libs/user/app/index");

const router = express.Router();
// router.use('/user',require('../user/router'));
router.post("/login_user", makeController(loginUserController));
router.post("/signup", makeController(signUpUserController));
router.post("/home", jwtVerifiyer, makeController(getHomePageController));
router.post("/get_posts",jwtVerifiyer,makeController(getPostsController));

module.exports = router;
// sgasgasfgasgas
