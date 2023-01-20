# users Apis

- [x] sign up
- [] login
- [] forgot password
- [] reset password
- [] update profile

# process

- [] sign up

  - **method** : POST
  - fields name, email, password, role

  - validation -
    - validate name, email, password, role is required .
    - name should be email should be valid,
    - password should be strong, and min length 5.
  - check existence of user by email.
  - hash the password
  - save the data into database
  - generate token include non sensitive info into token.
  - expose token in header

- [] sign in

  - **method** : POST
  - fields are email, password

  - validation :
    - validation both required.
    - email should be valid
  - if email is not found should throw error.
  - use plain password with db hash password
  - once verified, generate token and expose in headers.

- [] forgot password

  - **method** : GET
  - fields are email

  - validate field and required, should be valid.
  - should exists in db.
  - if exists generate token and send reset password link to user email.

- [] reset password:

  - **method** : POST
  - fields are email, password , confirm password.
  - validate email, password and confirm password should be same.
  - user should exists.
  - hash password and store into user record.
  - send success.

- [] update profile:
  - **method** : POST
  - should be valid user.
  - fields are id, email is required.
  - other properties of model optional
  - user should exists.
  - update the user based on email
