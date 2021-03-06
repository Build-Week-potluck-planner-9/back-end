const db = require('../../data/db-config')

function find() {
    return db('users')
}

function findBy(filter) {
    return db('users')
        .select('user_id', 'first_name', 'last_name', 'email', 'password')
        .where(filter)
}

function findById(user_id) {
    return db('users')
        .select('user_id', 'first_name', 'last_name', 'email', 'password')
        .where('user_id', user_id)
        .first()
}

async function add(user) {
    const [newUser] = await db('users').insert(user, ['user_id', 'first_name', 'last_name', 'email', 'password'])
    return newUser
}

module.exports = {
    find,
    findBy,
    findById,
    add
}