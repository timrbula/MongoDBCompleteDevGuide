const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
    it('reads user with a particular email', done => {
        User.findOne({ email: 'gchickma@us.ibm.com' })
            .then(user => {
                console.log(user);
                assert(user.name === "Glen Hickman");
                done();
            });
    });

    // it('reads all users with the name of "Joe"', done => {
    //     User.find({ name: 'Joe' })
    //         .then(users => {
    //             assert(users[0]._id.toString() === joe._id.toString());
    //             done();
    //         })
    // })
});