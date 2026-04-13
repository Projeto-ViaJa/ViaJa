var database = require("../database/config")

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT id_usuario, nome, email_usuario, fk_empresa, is_admin as empresaId FROM usuario WHERE email_usuario = '${email}' AND senha = '${senha}';
    `;
    
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, fkEmpresa) {
    var instrucaoSql = `
        INSERT INTO usuario (nome, email_usuario, senha, fk_empresa, is_admin) VALUES ('${nome}', '${email}', '${senha}', '${fkEmpresa}', 1);
    `;
    
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};