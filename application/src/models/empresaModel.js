var database = require("../database/config");

function getFk(token) {
    console.log("MODEL EMPRESA ACESSADO!");

    var instrucaoSql = `
        SELECT id_empresa
        FROM empresa
        WHERE token = ${token}
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    getFk
}