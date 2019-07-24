const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');

module.exports = function(req, res, next) {
  if (req.session && req.session.username) {
    next();
  } else {
    res.status(401).json({ message: 'please login first' });
  }
};
