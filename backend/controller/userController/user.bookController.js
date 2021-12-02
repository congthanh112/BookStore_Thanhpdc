const BookModel = require('../../model/bookModel')

exports.getAllActiveBook = (req, res) => {
    BookModel.getAllAvailableBook((err, books) => {
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

exports.findBookByName = (req, res) => {
    let url_str = window.location.href;
    let url = new URL(url_str);
    let search = url.searchParams.get('search');
    BookModel.findBookByName(search, (err, books) => {      
        if (err) res.send(err);
        res.status(200).send(books);
    })
};


