function adminRoute(req, res, next) {
  console.log('adminRoute');
  console.log(req.user);

  if(req.user.email !== 'admin@vino.com') {
    req.user.isAdmin = false;
    return res.unauthorized();
  }

  req.user.isAdmin = true;

  return next();
}

module.exports = adminRoute;
