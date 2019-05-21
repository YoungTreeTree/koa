'use strict';

const query = require('../../util').util.query;

exports.test1 = async (ctx) => {
    ctx.body = 'test'
};

exports.testPost = async (ctx) => {
    const body = ctx.request.body;
    let sql = body.sql || '',
        value = body.value || [];
    let result = query(sql,value);
    ctx.body = await result
};