const router= require('express').Router();
const {   Posts, Recipe } = require('../models');

const withAuth = require('../utils/auth');


 router.get('/', withAuth, async (req, res) => {
    try {
        
        const profData = await Posts.findAll({
            where:{user_id: req.session.user_id},
        });
        const mData = await Recipe.findAll({
          where:{user_id: req.session.user_id},
        });
        const posts = profData.map((Posts) => Posts.get({ plain: true}));
        const recipe = mData.map((Recipe) => Recipe.get({ plain: true}));
        res.render('allPostsAdmin', {
            layout: 'dashboard',
            posts,
            recipe,
           
          
        });
    } catch (err) {
        res.redirect('login');
        res.status(500).json(err);
    }
 });




// // opens handlebars views to a user form to allow a new Meetup, Post, Profile
router.get('/newRecipe', withAuth,(req, res) => {
    res.render('newMeetup', {
        layout: 'dashboard',
    });
 });
 router.get('/newPost', withAuth, (req, res) => {
    res.render('newPosts', {
        layout: 'dashboard',
    });
 });

 

/////// edit Posts///////
 router.get('/edit/:id', withAuth, async (req, res) => {
    try {
      const postData = await Posts.findByPk(req.params.id);
  
      if (postData) {
        const posts = postData.get({ plain: true });
  
        res.render('editPosts', {
          layout: 'dashboard',
          posts,
        });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.redirect('login');
    }
  });
/////// edit Meetups///////
  router.get('/editRecipe/:id', withAuth, async (req, res) => {
    try {
      const postData = await Recipe.findByPk(req.params.id);
  
      if (postData) {
        const recipe = postData.get({ plain: true });
  
        res.render('editRecipe', {
          layout: 'dashboard',
          recipe,
        });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.redirect('login');
    }
  });

  
module.exports= router;