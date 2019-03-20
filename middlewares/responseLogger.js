const _ = require('lodash')
const winston = require('winston')

const logger = winston.createLogger({
    level: 'error',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.Console({
            format: winston.format.json(),
            level: 'error',
        }),
        new winston.transports.Console({
            format: winston.format.json(),
            level: 'info',
        })
    ]
})

const responseLogger = (req, res, next) => {
    const [url] = req.originalUrl.split('?')

    const log = {
        ip: req.get('x-real-ip') || req.ip,
        url,
        method: req.method,
        status: res.statusCode,
        params: req.method === 'GET' ? req.query : req.body,
    }

    if (parseInt(res.statusCode, 10) >= 400) {
        _.assign(log, {
            error: res.locals.message,
        })
        logger.error(log)
    }

    if(process.env.NODE_ENV == 'production') {
        logger.info(log)
    }

    return next()
}

module.exports = responseLogger