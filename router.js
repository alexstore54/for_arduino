const Router = require('express');
const router = new Router();
const controller = require('./controller');

router.post('/send-weight', controller.sendWeight);





module.exports = router;


