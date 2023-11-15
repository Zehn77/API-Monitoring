const mongoose = require('mongoose');

const ApiSchema = new mongoose.Schema({
    method: String,
    url: String,
    timestamp: String,
    statusCode: Number,
    responseTime: Number,
    device: String,
    connection: String,
    body: Object
})

module.exports = mongoose.model('apis', ApiSchema)