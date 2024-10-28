const { registerUser, loginUser } = require('../controllers/userController');
const { registerSchema, loginSchema } = require('../utils/validation');

module.exports = [
    {
        method: 'POST',
        path: '/register',
        handler: registerUser,
        options: {
            validate: {
                payload: registerSchema,
                failAction: (request, h, err) => {
                    throw err;
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/login',
        handler: loginUser,
        options: {
            validate: {
                payload: loginSchema,
                failAction: (request, h, err) => {
                    throw err;
                }
            }
        }
    }
];
