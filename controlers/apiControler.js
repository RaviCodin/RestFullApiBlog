const Blog = require("../models/apiModel");
const Errorhandler = require("../utils/errorhandler.js");
const catchAsyncError = require("../middleWare/catchAsyncError.js");

exports.createBlog = catchAsyncError(async (req, res, next) => {
  const { heading, description, category } = req.body;

  // console.log("create")


  const blog = await Blog.create({
    heading,
    category,
    description
  });

  res.status(201).json({
    success: true,
    message: "Blog created successfully",
    blog,
  });
});

exports.getAllBlog = catchAsyncError(async (req, res, next) => {
  // console.log("get blog")
  const blog = await Blog.find();

  if (!blog) {
    next(new Errorhandler("blog not Found", 403));
  }

  res.status(200).json({
    success: true,
    blog,
  });
});


exports.deleteBlog = catchAsyncError(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);
// console.log("delete",req.params.id)

  if (!blog) {
    next(new Errorhandler("blog not Found", 403));
  }

  await blog.remove();

  res.status(200).json({
    success: true,
    message:"Blog Deleted successfully"
  });
});

exports.updateBlog = catchAsyncError(async (req, res, next) => {
 
  let blog = await Blog.findById(req.params.id);

  if (!blog) {
    next(new Errorhandler("Blog not Found", 403));
  }
  
  blog = await Blog.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
    runValidators:true,
    useFindAndModify:false
})

  res.status(200).json({
    success: true,
    message: "update successfully",
  });
});
