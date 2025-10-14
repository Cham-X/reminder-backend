const request = require('supertest');
const app = require('../app'); // Adjust the path as necessary

describe('Reminder Endpoints', () => {
	test('GET /reminders should return all reminders', async () => {
		const response = await request(app).get('/reminders');
		expect(response.statusCode).toBe(200);
		expect(Array.isArray(response.body)).toBe(true);
	});

	test('POST /reminders should create a new reminder', async () => {
		const newReminder = { title: 'Test Reminder', date: '2023-10-01' };
		const response = await request(app).post('/reminders').send(newReminder);
		expect(response.statusCode).toBe(201);
		expect(response.body.title).toBe(newReminder.title);
	});

	test('GET /reminders/:id should return a specific reminder', async () => {
		const response = await request(app).get('/reminders/1'); // Adjust ID as necessary
		expect(response.statusCode).toBe(200);
		expect(response.body).toHaveProperty('title');
	});

	test('DELETE /reminders/:id should delete a reminder', async () => {
		const response = await request(app).delete('/reminders/1'); // Adjust ID as necessary
		expect(response.statusCode).toBe(204);
	});
});