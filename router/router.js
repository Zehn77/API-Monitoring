const { Router } = require('express')
const router = Router()
const controller = require('./../controller/controller')
const apiMonitorContoller = require('./../controller/api-monitor-controller')
const middleware = require('./../middleware/middleware')

// ALL APIS FOR PROGRAMM
router.get('/data', middleware.monitorRequest, controller.getAllData)
router.post('/student', middleware.monitorRequest, controller.saveData)


// APIS FOR MONITORING
router.get('/api/:id', apiMonitorContoller.getSingleApi)
router.get('/apis/:method', apiMonitorContoller.getApisByMethod)
router.get('/apis', apiMonitorContoller.getAllApis)
router.post('/apis/time', apiMonitorContoller.filterByTime)

module.exports = router