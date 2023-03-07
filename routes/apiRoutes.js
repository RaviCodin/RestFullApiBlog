const express = require("express");
const { createBlog, updateBlog, getAllBlog, deleteBlog } = require("../controlers/apiControler");
const {isAuthenticated, authRole} = require("../middleWare/auth");

const router = express.Router();

router.route("/get").get(isAuthenticated, getAllBlog)
router.route("/create").post(isAuthenticated, createBlog)
router.route("/update/:id").put( isAuthenticated, updateBlog)
router.route("/delete/:id").delete(isAuthenticated, deleteBlog)


module.exports = router;
