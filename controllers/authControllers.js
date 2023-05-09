const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET = 'newtonSchool';

const decodeToken = (req, res, next) => {
    try {
        let { token } = req.body;
        console.log(token);
        const decodedToken = jwt.verify(token, JWT_SECRET);
        res.status(200).json({ payload: decodedToken, status: 'Success' });
    } catch (err) {
        next(err);
    }
};

/*
Instructions:
The controller expects an HTTP POST request with the following fields in the request body: 'username', 'email', and 'password'.

If any of these fields are missing, the controller should respond with a 400 Bad Request status and a JSON object containing a 'message' field with value 'Missing required field(s).', and a 'status' field with value 'Error'.

If the email is not in a valid format, the controller should respond with a 400 Bad Request status and a JSON object containing a 'message' field with value 'Invalid email format.', and a 'status' field with value 'Error'.

If the username or email already exist in the database, the controller should respond with a 409 Conflict status and a JSON object containing a 'message' field with value 'Username or email already exists.', and a 'status' field with value 'Error'.

If the user is successfully created, the controller should respond with a 201 Created status and a JSON object containing a 'status' field with value 'Success', and a 'data' field with the newly created user object.

If there is an error during the user creation process, the controller should respond with a 500 Internal Server Error status and a JSON object containing a 'message' field with value 'Something went wrong', a 'status' field with value 'Error', and an 'error' field with the error object.

Input:
{
"username": "john",
"email": "john@example.com",
"password": "password123"
}

Output:
{
"status": "success",
"data": {
    "user": {
        "_id": "612d0e2073f30300159609b6",
        "username": "john",
        "email": "john@example.com",
        "password": "$2a$10$QVZ8uJMMDxI3K5z5ETykaOBLlAJ47o5.j3qNg4pOfZK4o8USOsW/e",
        "__v": 0
    }
}
}
*/

const signup = async (req, res, next) => {
   //Write your code here
}

/*
Instructions:
The controller expects an HTTP POST request with the following fields in the request body: 'email' and 'password'.

If any of these fields are missing, the controller should respond with a 400 Bad Request status and a JSON object containing a 'message' field with value 'Please provide email and password', and a 'status' field with value 'Error'.

If the email or password is invalid, the controller should respond with a 401 Unauthorized status and a JSON object containing a 'message' field with value 'Invalid email or password', a 'status' field with value 'Error', and an 'error' field with the error message 'Invalid Credentials'.

If the email and password are valid, the controller should generate a JSON web token (JWT) with the user's id, username, and email as the payload, sign it with a secret key, and set the expiration time to 1 hour. The controller should respond with a 200 OK status and a JSON object containing a 'token' field with the signed JWT, and a 'status' field with value 'Success'.

If there is an error during the user lookup or password comparison process, the controller should respond with a 500 Internal Server Error status and a JSON object containing a 'message' field with value 'Something went wrong', a 'status' field with value 'Error', and an 'error' field with the error object.

Input:
{
"email": "john@example.com",
"password": "password123"
}

Output:
{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTJkMGUyMDczZjMwMzAwMTU5NjA5YjYiLCJ1c2VybmFtZSI6ImpvaG4iLCJlbWFpbCI6ImpvaG5AZXhhbXBsZS5jb20iLCJpYXQiOjE2MzA0MDYyMDIsImV4cCI6MTYzMDQxMjYwMn0.8p0y5b5a5ul5O2f4h3WzZgiLsnDkOtvJhMhqUhGDUiQ",
"status": "Success"
}
*/
const login = async (req, res,next) => {
   //Write your code here
};

/*
You need to implement a logout controller which takes an authorization token as input, verifies the token, clears the cookie and logs out the user.

Instructions:
The controller expects an HTTP POST request with an authorization token in the request header.

If the authorization token is missing, the controller should respond with a 401 Unauthorized status and a JSON object containing a 'message' field with value 'Authentication failed: Missing token.', and a 'status' field with value 'Error'.

If the authorization token is invalid, the controller should respond with a 401 Unauthorized status and a JSON object containing a 'message' field with value 'Authentication failed: Invalid token.', and a 'status' field with value 'Error'.

If the authorization token is valid, the controller should clear the cookie and respond with a 200 OK status and a JSON object containing a 'message' field with value 'Logged out successfully.', and a 'status' field with value 'Success'.

If there is an error during the JWT verification process or clearing the cookie, the controller should respond with a 500 Internal Server Error status and a JSON object containing a 'message' field with value 'Something went wrong', a 'status' field with value 'Error', and an 'error' field with the error object.

Input:
Authorization Token, token is present in req.hearders.authorization

Output:
{
"message": "Logged out successfully.",
"status": "Success"
}
*/
const logout = (req, res) => {
    //Write your code here
};



module.exports = { login, logout, signup, decodeToken };