const Router = require('express');
const LoginRoutes = require('./LoginRoutes');

const router = Router();

router.use('/login', LoginRoutes);

module.exports = router;