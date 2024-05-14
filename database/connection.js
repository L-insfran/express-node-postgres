import "dotenv/config";
import pg from 'pg';
const { Pool } = pg

export const pool = new Pool({
  allowExitOnIdle: true // para que cierre las conexiones automaticamente
})

try {
  await pool.query("SELECT NOW()")
  console.log('Database connected')
} catch (error) {
  console.log(error)
}