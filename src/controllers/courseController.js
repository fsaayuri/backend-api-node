const { request } = require('express')
const mysql = require('mysql')
const courseModel = require('../models/courseModel')

const courseController = {}
// uma função dentro do atributo do objeto
// usa apenas pra armazenar e na outra página usa o "destruction" para serem chamadas como objetos


//==============================================================================

courseController.listAllCourses = (req, res) => {
  courseModel.listAllCourses((error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}

//==============================================================================

courseController.createCourse = (req, res) => {

  const course = req.body
  //TODO Verificar se os dados são válidos

  courseModel.createCourse(course, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Curso Cadastrado!" })
  })
}

//==============================================================================

courseController.deleteCourse = (req, res) => {

  const { id } = req.body
  courseModel.deleteCourse(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Curso deletado com Sucesso!" })
  })
}

module.exports = courseController
// sempre na hora de exportar é o objeto