import app from '../src/app';
import request from 'supertest';

describe('GET /api/v1/enterprises', () => {
  it('responds with a list of enterprises', async () => {
    const response = await request(app).get('/api/v1/enterprises');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });
});
