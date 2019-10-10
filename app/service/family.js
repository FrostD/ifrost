
const axios = require('axios');
const Service = require('egg').Service;

class FamilyService extends Service {

  async getFamilyById(familyId=1) {
    try {
      let resp = await axios({
        url: `/api/family/${familyId}`,
        method: 'get'
      });
      return resp.data;
    } catch (e) {
      this.logger.error(e);
    }
  }
}

module.exports = FamilyService;