const assert = require('assert');
const User = require('../src/user');

describe('Validating records', () => {
    it('requires a user name', () => {
        const user = new User({ name: undefined });
        const validationResult = user.validateSync();
        const { message } = validationResult.errors.name;
        assert(message === 'User name is required.');
    });

    it('requires a user name to be long than 2 characters', () => {
        const user = new User({ name: 'MM' });
        const validationResult = user.validateSync();
        const { message } = validationResult.errors.name;
        assert(message === 'User name must be longer that two characters.');
    })

    it('disallows invalid records from being saved', (done) => {
        const user = new User({ name: 'MM' });
        user.save()
            .catch((validationResult) => {
                const { message } = validationResult.errors.name;
                assert(message === 'User name must be longer that two characters.');
                done();
            });
    });
});

