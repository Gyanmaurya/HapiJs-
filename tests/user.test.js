const { sequelize, User } = require('../src/models');
const request = require('supertest');
const app = require('../src/server');

describe('User API', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    test('Register a user', async () => {
        const response = await request(app).post('/register').send({
            name: 'Test User',
            email: 'test@example.com',
            password: 'password123'
        });
        expect(response.statusCode).toBe(201);
    });
});
