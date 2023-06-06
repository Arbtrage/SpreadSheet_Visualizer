const express=require('express');
const router=express.Router();
const processData=require('../contollers/processData');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
/**
 * @swagger
 * tags:
 *   name: Data
 *   description: API endpoints for data processing
 */

/**
 * @swagger
 * /upload:
 *   post:
 *     summary: Upload and process data file
 *     tags: [Data]
 *     parameters:
 *       - in: formData
 *         name: file
 *         type: file
 *         required: true
 *         description: The data file to upload
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: array
 *                   description: Processed data
 *       400:
 *         description: Error response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Error:
 *                   type: string
 */
router.post('/upload', upload.single('file'),processData.processedData);

module.exports=router;