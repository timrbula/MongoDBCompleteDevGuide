const assert = require('assert');
const User = require('../src/user');

describe('Update users in the database', () => {
    let joe;

    beforeEach(done => {
        joe = new User({ name: "Joe", favorites: 0 });
        joe.save()
            .then(() => done());
    });

    const assertName = (operation, done) => {
        operation
            .then(() => User.findOne({ name: "Meredith"})
            .then(user => {
                assert(user.name === "Meredith")
                done();
            })
        );
    }

    it('model instance update', done => {
       assertName(
           joe.update({ name: 'Meredith' }),
           done
        );
    });

    it('model instance set & save', done => {
        joe.set('name', 'Meredith')
        assertName(joe.save(), done);
    });

    it('model class method update', done => {
        assertName(
            User.update({ name: 'Joe' }, { name: 'Meredith'}), 
            done
        );
    })

    it('model class method findOneAndUpdate', done => {
        assertName(
            User.findOneAndUpdate({ name: 'Joe' }, { name: 'Meredith'}), 
            done
        );
    })

    it('class method findByIdAndUpdate', done => {
        assertName(
            User.findByIdAndUpdate(joe._id, { name: "Meredith" }), 
            done
        );
    })

    it('a user can have their favorites updated by 1', done => {
        User.update({ name: "Joe"}, { $inc: { favorites: 1 } })
            .then(() => User.findOne({ name: 'Joe' }))
            .then((user) => {
                assert(user.favorites === 1);
                done();
            });
    });
});