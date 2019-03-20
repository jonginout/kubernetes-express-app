let mysql = require('mysql')

const MYSQL_HOST = 'jongin-db-dev.cfnumbgq78gc.ap-northeast-2.rds.amazonaws.com'
const MYSQL_PORT = '3306'
const MYSQL_USER = 'root'
const MYSQL_PASSWORD = 'chvy9968'
const MYSQL_DATABASE = 'jongin'

const config = {
    host: MYSQL_HOST || 'localhost',
    port: MYSQL_PORT || '3306',
    user: MYSQL_USER || 'root',
    password: MYSQL_PASSWORD || 'YOUR_PASSWORD',
    database: MYSQL_DATABASE,
    multipleStatements: true
}

let connection = mysql.createConnection(config)

// methods
connection.connect(err => {
    if (err) return console.log('\nError connecting database ... \n' + err)
    console.log(`\nDatabase '${connection.config.database}' is connected ... \n`)
})

module.exports = connection