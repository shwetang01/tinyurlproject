const express = require('express');
const {handleGenerateNewShortURL,handleGetAnalytics}=require('../controller/url');

// const app = express();
const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get("/analytics/:shortId",handleGetAnalytics);


module.exports = router;