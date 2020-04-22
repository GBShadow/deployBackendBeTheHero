"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _celebrate = require('celebrate');

var _OngController = require('./controllers/OngController'); var _OngController2 = _interopRequireDefault(_OngController);
var _IncidentController = require('./controllers/IncidentController'); var _IncidentController2 = _interopRequireDefault(_IncidentController);
var _ProfileController = require('./controllers/ProfileController'); var _ProfileController2 = _interopRequireDefault(_ProfileController);
var _SessionController = require('./controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);

const routes = new (0, _express.Router)();

routes.post(
  '/sessions',
  _celebrate.celebrate.call(void 0, {
    [_celebrate.Segments.BODY]: _celebrate.Joi.object().keys({
      id: _celebrate.Joi.string().required(),
    }),
  }),
  _SessionController2.default.create
);

routes.get('/ongs', _OngController2.default.index);

routes.post(
  '/ongs',
  _celebrate.celebrate.call(void 0, {
    [_celebrate.Segments.BODY]: _celebrate.Joi.object().keys({
      name: _celebrate.Joi.string().required(),
      email: _celebrate.Joi.string().email().required(),
      whatsapp: _celebrate.Joi.string().required().min(10).max(11),
      city: _celebrate.Joi.string().required(),
      uf: _celebrate.Joi.string().required().length(2),
    }),
  }),
  _OngController2.default.create
);

routes.get(
  '/profile',
  _celebrate.celebrate.call(void 0, {
    [_celebrate.Segments.HEADERS]: _celebrate.Joi.object({
      authorization: _celebrate.Joi.string().required(),
    }).unknown(),
  }),
  _ProfileController2.default.index
);

routes.get(
  '/incidents',
  _celebrate.celebrate.call(void 0, {
    [_celebrate.Segments.QUERY]: _celebrate.Joi.object().keys({
      page: _celebrate.Joi.number(),
    }),
  }),
  _IncidentController2.default.index
);

routes.post(
  '/incidents',
  _celebrate.celebrate.call(void 0, {
    [_celebrate.Segments.BODY]: _celebrate.Joi.object().keys({
      title: _celebrate.Joi.string().required(),
      description: _celebrate.Joi.string().required(),
      value: _celebrate.Joi.number().required(),
    }),
    [_celebrate.Segments.HEADERS]: _celebrate.Joi.object({
      authorization: _celebrate.Joi.string().required(),
    }).unknown(),
  }),
  _IncidentController2.default.create
);

routes.delete(
  '/incidents/:id',
  _celebrate.celebrate.call(void 0, {
    [_celebrate.Segments.PARAMS]: _celebrate.Joi.object().keys({
      id: _celebrate.Joi.number().required(),
    }),
  }),
  _IncidentController2.default.delete
);

exports. default = routes;
