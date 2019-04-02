const Router = require('express').Router
const  {
    retreiveAll,
    create,
    update,
    deleteOne
} = require('../controllers/music')

const thisRoute = Router();

thisRoute.get('/', retreiveAll)

thisRoute.post('/', create);

thisRoute.put('/', update);

thisRoute.delete('/', deleteOne);

module.exports = thisRoute;