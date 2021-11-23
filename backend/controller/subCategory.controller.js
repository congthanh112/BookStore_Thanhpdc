const SubCategoryModel = require('../model/subCategory.model')

exports.getAllSubCategory = (req, res) => {
    SubCategoryModel.getAllSubCategory((err, subCategory) => {
        if (err) res.send(err);
        res.status(200).send(subCategory);
    })
};

exports.getByCategory = (req, res) => {
    SubCategoryModel.getByCategoryId(req.params.id, (err, subCategory) => {
        if (err) res.send(err);
        res.status(200).send(subCategory);
    })
};

exports.createSubCategory = (req, res) => {
    const subCateReqData = new SubCategoryModel(req.body);

    if (req.body.contrustor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all field' })
    } else {
        SubCategoryModel.createNewSubCategory(subCateReqData, (err, subCate) => {
            if (err) res.send(err);
            res.status(201).json({ status: true, message: 'SubCategory created successfully', data: subCate })
        })
    }
};

exports.updateSubCategory = (req, res) => {
    const subCateReqData = new SubCategoryModel(req.body);
    if (req.body.contrustor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all field' })
    } else {
        SubCategoryModel.updateSubCategory(req.params.id, subCateReqData, (err, subCate) => {
            if (err) res.send(err);
            res.status(200).json({ status: true, message: 'SubCategory updated successfully', data: subCate })
        })
    }
};

exports.deleteSubCategory = (req, res) => {
    SubCategoryModel.deleteCategory(req.params.id, (err, subCate) => {
        if (err) res.send(err);
        res.status(200).json({ success: true, message: 'Delete SubCategory successfully' })
    })
};



