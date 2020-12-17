const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.latest();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: 'test',
                email: 'test@email.com',
                whatsapp: '47900000000',
                city: 'ibirama',
                uf: 'sc'
            });
        console.log(response.data);
    });
});

