const axios = require('axios');
const Service = require('egg').Service;
// const jwt = require('jsonwebtoken');

class UserService extends Service {

  /**
   * 登录
   * @param {string} username
   * @param {string} password
   * @returns {Promise.<void>}
   */
  async login(username, password) {
    try {
      let resp = await axios({
        url: `/open/api/oauth/token`,
        method: 'post',
        data: { username, password }
      });
      const user = resp.data.user;
      this.ctx.session['user_id'] = user.id;
      this.ctx.session['username'] = user.username;
      this.ctx.session['email'] = user.email;
      this.ctx.session['role'] = user.role;
      // this.ctx.session['access_token'] = jwt.sign(resp.data.user, this.app.config.keys, { expiresIn: '1day' });
      return resp.data;
    } catch (e) {
      this.logger.error(e);
    }
  }
}

module.exports = UserService;