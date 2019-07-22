const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('./users-model.js');

router = express.Router();

router.post('/register', async (req, res) => {
  const user = req.body;
  const hashedPw = bcrypt.hashSync(user.password, 12);
  user.password = hashedPw;
  console.log(user);
  try {
    const newUser = await Users.register(user);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
