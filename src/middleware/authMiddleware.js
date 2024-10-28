const jwt = require('jsonwebtoken');

const authMiddleware = (request, h) => {
    const token = request.headers.authorization?.split(' ')[1];
    if (!token) return h.response({ message: 'No token provided' }).code(403);

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        request.user = decoded;
        return h.continue;
    } catch (err) {
        return h.response({ message: 'Invalid token' }).code(401);
    }
};

module.exports = authMiddleware;

