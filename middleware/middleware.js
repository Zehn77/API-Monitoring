const Api = require('./../model/Api')

const monitorRequest = async (req, res, next) => {
    const start = process.hrtime();
    const userAgent = req.headers['user-agent'];

    const logData = {
        method: req.method,
        url:req.protocol + '://' + req.get('host') + req.originalUrl,
        timestamp: (new Date()).toLocaleString(),
        device: (/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Opera Mini|Mobile Safari/i.test(userAgent)) ? 'Mobile' : "Desktop",
        connection: req.headers['connection'],
        body: req.body
    };

    res.on('finish', () => {
      const end = process.hrtime(start);
      const elapsedMilliseconds = end[0] * 1000 + end[1] / 1e6;

      logData.statusCode = res.statusCode;
      
      logData.responseTime = parseFloat(elapsedMilliseconds.toFixed(2)) // ms
    
      saveDataToDB(logData)
    });

    next();
}

const saveDataToDB = async (logData) => {
    await Api.insertMany(logData)
}

module.exports = { 
    monitorRequest
}