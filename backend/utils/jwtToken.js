// Create token and saving the in cookies and send response

const sendToken = (user, statusCode, res) => {
  const token = user.getJwtToken();

  // Options for cookies
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: false, // set to true in production (HTTPS)
    sameSite: "lax" // or "none" if secure: true
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};
module.exports = sendToken;
