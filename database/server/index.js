const mysql =  await require('mysql2/promise');

const pool = await mysql.createPool({
    host: 'localhost', 
    user: 'root',
    password: '',
    database: 'library_db',
    connectionLimit: 10
});

const [rows] = await pool.query(
    'SELECT id, title, available FROM books',
);
console.log(rows);

async function main() {
    try {
        console.log("connection test");
        const conn = await pool.getConnection();
        console.log("connected to mysql");
        conn.release();
        
        console.log("\n all books");
        console.log(await getAllBooks());

    } catch (error) {
        console.error("Error occurred:", error.message);
    }
    finally {
        await pool.end();
    }
}

main();