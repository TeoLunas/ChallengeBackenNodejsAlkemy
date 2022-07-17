const express = require('express');

const characterRouter = require('./characterRouter')

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/characters', characterRouter)
};

module.exports = routerApi;

