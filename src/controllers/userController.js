const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const registerUser = async (request, h) => {
    const { name, email, password } = request.payload;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await User.create({ name, email, password: hashedPassword });
        return h.response({ message: 'User registered successfully', user }).code(201);
    } catch (error) {
        return h.response({ error: error.message }).code(500);
    }
};

const loginUser = async (request, h) => {
    const { email, password } = request.payload;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user || !await bcrypt.compare(password, user.password)) {
            return h.response({ message: 'Invalid credentials' }).code(401);
        }
        
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return h.response({ message: 'Login successful', token }).code(200);
    } catch (error) {
        return h.response({ error: error.message }).code(500);
    }
};

module.exports = { registerUser, loginUser };

