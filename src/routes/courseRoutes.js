import express from 'express'
// import com default (direto)
import {
  listAllCourses,
  createCourse,
  deleteCourse,
  updateCourse
} from '../controllers/courseController.js'
// import padrão precisa estar dentro de um objeto

const router = express.Router()

router.get('/', listAllCourses) // SELECT
router.post('/', createCourse) // INSERT
router.delete('/', deleteCourse) // DELETE
router.put('/', updateCourse) // UPDATE

export default router









