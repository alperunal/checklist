const express = require('express');
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/users');
const { getChecklists, getChecklist, createChecklist, updateChecklist, deleteChecklist } = require('../controllers/checklists');
const { getCategories, getCategory, createCategory, updateCategory, deleteCategory } = require('../controllers/categories');

const userRouter = express.Router();
const checklistRouter = express.Router({
    mergeParams: true,
});
const categoryRouter = express.Router({
    mergeParams: true,
});

userRouter.use('/users/:userId', checklistRouter);
userRouter.use('/users/:userId', categoryRouter);

userRouter.route('/users').get(getUsers);
userRouter.route('/users').post(createUser);
userRouter.route('/users/:userId').get(getUser);
userRouter.route('/users/:userId').put(updateUser);
userRouter.route('/users/:userId').delete(deleteUser);

checklistRouter.route('/checklists').get(getChecklists);
checklistRouter.route('/checklists').post(createChecklist);
checklistRouter.route('/checklists/:checklistId').get(getChecklist);
checklistRouter.route('/checklists/:checklistId').put(updateChecklist);
checklistRouter.route('/checklists/:checklistId').delete(deleteChecklist);

categoryRouter.route('/categories').get(getCategories);
categoryRouter.route('/categories').post(createCategory);
categoryRouter.route('/categories/:categoryId').get(getCategory);
categoryRouter.route('/categories/:categoryId').put(updateCategory);
categoryRouter.route('/categories/:categoryId').delete(deleteCategory);

module.exports = userRouter;