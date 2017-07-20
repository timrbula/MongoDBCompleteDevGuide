const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
    it('reads all users with the name of "Joe"', done => {
        User.find({ name: 'Joe' })
            .then(users => {
                assert(users[0]._id.toString() === joe._id.toString());
                done();
            })
    })
});