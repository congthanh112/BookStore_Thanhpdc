const BookModel = require('../model/book.model')
const { uuid } = require('uuidv4');
const { response } = require('express');

exports.getAllBook = (req, res, next) => {
    BookModel.getAllBook((err, books) => {
        if (err) res.send(err);
        res.send(books);
    })
};

exports.getBookById = (req, res, next) => {
    BookModel.getBookById(req.params.id, (err, book) => {
        if (err) res.send(err);
        res.send(book);
    })
};

exports.createBook = (req, res, next) => {
    const bookReqData = new BookModel(req.body);

    if (req.body.contrustor === object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all field' })
    } else {
        BookModel.createNewBook(bookReqData, (err, book) => {
            if (err) res.send(err);
            res.json({ status: true, message: 'Book created successfully', data: book })
        })
    }
};

exports.updateBook = (req, res, next) => {
    const bookReqData = new BookModel(req.body);

    if (req.body.contrustor === object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all field' })
    } else {
        BookModel.updateBook(req.params.id, bookReqData, (err, book) => {
            if (err) res.send(err);
            res.json({ status: true, message: 'Book updated successfully', data: book })
        })
    }
};

exports.deleteBook = (req, res, next) => {

};

exports.findBookByName = (req, res, next) => {

};


