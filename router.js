const Router = require('express');
const router = new Router();
const controller = require('./controller');

router.post('/send-weight', controller.sendWeight);
router.get('/get-weight', controller.getJSON);




module.exports = router;


