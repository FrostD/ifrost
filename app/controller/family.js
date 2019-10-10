const Model = require('../mocks/article/list');

module.exports = app => {

  return class HomeController extends app.Controller {

    async index() {
      const { ctx, service } = this;
      const family = await service.family.getFamilyById(1);
      await ctx.renderClient('family/index.js', { family });
    }
  };
};