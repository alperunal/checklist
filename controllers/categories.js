exports.getCategories = function (req, res, next) {
    res.status(200).json({
        success: true,
        message: 'Show all categories',
    });
};

exports.getCategory = function (req, res, next) {
    res.status(200).json({
        success: true,
        message: 'Show category',
    });
};

exports.createCategory = function (req, res, next) {
    res.status(200).json({
        success: true,
        message: 'Create category',
    });
};

exports.updateCategory = function (req, res, next) {
    res.status(200).json({
        success: true,
        message: 'Update category',
    });
};

exports.deleteCategory = function (req, res, next) {
    res.status(200).json({
        success: true,
        message: 'Delete category',
    });
};