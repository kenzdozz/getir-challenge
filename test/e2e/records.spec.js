const request = require('supertest');
const app = require('../../src/app');
const Record = require('../../src/database/models/Record');
const RecordServices = require('../../src/database/services/RecordService');
const { mockRecords } = require('../mocks');

describe('Records Endpoint', () => {
  beforeAll(async () => {
    await Record.insertMany(mockRecords);
  });

  afterAll(async () => {
    await Record.deleteMany();
  });

  test('should get the records', async (done) => {
    const res = await request(app).post('/v1/records').send({
      minCount: 0,
      maxCount: 1000,
      startDate: '2015-12-22',
      endDate: '2021-01-10',
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body.code).toEqual(0);
    expect(res.body.msg).toEqual('Success');
    expect(Array.isArray(res.body.records)).toEqual(true);
    expect(res.body.records.length).toEqual(4);
    done();
  });

  test('should return validation errors', async (done) => {
    const res = await request(app).post('/v1/records').send({
      minCount: null,
      maxCount: '1000r',
      startDate: '2020-22-12',
      endDate: 2020,
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body.code).toEqual(400);
    expect(res.body.msg).toEqual('Invalid request payload, check the errors object for more.');
    expect(res.body.errors).toMatchObject({
      endDate: '"endDate" is required and must be a date with the format "YYYY-MM-DD"',
      maxCount: '"maxCount" is required and must be a number',
      minCount: '"minCount" is required and must be a number',
      startDate: '"startDate" is required and must be a date with the format "YYYY-MM-DD"',
    });
    done();
  });

  test('should return internal server error', async (done) => {
    jest.spyOn(RecordServices, 'aggregateCounts').mockRejectedValue(new Error());
    // eslint-disable-next-line no-console
    console.log = jest.fn();

    const res = await request(app).post('/v1/records').send({
      minCount: 0,
      maxCount: 1000,
      startDate: '2015-12-22',
      endDate: '2021-01-10',
    });

    expect(res.statusCode).toEqual(500);
    expect(res.body.code).toEqual(500);
    expect(res.body.msg).toEqual('Internal server error');
    done();
  });
});
