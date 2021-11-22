const CategoryModel = require('../model/category.model')

exports.getAllCategory = (req, res) => {
    CategoryModel.getAllCategory((err, categories) => {
        if (err) res.send(err);
        res.send(categories);
    })
};

exports.createCategory = (req, res) => {
    const categoryReqData = new CategoryModel(req.body);

    if (req.body.contrustor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all field' })
    } else {
        CategoryModel.createNewCategory(categoryReqData, (err, category) => {
            if (err) res.send(err);
            res.json({ status: true, message: 'Category created successfully', data: category })
        })
    }
};

exports.updateCategory = (req, res) => {
    const categoryReqData = new CategoryModel(req.body);
    if (req.body.contrustor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all field' })
    } else {
        CategoryModel.updateCategory(req.params.id, categoryReqData, (err, category) => {
            if (err) res.send(err);
            res.json({ status: true, message: 'Category updated successfully', data: category })
        })
    }
};

exports.deleteCategory = (req, res) => {
    CategoryModel.deleteCategory(req.params.id, (err, category) => {
        if (err) res.send(err);
        res.json({ success: true, message: 'Delete Category successfully' })
    })
};



