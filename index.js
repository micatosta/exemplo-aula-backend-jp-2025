import express from "express"
import {
    exercicio1Get,
    exercicio1Post,
    exercicio2
} from "./controllers/exercicios.js"

const app = express()
app.use(express.json())

// localhost:3000/exercicio1?num1=30&num2=45
app.get('/exercicio1', exercicio1Get)
app.post('/exercicio1', exercicio1Post)
// localhost:3000/exercicio1/30/45
app.get('/exercicio2/:valorHora/:qtdeHoras', exercicio2)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})