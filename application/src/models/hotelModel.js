var database = require("../database/config")

function cadastrar(nome, nome_rede, rua, cidade, estado, numero, email, telefone, cep, fkEmpresa) {
    var instrucaoSql = `
        INSERT INTO hotel (nome, nome_rede, rua, cidade, estado, numero, email, telefone, cep, fk_empresa)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;
    return database.executar(instrucaoSql, [nome, nome_rede, rua, cidade, estado, numero, email, telefone, cep, fkEmpresa]);
}

function editar(id, nome, nome_rede, rua, cidade, estado, numero, email, telefone, cep, fkEmpresa) {
    var instrucaoSql = `
        UPDATE hotel SET
            nome = ?,
            nome_rede = ?,
            rua = ?,
            cidade = ?,
            estado = ?,
            numero = ?,
            email = ?,
            telefone = ?,
            cep = ?,
            fk_empresa = ?
        WHERE id_hotel = ?
    `;
    return database.executar(instrucaoSql, [nome, nome_rede, rua, cidade, estado, numero, email, telefone, cep, fkEmpresa, id]);
}

function excluir(id) {
    var instrucaoSql = `DELETE FROM hotel WHERE id_hotel = ?`;
    return database.executar(instrucaoSql, [id]);
}

function listar() {
    var instrucaoSql = `SELECT id_hotel, nome, nome_rede, rua, cidade, estado, numero, email, telefone, cep, fk_empresa FROM hotel`;
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    editar,
    excluir,
    listar
};
