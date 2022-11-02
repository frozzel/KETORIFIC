const router = require('express').Router();
const { Comments } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newComments = await Comments.create({
      ...req.body,
      user_id: req.session.userId,
    });
    res.json(newComments);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;