import mysql from 'mysql'
import { DB } from '../config.js'

const con = mysql.createConnection({
  host: DB.HOST,
  user: DB.USER,
  password: DB.PASS,
  database: DB.DBNAME
})

export default con