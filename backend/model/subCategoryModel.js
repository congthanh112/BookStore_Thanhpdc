const dbConn = require('../config/database/db.config')
const { v4: uuidv4 } = require('uuid');

const SubCategory = function (subCategory) {
    this.id = subCategory.id;
    this.name = subCategory.name;
    this.categoryId = subCategory.categoryId;
    this.status = subCategory.status;
    this.create_at = subCategory.create_at;
    this.updated_at = subCategory.updated_at;
}

SubCategory.getAllSubCategory = (result) => {
    dbConn.query('SELECT * FROM sub_category', (err, res) => {
        if (err) {
            console.log('Error while fetching data', err);
            result(null, err);
        } else {
            result(null, res)
        }
    })
}

SubCategory.getByCategoryId = (id, result) => {
    dbConn.query('SELECT * FROM sub_category WHERE category_id=?', [id], (err, res) => {
        if (err) {
            console.log('Error while fetching data', err);
            result(null, err);
        } else {
            result(null, res)
        }
    })
}

SubCategory.createNewSubCategory = (subCateReqData, result) => {
    dbConn.query('INSERT INTO sub_category(id, name, category_id create_at, updated_at) VALUES (?,?,?,?,?)',
        [uuidv4(), subCateReqData.name, subCateReqData.categoryId, new Date(), null], (err, res) => {
            if (err) {
                console.log('Error while inserting data');
                result(null, err);
            } else {
                console.log('Insert category successfully');
                result(null, res)
            }
        })
}

SubCategory.updateCategory = (id, subCateReqData, result) => {
    dbConn.query('UPDATE sub_category SET name=?, category_id, updated_at=? WHERE id=?', [subCateReqData.name, subCateReqData.categoryId, new Date(), id], (err, res) => {
        if (err) {
            console.log('Error while updating data');
            result(null, err);
        } else {
            console.log('Update category successfully');
            result(null, res)
        }
    })
}

SubCategory.deleteCategory = (id, result) => {
    dbConn.query('UPDATE sub_category SET status=? WHERE id=?', ['Inactive', id], (err, res) => {
        if (err) {
            console.log('Error while deleting data');
            result(null, err);
        } else {
            console.log('Delete category successfully');
            result(null, res)
        }
    })
}

module.exports = SubCategory