const knex = require('knex');

const db = require('../data/db-config.js');

module.exports = {
  findById,
  register,
  findBy
};

function findById(id) {
  return db('users')
    .where({ id })
    .first()
    .select('username', 'password');
}

async function register(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findBy(filter) {
  return db('users').where(filter);
}
