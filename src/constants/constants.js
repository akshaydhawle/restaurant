const MESSAGES = {
    REGISTER_SUCCESS: 'User Registered Successfully.',
    INVALID_CREDENTIALS: 'Invalid credentials',
    LOGIN_SUCCESS: 'Login Successful',
    MAIL_SUCCESS: 'Mail Sent To Your Email , Please Check Your Inbox',
    PASSWORD_RESET_SUCCESS: 'Password reset successfully',
    USER_ALREADY_EXISTS: 'User Already Registered With Given Email Id',
    USER_NOT_FOUND: 'User Not Found'
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