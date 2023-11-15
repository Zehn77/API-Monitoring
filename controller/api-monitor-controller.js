const Api = require('./../model/Api')

const getAllApis = async (req, res) => {
    const apis = await Api.find()
    res.status(200).json(apis)
}

const getSingleApi = async (req, res) => {
    const id = req.params.id

    const api = await Api.find({ _id: id })

    res.send(api)
}

const getApisByMethod = async (req, res) => {
    const method = req.params.method.toUpperCase()
    const apis = await Api.find( { method: method } )
    res.send(apis)
}

const filterByTime = async (req, res) => {
    const time = req.body.time
    const filteredDocuments = await Api.find({ responseTime: { $gt: time } })
    res.status(200).json(filteredDocuments)
}

module.exports = {
    getAllApis,
    getSingleApi,
    getApisByMethod,
    filterByTime,
}