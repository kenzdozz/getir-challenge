const request = require('supertest');
const app = require('../../src/app');

describe('App Endpoints', () => {
  test('should return app running message', async (done) => {
    const res = await request(app).get('/');

    expect(res.statusCode).toEqual(200);
    expect(res.body.msg).toEqual('This app is running.');
    done();
  });

  test('should return not for non existent page', async (done) => {
    const res = await request(app).get('/hello');

    expect(res.statusCode).toEqual(404);
    expect(res.body.msg).toEqual('Endpoint not found.');
    done();
  });
});
