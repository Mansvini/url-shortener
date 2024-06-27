const express = require('express');
const router = express.Router();
const { generateUrl, redirectUrl } = require('../controllers/urlController');

router.post('/generate', generateUrl);
router.get('/a/:hash', redirectUrl);

module.exports = router;