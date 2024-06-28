const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { generateUrl, redirectUrl } = require('../controllers/urlController');

router.post('/generate', protect, generateUrl);
router.get('/tiny/:hash', redirectUrl);

module.exports = router;