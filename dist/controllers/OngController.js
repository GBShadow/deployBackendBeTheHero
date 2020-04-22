"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _generateUniqueId = require('../utils/generateUniqueId'); var _generateUniqueId2 = _interopRequireDefault(_generateUniqueId);
var _connection = require('../database/connection'); var _connection2 = _interopRequireDefault(_connection);

const OngController = {
  async index(req, res) {
    const ongs = await _connection2.default.call(void 0, 'ongs').select('*');

    return res.json(ongs);
  },

  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = _generateUniqueId2.default.call(void 0, );

    await _connection2.default.call(void 0, 'ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    res.json({ id });
  },
};

exports. default = OngController;
