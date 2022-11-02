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
        const Recipe = pData.get({ plain: true });
  
        res.render('singleRecipe', { Recipe });
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
  
      const Posts = pData.map((Posts) => Posts.get({ plain: true }));
      const Recipe = mData.map((Recipe) => Recipe.get({ plain: true }));
      res.render('allposts', { 
        Posts,
        Recipe,

       });
    } catch (err) {
      res.status(500).json(err);
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
        const Posts = pData.get({ plain: true });
        res.render('indivpost', { Posts });
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