import mysql from 'mysql2/promise';

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'mydatabase',
});

db.connect()
    .then(() => console.log('Connected'))
    .catch(err => console.error('Failed:', err));

export default db;