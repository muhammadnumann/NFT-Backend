 const express = require('express');
 const router = express.Router();
 const nftData = require('../controller/nftData')
 router.get('/getNfts',nftData)

 module.exports = router;