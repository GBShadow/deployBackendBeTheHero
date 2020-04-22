import request from 'supertest';
import app from '../../src/app';
import connection from '../../src/database/connection';

describe('Session', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();

    await connection('ongs').insert({
      id: '47a00591',
      name: 'GBS Resgate',
      email: 'resgate.gbs@gmail.com',
      whatsapp: '957896543',
      city: 'São Paulo',
      uf: 'SP',
    });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new session', async () => {
    const response = await request(app).post('/sessions').send({
      id: '47a00591',
    });

    expect(response.body).toHaveProperty('name');
    expect(response.body.name).toMatch('GBS Resgate');
  });
});
