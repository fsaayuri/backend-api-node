import userModel from '../models/userModel.js'

export const listAllUsers = (req, res) => {
  userModel.listAllUsers((error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}

export const showUser = (req, res) => {
  const id = req.params.id

  userModel.showUser(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}

export const createUser = (req, res) => {
  const user = req.body
  userModel.createUser(user, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Usuário Cadastrado!" })
  })
}

export const deleteUser = (req, res) => {
  const { id } = req.body
  userModel.deleteUser(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Usuário Deletado com Sucesso!" })
  })
}

export const deleteIdUser = (req, res) => {
  const { id, slug } = req.params
  console.log(slug)
  userModel.deleteUser(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Usuário Deletado com Sucesso!" })
  })
}

export const updateUser = (req, res) => {
  const user = req.body

  const varteste = req.query
  console.log(varteste)

  userModel.updateUser(user, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Usuário Atualizado!" })
  })
}