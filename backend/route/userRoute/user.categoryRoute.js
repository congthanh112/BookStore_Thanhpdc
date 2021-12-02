const express = require('express');
const router = express.Router();

const categoryController = require('../controller/user.categoryController')

router.get('/', categoryController.getAllCategory)

/**
 * @swagger
 
 *  /category:
 *  post:
 *      summary: Create a new category
 *      description: Create a new category
 *      requestBody:
 *          content: 
 *              application/json:
 *              schema: 
 *                  properties: 
 *                      name:  
 *                          type: string    
 *                          description: name of the category 
 *      responses:
 *          201: 
 *              description: successfully
 *          422: 
 *              description: category already exists
 */ 
router.post("/", categoryController.createCategory)

router.put("/:id", categoryController.updateCategory)

router.delete('/:id', categoryController.deleteCategory)

module.exports = router