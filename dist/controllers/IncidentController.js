"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _connection = require('../database/connection'); var _connection2 = _interopRequireDefault(_connection);

const IncidentController = {
  async index(req, res) {
    const { page = 1 } = req.query;

    const [count] = await _connection2.default.call(void 0, 'incidents').count();

    const incidents = await _connection2.default.call(void 0, 'incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf',
      ]);

    res.header('X-Total-Count', count['count(*)']);

    return res.json(incidents);
  },

  async create(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await _connection2.default.call(void 0, 'incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return res.json({ id });
  },

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incidents = await _connection2.default.call(void 0, 'incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (incidents.ong_id !== ong_id) {
      return res.status(401).json({ error: 'Operation not permited.' });
    }

    await _connection2.default.call(void 0, 'incidents').where('id', id).delete();

    return res.status(204).send();
  },
};

exports. default = IncidentController;
