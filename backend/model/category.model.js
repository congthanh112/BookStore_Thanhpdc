const dbConn = require('../config/database/db.config')
const { v4: uuidv4 } = require('uuid');

const Category = function (category) {
    this.id = category.id;
    this.name = category.name;
    this.status = category.status;
    this.create_at = category.create_at;
    this.updated_at = category.updated_at;
}

const getCurrent = () => {
    const a = new Date();
    return (a.getFullYear() + '-' + (a.getMonth() + 1) + '-' + a.getDate() + ' ' + a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds())
}

Category.getAllCategory = (result) => {
    dbConn.query('SELECT * FROM category', (err, res) => {
        if (err) {
            console.log('Error while fetching data', err);
        } else {
            result(null, res)
        }
    })
}

Category.createNewCategory = (categoryReqData, result) => {
    dbConn.query('INSERT INTO category(id, name, create_at, updated_at) VALUES (?,?,?,?)',
        [uuidv4(), categoryReqData.name, getCurrent(), null], (err, res) => {
            if (err) {
                console.log('Error while inserting data');
                result(null, err);
            } else {
                console.log('Insert category successfully');
                result(null, res)
            }
        })
}

Category.updateCategory = (id, categoryReqData, result) => {
    dbConn.query('UPDATE category SET name=?, updated_at=? WHERE id=?', [categoryReqData.name, getCurrent(), id], (err, res) => {
        if (err) {
            console.log('Error while updating data');
            result(null, err);
        } else {
            console.log('Update category successfully');
            result(null, res)
        }
    })
}

Category.deleteCategory = (id, result) => {
    dbConn.query('UPDATE category SET status=? WHERE id=?', ['Inactive', id], (err, res) => {
        if (err) {
            console.log('Error while deleting data');
            result(null, err);
        } else {
            console.log('Delete category successfully');
            result(null, res)
        }
    })
}

module.exports = Category