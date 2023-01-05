const express = require('express');
const router = express();
const getAllCycles   = require('../controllers/cycle.controller');
const addCycle = require('../controllers/addCycle.controller');
const searchCycle = require('../controllers/searchCycle.controller');
const updateCycles = require('../controllers/updateCycle.controller');
// const uploadBulkData = require('../controllers/bulkUpload.controller');


router.get('/cycle',
        getAllCycles);
        
router.get('/searchCycle',
                searchCycle); 

router.post('/addData',
                addCycle);

router.put('/updateCycle',
                updateCycles);

// router.post('/uploadFile', 
//                 uploadBulkData);               

                

module.exports = router;