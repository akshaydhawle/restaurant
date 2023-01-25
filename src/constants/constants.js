const MESSAGES = {
    REGISTER_SUCCESS: 'User Registered Successfully.',
    INVALID_CREDENTIALS: 'Invalid credentials',
    LOGIN_SUCCESS: 'Login Successful',
    MAIL_SUCCESS: 'Mail Sent To Your Email , Please Check Your Inbox',
    PASSWORD_RESET_SUCCESS: 'Password reset successfully',
    USER_ALREADY_EXISTS: 'User Already Registered With Given Email Id',
    USER_NOT_FOUND: 'User Not Found',

    LOCATION_ALREADY_EXISTS: 'Location Already Exists.',
    LOCATION_SUCCESS: 'Location Added Successfully.',
    LOCATION_GET: 'Locations Fetched Successfully.',

    CATEGORIES_ALREADY_EXISTS: 'Category Already Exists.',
    CATEGORIES_SUCCESS: 'Category Added Successfully.',
    CATEGORIES_GET: 'Categories Fetched Successfully.',

    RESTAURANT_ALREADY_EXISTS: 'Restaurant Already Exists.',
    RESTAURANT_SUCCESS: 'Restaurant Created Successfully.',
    RESTAURANT_NOT_FOUND: 'Restaurant Not Found.',
    RESTAURANT_UPDATED: 'Restaurant Updated Successfully',

}

const HTTP_CODES = {
    UNAUTHORIZED: 401,
    OK: 200,
    NOT_FOUND: 404,
    BAD_REQUEST: 400,
    FORBIDDEN: 403,
    CREATED: 201,
    INTERNAL_SERVER_ERROR: 500,
    CONFLICT: 409
}

module.exports = {
    MESSAGES,
    HTTP_CODES
}