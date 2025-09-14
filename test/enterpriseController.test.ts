import app from '../src/app.js';
import request from 'supertest';

describe('Enterprise endpoints', () => {
  it('GET /api/v1/enterprises should return a list of enterprises', async () => {
    const res = await request(app).get('/api/v1/enterprises');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('data');
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it('GET /api/v1/enterprises/:id should return a single enterprise if found', async () => {
    const res = await request(app).get('/api/v1/enterprises/1');
    expect([200, 404]).toContain(res.status);
    if (res.status === 200) {
      expect(res.body).toHaveProperty('id', 1);
    } else {
      expect(res.body).toHaveProperty('error', 'Enterprise not found');
    }
  });

  it('GET /api/v1/enterprises/:id should return 404 for non-existent id', async () => {
    const res = await request(app).get('/api/v1/enterprises/999999');
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('error', 'Enterprise not found');
  });
});