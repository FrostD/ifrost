const Model = require('../mocks/article/list');

module.exports = app => {

  return class HomeController extends app.Controller {

    async index() {
      const { ctx, service } = this;
      const username = ctx.session['username'];
      const email = ctx.session['user_email'];
      await ctx.renderClient('home/index.js', { username: username || email });
    }
  };
};