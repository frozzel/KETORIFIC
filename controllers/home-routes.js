const { Recipe, User, Posts, Comments } = require('../models');

const router= require('express').Router();


  router.get('/Recipe/:id', async (req, res) => {
    try {
      const pData = await Recipe.findByPk(req.params.id, {
        include: [User, 
        {
          model: Comments,
          include: [User],
        }],
      });
  
      if (pData) {
        const recipe = pData.get({ plain: true });
  
        res.render('singleRecipe', { recipe });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/', async (req, res) => {
    try {
      const pData = await Posts.findAll({
        include: [User],
        
      });
      const mData = await Recipe.findAll({
        include: [User],
        
      });
  
      const posts = pData.map((Posts) => Posts.get({ plain: true }));
      const recipe = mData.map((Recipe) => Recipe.get({ plain: true }));
      res.render('allposts', { 
        posts,
        recipe,

       });
    } catch (err) {
      res.status(500).json(err);
      console.log(err)
    }
  });


  router.get('/Posts/:id', async (req, res) => {
    try{
      const pData = await Posts.findByPk(req.params.id, {
        include: [User,
          {
            model: Comments,
            include: [User],
          }],
      });

      if (pData) {
        const posts = pData.get({ plain: true });
        res.render('singlePosts', { posts });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  ///// login sessions//////

  router.get('/login', (req, res)=>{if (req.session.loggedIn){res.redirect('/'); return}res.render('login')});

  router.get('/signup', (req, res)=>{if (req.session.loggedIn){res.redirect('/'); return}res.render('signup')});


module.exports= router;