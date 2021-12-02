const express = require('express');
const router = express.Router();

const subCategoryController = require('../controller/user.subCategoryController')

router.get('/', subCategoryController.getAllSubCategory)

router.get('/:id', subCategoryController.getByCategory)

router.post("/", subCategoryController.createSubCategory)

router.put("/:id", subCategoryController.updateSubCategory)

router.delete('/:id', subCategoryController.deleteSubCategory)

module.exports = router