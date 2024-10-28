require('dotenv').config();
const Hapi = require('@hapi/hapi');
const sequelize = require('../config/database');
const userRoutes = require('./routes/userRoutes');

const startServer = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: 'localhost'
    });

    server.route(userRoutes);

    await sequelize.sync();
    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

startServer();

