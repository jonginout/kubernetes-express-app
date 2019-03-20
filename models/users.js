const con = require('./connection')

const getAll = injection => {
    return new Promise((resolve, reject) => {
        const sql = `
    SELECT
      *
    FROM
      users
    `
        con.query(sql, injection, (err, result) => {
            if (err) return reject(err)
            resolve(result)
        })
    })
}

module.exports = {
    getAll
}
