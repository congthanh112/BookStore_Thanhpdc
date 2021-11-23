const BookModel = require('../model/book.model')

exports.getAllBook = (req, res) => {
    console.log(new Date())
    BookModel.getAllBook((err, books) => {
        if (err) res.send(err);
        res.status(200).send(books);
    })
};

exports.getBookById = (req, res) => {
    BookModel.getBookById(req.params.id, (err, book) => {
        if (err) res.send(err);
        res.status(200).send(book);
    })
};

exports.createBook = (req, res) => {
    const bookReqData = new BookModel(req.body);

    if (req.body.contrustor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ success: false, message: 'Please fill all field' })
    } else {
        BookModel.createNewBook(bookReqData, (err, book) => {
            if (err) res.send(err);
            res.status(201).json({ status: true, message: 'Book created successfully', data: book })
        })
    }
};

exports.updateBook = (req, res) => {
    const bookReqData = new BookModel(req.body);
    if (req.body.contrustor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all field' })
    } else {
        BookModel.updateBook(req.params.id, bookReqData, (err, book) => {
            if (err) res.send(err);
            res.status(200).json({ status: true, message: 'Book updated successfully', data: book })
        })
    }
};

exports.deleteBook = (req, res) => {
    BookModel.deleteBook(req.params.id, (err, book) => {
        if (err) res.send(err);
        res.status(200).json({ success: true, message: 'Delete book successfully', data: book})
    })
};

exports.findBookByName = (req, res) => {
    let url_str = window.location.href;
    let url = new URL(url_str);
    let search = url.searchParams.get('search');
    console.log('CCCCCCCCCCCCC',search)
    BookModel.findBookByName(search, (err, books) => {      
        if (err) res.send(err);
        res.status(200).send(books);
    })
};


