import mysql from 'mysql'
import dotenv from 'dotenv'
dotenv.config()

const db = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DB_NAME
})

db.connect((error) => {
  if (error) {
    console.error(`[error database connection]: ${error}`)
    return
  }

  console.log(`MySql connected as id: ${db.threadId}`)
})

export default db