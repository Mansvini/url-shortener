const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { generateUrl, redirectUrl } = require('../controllers/urlController');

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     URL:
 *       type: object
 *       required:
 *         - originalUrl
 *       properties:
 *         originalUrl:
 *           type: string
 *           description: The original URL
 *         usageLimit:
 *           type: integer
 *           description: The usage limit for the hashed URL
 *       example:
 *         originalUrl: http://example.com
 *         usageLimit: 3
 */

/**
 * @swagger
 * /generate:
 *   post:
 *     summary: Generate a hashed URL
 *     tags: [URL]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/URL'
 *     responses:
 *       201:
 *         description: Hashed URL generated successfully
 *       400:
 *         description: Some error happened
 */
router.post('/generate', protect, generateUrl);

router.get('/tiny/:hash', redirectUrl);

module.exports = router;