const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('./users-model.js');
const authenticate = require('../auth/auth-middleware.js');

router = express.Router();

router.post('/register', async (req, res) => {
  const user = req.body;
  const hashedPw = bcrypt.hashSync(user.password, 12);
  user.password = hashedPw;
  try {
    const newUser = await Users.register(user);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;
  console.log(Users.findBy);
  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.json({ message: `Welcome ${user.username}` });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
