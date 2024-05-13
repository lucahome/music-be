const router = require('express').Router();
const _ = require('lodash');

const controller = require('./music.controller');

router.get('/:musicId', controller.getMusicData);

module.exports = router;