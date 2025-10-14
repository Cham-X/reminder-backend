import pg from 'pg'

console.log('Initializing database connection...')
console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Set' : 'NOT SET')

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
})

// Test the connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.log('Database connection ERROR:', err)
  } else {
    console.log('Database connected successfully at:', res.rows[0].now)
  }
})

export default pool
