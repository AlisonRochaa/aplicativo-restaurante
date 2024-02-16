const mysql = require('mysql2');

// Configurações de conexão para o pool de conexões
const pool = mysql.createPool({
    host: 'vps51634.publiccloud.com.br',
    port: 3306,
    user: 'appmarmitaria',
    password: 'marmitaboa',
    database: 'marmitaria',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Exportar o pool de conexões
module.exports = pool;