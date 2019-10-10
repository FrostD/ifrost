"use strict";

const axios = require('axios');

class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  async didLoad() {
    // 所有的配置已经加载完毕
    console.log('in didLoad!');
  }

  async willReady() {
    // 所有的插件都已启动完毕，但是应用整体还未 ready
    // 可以做一些数据初始化等操作，这些操作成功才会启动应用
    console.log('in willReady!');
    axios.defaults.baseURL = this.app.config.apiServer;
    axios.defaults.timeout = 6000;

  }

  async didReady() {
    // 应用已经启动完毕
    console.log('in didReady!');
  }
}

module.exports = AppBootHook;


