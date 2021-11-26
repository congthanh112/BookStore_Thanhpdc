const express = require('express');
const router = express.Router();

const bookController = require('../controller/book.controller')


router.get('/', bookController.getAllBook)

router.get('/:id', bookController.getBookById)

router.post("/", bookController.createBook)

router.put("/:id", bookController.updateBook)

router.delete('/:id', bookController.deleteBook)

router.get('/:search', bookController.findBookByName)

module.exports = router