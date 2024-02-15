const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'vps51634.publiccloud.com.br',
    port: 3306,
    user: 'appmarmitaria',
    password: 'marmitaboa',
    database: 'marmitaria',
    insecureAuth: true
});

connection.connect((err) => {
    if (err) {
        console.error('Erro na conexão: ' + err.stack);
        return;
    }
    console.log('Conexão bem-sucedida com o ID: ' + connection.threadId);
});

module.exports = connection;