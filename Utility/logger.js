const { createLogger, format, transports} = require('winston');

module.exports = createLogger({
  transports:
    new transports.File({
      filename: 'logs/combined.log',
      format: format.combine(
         format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss"}),
         format.align(),
         format.printf(info => `${info.level}: $ {[info.timestamp]}: S{info.message}`),
      )
    }),
});







// const winston = require('winston');

// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.json(),
//   defaultMeta: { service: 'user-service' },
//   transports: [
//     //
//     // - Write all logs with importance level of `error` or less to `error.log`
//     // - Write all logs with importance level of `info` or less to `combined.log`
//     //
//     new winston.transports.File({ filename: 'error.log', level: 'error' }),
//     new winston.transports.File({ filename: 'combined.log' }),
//   ],
// });
