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
    RESTAURANT_GET_ALL: 'Restaurants Fetched Successfully.',
    RESTAURANT_GET: 'Restaurant Fetched Successfully.',
    RESTAURANT_ACTIVATED: 'Restaurant Activated Successfully',

    MENU_ALREADY_EXISTS: 'Menu Item Already Exists.',
    MENU_SUCCESS: 'Menu Item Added Successfully.',
    MENU_UPDATED: 'Menu Item Updated Successfully.',
    MENU_GET: 'Menu Items Fetched Successfully.',
    MENU_NOT_FOUND: 'Menu Item Not Found.',
    MENU_GET: 'Menus Fetched Successfully.',
    RESTAURANT_MENU_CATEGORIES_COUNT: 'Categories Fetched Successfully Countwise',

    ALREADY_COMMENTED: 'User Already Commented With Same Message',
    POST_COMMENT: 'Comment Added',

    CART_SUCCESS: 'Items Added Successfully Into Cart.',
    CART_GET: 'Carts Records Fetched Successfully.',

    ORDER_SUCCESS: 'Order Placed Successfully.',

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