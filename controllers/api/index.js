const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postsRoutes = require('./posts-routes');
const recipeRoutes = require('./recipe-routes');
const commentsRoutes = require('./comments-routes');

router.use('/User', userRoutes);
router.use('/Recipe', recipeRoutes);
router.use('/Posts', postsRoutes);
router.use('/Comments', commentsRoutes);

module.exports = router;