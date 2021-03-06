const router = require('express').Router()
const Events = require('./events-model')
const {restricted} = require('../resticted-middleware')

//GET ALL EVENTS
router.get('/', restricted, async (req, res, next) => {
	Events.get()
		.then((eventsArray) => {
			res.status(200).json(eventsArray)
		})
		.catch(next);
});

//GET EVENT AT 'ID'
router.get('/:id', restricted, (req, res, next) => {
	Events.getById(req.params.id)
		.then((event) => {
			res.status(200).json(event);
		})
		.catch(next);
});


module.exports = router