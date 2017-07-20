// const assert = require('assert');
// const User = require('../src/user');

// describe('Delete users out of the database', () => {
//     let joe;

//     beforeEach(done => {
//         joe = new User({ name: "Joe" });
//         joe.save()
//             .then(() => done());
//     });

//     it('model instance remove', done => {
//         joe.remove()
//             .then(() => User.findOne({ name: "Joe"})
//             .then(user => {
//                 assert(user === null)
//                 done();
//             })
//         )
//     });

//     //remove all that match this criteria
//     it('model class method remove', done => {
//         User.remove({ name: 'Joe' })
//             .then(() => User.findOne({ name: "Joe"})
//             .then(user => {
//                 assert(user === null)
//                 done();
//             })
//         )
//     })

//     //find one and remove that matches criteria
//     it('model class method findAndRemove', done => {
//         User.findOneAndRemove({ name: 'Joe' })
//             .then(() => User.findOne({ name: "Joe"})
//             .then(user => {
//                 assert(user === null)
//                 done();
//             })
//         )
//     })

//     it('model class method findByIdAndRemove', done => {
//         User.findByIdAndRemove(joe._id)
//             .then(() => User.findOne({ name: "Joe"})
//             .then(user => {
//                 assert(user === null)
//                 done();
//             })
//         )
//     })
// });