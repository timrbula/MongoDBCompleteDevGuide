const assert = require('assert');
const User = require('../src/user');

describe('Creating users in the database', () => {

    it('creates a user', (done) => {
        const glen = new User({ name: "Glen Hickman", email: "gchickma@us.ibm.com" });
        glen.save()
            .then(() => {
                assert(!glen.isNew);
                done();
            })
    })
});