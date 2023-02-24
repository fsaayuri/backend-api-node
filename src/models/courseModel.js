const mysql = require('mysql')
const courseModel = {}

// callback é uma funçãõ, entra como paramentro e dependendo do que acontece dentro de outra função ela executa dentro
courseModel.listAllCourses = (callback) => {
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "apinode2"
  })
  const sql = "SELECT * FROM cursos;"
  con.query(sql, (err, result) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
}

courseModel.createCourse = (req, res) => {
  res.json({ message: "Entrou na rota /course com POST!" })
}

module.exports = courseModel
