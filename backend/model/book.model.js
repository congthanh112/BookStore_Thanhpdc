const dbConn = require('../config/database/db.config')

const Book = function (book)  {
    this.name = book.name;
    this.author = book.author;
    this.category = book.category;
    this.sub_category = book.sub_category;
    this.quantity = book.quantity;
    this.price = book.price;
    this.create_at = new Date();
    this.updated_at = new Date();
}

Book.getAllBook = (result) => {
    dbConn.query('SELECT * FROM book', (err, res) => {
        if(err) {
            console.log('Error while fetching data', err)
        } else {
            result(null, res)
        }
    })
}

Book.getBookById = (id, result) => {
    dbConn.query('SELECT * FROM book WHERE id = ?', id, (err, res) => {
        if(err) {
            console.log('Error while fetching data', err);
            result(null, err);
        } else {
            result(null, res)
        }
    })
}

Book.createNewBook = (bookReqData, result) => {
    dbConn.query('INSERT INTO book SET ?', bookReqData, (err, res) => {
        if(err) {
            console.log('Error while inserting data');
            result(null, err);
        } else {
            console.log('Insert book successfully');
            result(null, res)
        }
    })
}

Book.updateBook = (id, bookReqData, result) => {
    dbConn.query('INSERT INTO book SET ?', bookReqData, (err, res) => {
        if(err) {
            console.log('Error while inserting data');
            result(null, err);
        } else {
            console.log('Insert book successfully');
            result(null, res)
        }
    })
}

module.exports = Book