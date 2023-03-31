import con from '../db/dbConnection.js'
import { z } from 'zod'
// valida os dados no backend antes de passar para o front, caso o dado venha inválido já dispara uma mensagem de aviso.(evita erros no banco de dado IMPORTANTE)

// regra de negócio 
const userSchema = z.object({
  id:
    z.number()
      .optional(),
  nome: z.string({ message: "Nome deve conter letras." })
    .min(3, { message: "Nome deve ser no mínimo 3 caracteres." })
    .max(100, { message: "Nome deve ter no máximo 100 caracteres." }),
  email:
    z.string({ message: "Email deve conter letras." })
      .email({ message: "Email Inválido." })
      .min(5, { message: "O email deve ter ao menos 5 caracteres." })
      .max(200, { message: "O email deve ter no máximo 100 caracteres." }),
  senha:
    z.string({ message: "Senha deve conter letras." })
      .min(6, { message: "Senha deve ter no mínimo 6 caracteres." })
      .max(256, { message: "Senha deve ter no máximo 256 caracteres." }),
  avatar:
    z.string({ message: "Avatar deve conter letras." })
      .url({ message: "Avatar deve ser uma URL válida." })


})

export const validateUser = (user) => {
  return userSchema.parse(user)
}

export const listAllUsers = (callback) => {
  const sql = "SELECT * FROM usuarios;"
  con.query(sql, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

export const showUser = (id, callback) => {
  const sql = "SELECT * FROM usuarios WHERE id = ?;"
  const value = [id]
  con.query(sql, value, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

export const createUser = (user, callback) => {
  const { nome, email, senha, avatar } = user

  const sql = 'INSERT INTO usuarios (nome, email, senha, avatar) VALUES (?, ?, ?, ?);'
  const values = [nome, email, senha, avatar]

  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

export const deleteUser = (id, callback) => {
  const sql = 'DELETE FROM usuarios WHERE id = ?;'
  const value = [id]
  con.query(sql, value, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

export const updateUser = (user, callback) => {
  const { id, nome, email, senha, avatar } = user
  const sql = 'UPDATE usuarios SET nome = ?, email = ?, senha = ?, avatar = ?  WHERE id = ? ;'
  const values = [nome, email, senha, avatar, id]

  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

export default { listAllUsers, showUser, createUser, deleteUser, updateUser, validateUser }