import request from 'supertest';
import { app } from './app';
import axios from 'axios';

// Mock axios to prevent actual HTTP requests
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('GET /api/balance-sheet', () => {
  it('should return 200 with balance sheet data', async () => {
    // Mock axios to resolve with data
    mockedAxios.get.mockResolvedValue({
      data: {
        Reports: ['Balance Sheet Report Data'],
      },
    });

    const res = await request(app).get('/api/balance-sheet');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('Reports');
    expect(res.body.Reports).toEqual(['Balance Sheet Report Data']);
  });

  it('should return 500 on error', async () => {
    // Mock axios to throw an error
    mockedAxios.get.mockRejectedValue(new Error('Failed to fetch'));

    const res = await request(app).get('/api/balance-sheet');

    expect(res.statusCode).toBe(500);
    expect(res.body).toHaveProperty('error', 'Failed to fetch balance sheet data');
  });
});
