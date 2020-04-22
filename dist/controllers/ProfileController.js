"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _connection = require('../database/connection'); var _connection2 = _interopRequireDefault(_connection);

const ProfileController = {
  async index(req, res) {
    const ong_id = req.headers.authorization;

    const incidents = await _connection2.default.call(void 0, 'incidents')
      .where('ong_id', ong_id)
      .select('*');

    return res.json(incidents);
  },
};

exports. default = ProfileController;
