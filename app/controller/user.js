module.exports = app => {

  return class UserController extends app.Controller {

    /**
     * 登录页
     * @returns {Promise<void>}
     */
    async login() {
      const { ctx } = this;
      const csrf = ctx.csrf;
      // ctx.session.lastToken = csrf;
      await ctx.render('login/index.js', { layout: false, csrf });
    }

    /**
     * 登录接口
     * @returns {Promise<void>}
     */
    async loginPost() {
      const { ctx, service } = this;
      const csrf = ctx.csrf;
      const username = ctx.request.body.username;
      const password = ctx.request.body.password;
      if (username && password) {
        const rst = await service.user.login(username, password);
        if (rst && rst.status === 0) {
          const role = ctx.session.role;
          switch (role) {
            case 0:
              ctx.redirect('/blog');
              break;
            case 1:
              ctx.redirect('/family');
              break;
            default:
              ctx.redirect('/');
          }
        } else {
          await ctx.render('login/index.js', { layout: false, csrf, errMsg: '服务器端错误' });
        }
      } else {
        await ctx.render('login/index.js', { layout: false, csrf, errMsg: '用户名或密码不能为空' });
      }
    }

  };
};