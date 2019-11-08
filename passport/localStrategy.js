const db = require('../models/user')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
    {
        usernameField: 'username' // not necessary, DEFAULT
    },
    function (username, password, done) {
        db.User.findOne({ username: username }, (err, user) => {
            if (err) {
                return done(err)
            }
            if (!user) {
                return done(null, false, { message: 'No Known username' })
            }
            if (!user.checkPassword(password)) {
                return done(null, false, { message: 'Incorrect password' })
            }
            return done(null, user)
        })
    }
)

module.exports = strategy