const pool = require('./db');

async function getAllBooks() {
    const [rows] = await pool.query('SELECT id, title, available FROM books');
    return rows;
}
module.exports = { getAllBooks };