const dbConn = require('../config/database/db.config')
const { v4: uuidv4 } = require('uuid');

const Book = function (book) {
    this.id = book.id;
    this.name = book.name;
    this.author = book.author;
    this.category = book.category;
    this.sub_category = book.sub_category;
    this.quantity = book.quantity;
    this.price = book.price;
    this.status = book.status;
    this.create_at = book.create_at;
    this.updated_at = book.updated_at;
}

const getCurrent = () => {
    const a = new Date();
     return (a.getFullYear() + '-' + (a.getMonth() + 1) + '-' + a.getDate() + ' ' + a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds())
}

Book.getAllBook = (result) => {
    dbConn.query('SELECT * FROM book', (err, res) => {
        if (err) {
            console.log('Error while fetching data', err);
        } else {
            result(null, res)
        }
    })
}

Book.getBookById = (id, result) => {
    dbConn.query('SELECT * FROM book WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log('Error while fetching data', err);
            result(null, err);
        } else {
            result(null, res)
        }
    })
}

Book.createNewBook = (bookReqData, result) => {
    dbConn.query('INSERT INTO book(id, name, author, category, sub_category, quantity, price, create_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?)', 
    [uuidv4(), bookReqData.name, bookReqData.author, bookReqData.category, bookReqData.sub_category, bookReqData.quantity, bookReqData.price, getCurrent(), null],
     (err, res) => {
        if (err) {
            console.log('Error while inserting data');
            result(null, err);
        } else {
            console.log('Insert book successfully');
            result(null, res)
        }
    })
}

Book.updateBook = (id, bookReqData, result) => {
    dbConn.query('UPDATE book SET name=?, author=?, category=?, sub_category=?, quantity=?, price=?, updated_at=? WHERE id=?',
        [bookReqData.name, bookReqData.author, bookReqData.category, bookReqData.sub_category, bookReqData.quantity, bookReqData.price, getCurrent(), id],
        (err, res) => {
            if (err) {
                console.log('Error while updating data');
                result(null, err);
            } else {
                console.log('Update book successfully');
                result(null, res)
            }
        })
}

Book.deleteBook = (id, result) => {
    dbConn.query('UPDATE book SET status=? WHERE id=?', ['Inactive', id], (err, res) => {
        if (err) {
            console.log('Error while deleting data');
            result(null, err);
        } else {
            console.log('Delete book successfully');
            result(null, res)
        }
    })
}

module.exports = Book