const express = require('express');
const router = express.Router();

const {
    getAllBook,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
    findBookByName
} = require('../controller/book.controller')

router.get('/', getAllBook)

router.get('/:id', getBookById)

router.post("/", createBook)

router.put("/:id", updateBook)

router.delete('/:id', deleteBook)

router.get('/:search', findBookByName)

module.exports = router