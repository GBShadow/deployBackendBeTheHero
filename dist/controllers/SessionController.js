"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _connection = require('../database/connection'); var _connection2 = _interopRequireDefault(_connection);

const SessionController = {
  async create(req, res) {
    const { id } = req.body;

    const ong = await _connection2.default.call(void 0, 'ongs').where('id', id).select('name').first();

    if (!ong) {
      return res.status(400).json({ error: 'No ONG found with this ID' });
    }

    return res.json(ong);
  },
};

exports. default = SessionController;
