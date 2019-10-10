const path = require('path');
const fs = require('fs');
module.exports = app => {
  const exports = {};

  exports.session = {
    renew: true
  };

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  };

  exports.view = {
    cache: false
  };

  exports.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html'),
    renderOptions: {
      // 告诉 vue-server-renderer 去 app/view 查找异步 chunk 文件
      basedir: path.join(app.baseDir, 'app/view')
    }
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  exports.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  };


  exports.apiServer = 'http://192.168.18.6:3000/';
  // exports.apiServer = 'http://192.168.43.88:3000/';
  // exports.apiServer = 'http://192.168.1.103:3000';

  exports.keys = 'wdkeyswzz';

  exports.middleware = [
    'access'
  ];

  return exports;
};
