const assert = require('assert');
const User = require('../src/user');

describe('virtual types', () => {
    it('postCount returns number of posts', (done) => {
        const meredith = new User({
            name: 'meredith',
            posts: [
                {
                    title: "first post!"
                }
            ]
        })
        meredith.save()
            .then(() => User.findOne({ name: 'meredith' }))
            .then((user) => {
                assert(user.postCount === 1);
                done();
            })
    })
})
