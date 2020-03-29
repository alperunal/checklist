exports.getUsers = function (req, res, next) {
    res.status(200).json({
        success: true,
        message: 'Show all users',
    });
};

exports.createUser = function (req, res, next) {
    res.status(200).json({
        success: true,
        message: 'Create user',
    });
};

exports.updateUser = function (req, res, next) {
    res.status(200).json({
        success: true,
        message: 'Update user',
    });
};

exports.getUser = function (req, res, next) {
    res.status(200).json({
        success: true,
        message: 'Show user',
    });
};

exports.deleteUser = function (req, res, next) {
    res.status(200).json({
        success: true,
        message: 'Delete user',
    });
};