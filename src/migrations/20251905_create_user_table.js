import db from '../config/db.js';

export async function up() { 
    try {
        await db.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
    } catch (error) {
        console.log('Error creating users table:', error);
    }
}

export async function down() {
    try {
        await db.query(`DROP TABLE IF EXISTS users;`);
    } catch (error) {
        console.log('Error dropping users table:', error);
    }           
}

up()