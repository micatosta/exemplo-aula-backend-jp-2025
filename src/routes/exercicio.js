import express from 'express'
import controllerExercicio from '../controllers/exercicios.js'

const router = express.Router()

// localhost:3000/exercicio1?num1=30&num2=45
router.get('/exercicio1', controllerExercicio.Exercicio1Get)
router.post('/exercicio1', controllerExercicio.Exercicio1Post)
// localhost:3000/exercicio1/30/45
router.get('/exercicio2/:valorHora/:qtdeHoras',
    controllerExercicio.Exercicio2)

export default router