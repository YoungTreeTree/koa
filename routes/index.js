'use strict';
var router = require('./routes').router;

module.exports = function (app) {
    app.use(router.routes());
};
