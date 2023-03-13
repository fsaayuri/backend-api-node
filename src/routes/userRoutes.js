/*
import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: "Entrou na rota /user com GET!" })
})

router.post('/', (req, res) => {
  res.json({ message: "Entrou na rota /user com POST!" })
})

export default router
*/
import express from 'express'
import {
  listAllUsers,
  showUser,
  createUser,
  deleteUser,
  updateUser,
  deleteIdUser
} from '../controllers/userController.js'

const router = express.Router()

router.get('/', listAllUsers) // SELECT
router.get('/:id', showUser) // SELECT
router.post('/', createUser) // INSERT
router.delete('/', deleteUser) // DELETE
router.delete('/:id', deleteIdUser) // DELETE
router.put('/', updateUser) // UPDATE

export default router