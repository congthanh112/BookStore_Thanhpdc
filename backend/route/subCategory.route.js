const express = require('express');
const router = express.Router();

const subCategoryController = require('../controller/subCategory.controller')

router.get('/', subCategoryController.getAllSubCategory)

router.post("/", subCategoryController.createSubCategory)

router.put("/:id", subCategoryController.updateSubCategory)

router.delete('/:id', subCategoryController.deleteSubCategory)

module.exports = router