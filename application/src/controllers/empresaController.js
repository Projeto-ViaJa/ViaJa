var empresaModel = require("../models/empresaModel");

function getFk(req, res) {
    var token = req.params.token;

    if (!token) { return res.status(400).send("Token não informado"); }

    empresaModel.getFk(token)
        .then(function (resultado) {

            if (resultado.length > 0) {
                return res.status(200).json(resultado[0]);
            } else {
                return res.status(400).send("Token não encontrado!");
            }

        }).catch(function (erro) {

            console.error("Erro ao consultar empresa: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);

        });
}

module.exports = {
    getFk
}