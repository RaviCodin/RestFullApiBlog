//create Token save in cookie
const sendToken =  (user, statusCode, res)=>{
    
    const token = user.getJwtToken();
    
    const option = {
        httpOnly:true,
        // day:process.env.COOKIE_EXPIRE,
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 *1000
            )
        }
        // res.cookie('token',token,option)
        // console.log("ok login",token)
    res.status(statusCode).cookie('token',token,option).json({ 
      success: true,
      user,
      token,
      option
    })

}

module.exports = sendToken;