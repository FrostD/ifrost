
module.exports = app => {
  app.get('/', app.controller.home.index);
  app.get('/blog', app.controller.home.index);
  app.get('/family', app.controller.family.index);
  app.get('/login', app.controller.user.login);
  app.post('/login', app.controller.user.loginPost);

};
