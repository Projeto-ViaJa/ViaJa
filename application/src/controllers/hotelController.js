var hotelModel = require("../models/hotelModel");

function cadastrarHotel(req, res) {
    var nome = req.body.nomeServer;
    var nome_rede = req.body.nomeRedeServer;
    var rua = req.body.ruaServer;
    var cidade = req.body.cidadeServer;
    var estado = req.body.estadoServer;
    var numero = req.body.numeroServer;
    var email = req.body.emailServer;
    var telefone = req.body.telefoneServer;
    var cep = req.body.cepServer;
    var fkEmpresa = req.body.fkEmpresaServer;

    if (nome == undefined) {
        res.status(400).json({ erro: "Nome está undefined!" });
    } else if (rua == undefined) {
        res.status(400).json({ erro: "Rua está undefined!" });
    } else if (cidade == undefined) {
        res.status(400).json({ erro: "Cidade está undefined!" });
    } else if (estado == undefined) {
        res.status(400).json({ erro: "Estado está undefined!" });
    } else if (numero == undefined) {
        res.status(400).json({ erro: "Número está undefined!" });
    } else if (email == undefined) {
        res.status(400).json({ erro: "Email está undefined!" });
    } else if (telefone == undefined) {
        res.status(400).json({ erro: "Telefone está undefined!" });
    } else if (cep == undefined) {
        res.status(400).json({ erro: "CEP está undefined!" });
    } else if (fkEmpresa == undefined) {
        res.status(400).json({ erro: "Empresa está undefined!" });
    } else {
        hotelModel.cadastrar(nome, nome_rede, rua, cidade, estado, numero, email, telefone, cep, fkEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao cadastrar o hotel! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function editarHotel(req, res) {
    var id = req.body.idServer;
    var nome = req.body.nomeServer;
    var nome_rede = req.body.nomeRedeServer;
    var rua = req.body.ruaServer;
    var cidade = req.body.cidadeServer;
    var estado = req.body.estadoServer;
    var numero = req.body.numeroServer;
    var email = req.body.emailServer;
    var telefone = req.body.telefoneServer;
    var cep = req.body.cepServer;
    var fkEmpresa = req.body.fkEmpresaServer;

    if (id == undefined) {
        res.status(400).json({ erro: "ID está undefined!" });
    } else if (nome == undefined) {
        res.status(400).json({ erro: "Nome está undefined!" });
    } else if (rua == undefined) {
        res.status(400).json({ erro: "Rua está undefined!" });
    } else if (cidade == undefined) {
        res.status(400).json({ erro: "Cidade está undefined!" });
    } else if (estado == undefined) {
        res.status(400).json({ erro: "Estado está undefined!" });
    } else if (numero == undefined) {
        res.status(400).json({ erro: "Número está undefined!" });
    } else if (email == undefined) {
        res.status(400).json({ erro: "Email está undefined!" });
    } else if (telefone == undefined) {
        res.status(400).json({ erro: "Telefone está undefined!" });
    } else if (cep == undefined) {
        res.status(400).json({ erro: "CEP está undefined!" });
    } else if (fkEmpresa == undefined) {
        res.status(400).json({ erro: "Empresa está undefined!" });
    } else {
        hotelModel.editar(id, nome, nome_rede, rua, cidade, estado, numero, email, telefone, cep, fkEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao editar o hotel! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function excluirHotel(req, res) {
    var id = req.params.id;

    if (id == undefined) {
        res.status(400).json({ erro: "ID do hotel está undefined!" });
    } else {
        hotelModel.excluir(id)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao excluir o hotel! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listarHoteis(req, res) {
    hotelModel.listar()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao listar os hoteis! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    cadastrarHotel,
    editarHotel,
    excluirHotel,
    listarHoteis
};
