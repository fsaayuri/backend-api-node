import express from 'express'
import {
  listAllCourses,
  showCourse,
  createCourse,
  deleteCourse,
  updateCourse,
  deleteIdCourse
} from '../controllers/courseController.js'

const router = express.Router()

router.get('/', listAllCourses) // SELECT
router.get('/:id', showCourse) // SELECT
router.post('/', createCourse) // INSERT
router.delete('/', deleteCourse) // DELETE (passa o JSON dentro de body)
router.delete('/:id', deleteIdCourse) // DELETE (passa pelo código)
router.put('/', updateCourse) // UPDATE

export default router