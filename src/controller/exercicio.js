import serviceExercicio from "../services/exercicios.js"

class ControllerExercicio {

    Exercicio1Get(req, res) {
        const num1 = Number(req.query.num1)
        const num2 = Number(req.query.num2)
        const result = serviceExercicio.Somar(num1, num2)
        res.status(200).send({ num1, num2, result })
    }
    
    Exercicio1Post(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2
            const result = serviceExercicio.Somar(num1, num2)
            res.status(200).send({
                msg: "O resultado é "+result,
                data: result,
                error: null
            })
        } catch (error) {
            res.status(400).send({
                msg: error.message,
                data: null,
                error: true
            })   
        }
    }

    Exercicio2(req, res) {
        // const valorHora = req.params.valorHora
        // const qtdeHoras = req.params.qtdeHoras
        const { valorHora, qtdeHoras } = req.params
        
        const result = serviceExercicio.Salario(valorHora, qtdeHoras)

        res.status(200).send({
            result
        })
    }

}

export default new ControllerExercicio()