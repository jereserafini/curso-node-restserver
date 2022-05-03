//Para ayudas de codigo
const { response, request } = require('express')

const userGet = (req = request, res = response) => {

    const query = req.query;

    res.json({
        msg: "get API - controller",
        query
    });
}

const userPost = (req, res = response) => {

    const {name, years} = req.body;

    res.status(201).json({
        msg: "post API - controller",
        name,
        years
    });
}

const userPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: "put API - controller",
        id
    });
}

const userDelete = (req, res = response) => {
    res.json({
        msg: "delete API - controller"
    });
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}