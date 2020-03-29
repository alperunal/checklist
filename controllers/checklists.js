exports.getChecklists = function (req, res, next) {
    res.status(200).json({
        success: true,
        message: 'Show all checklists',
    });
};

exports.getChecklist = function (req, res, next) {
    res.status(200).json({
        success: true,
        message: 'Show checklist',
    });
};

exports.createChecklist = function (req, res, next) {
    res.status(200).json({
        success: true,
        message: 'Create checklist',
    });
};

exports.updateChecklist = function (req, res, next) {
    res.status(200).json({
        success: true,
        message: 'Update checklist',
    });
};

exports.deleteChecklist = function (req, res, next) {
    res.status(200).json({
        success: true,
        message: 'Delete checklist',
    });
};