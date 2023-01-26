const UtilService = require('../services/utils');
const categoryService = require('../services/categoryService');
const categoryValidation = require('../validation/categoryValidation');
const { MESSAGES, HTTP_CODES } = require('../constants/constants');

const categoryController = {
    createCategory,
    getAllCategories
};

async function createCategory(req, res) {
    try {
        let logger = `categoryController: createCategory`
        const { name } = req.body;

        // validate the user
        categoryValidation.validateCategory(req.body);
        console.log(`${logger} - category validated`);

        // check if user with name already exists
        await categoryService.checkIfCategoryAlreadyExists({ name });
        console.log(`${logger} - category does not exists already, proceeding`, name);

        // save the user in the database
        const categoriesData = await categoryService.saveCategory(req.body);
        console.log(`${logger} - category saved in database`);

        console.log(`${logger} - category created success.`);
        return res.status(HTTP_CODES.OK).send({
            message: MESSAGES.CATEGORIES_SUCCESS,
            data: categoriesData
        });
    } catch (error) {
        return UtilService.serverError({ res, error });
    }
}

async function getAllCategories(req, res) {
    try {
        let logger = `categoryController: getAllCategories`

        const categoriesData = await categoryService.findAllCategories();
        console.log(`${logger} - categories fetched successfully, count:`, categoriesData.length);

        return res.status(HTTP_CODES.OK).send({
            message: MESSAGES.CATEGORIES_GET,
            data: categoriesData
        });
    } catch (error) {
        return UtilService.serverError({ res, error });
    }
}

module.exports = {
    categoryController
}