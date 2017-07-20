// const assert = require('assert');
// const User = require('../src/user');

// describe('Subdocuments', () => {
//     it('can create a subdocument nested inside a document', (done) => {
//         const joe = new User({ 
//             name: 'Joe',
//             posts: [
//                 {
//                     title: 'first post'
//                 },
//                 {
//                     title: 'second post',
//                 }
//             ]
//         });

//         joe.save()
//             .then(() => User.findOne({ name: 'Joe' })
//             .then((user) => {
//                 assert(user.posts.length === 2);
//                 assert(user.posts[1].title === 'second post');
//                 done();
//             })
            
//         )
//     })

//     it('can add subdocuments to an existing document', (done) => {
//         const joe = new User({ 
//             name: 'Joe',
//             posts: []
//         });

//         joe.save()
//             .then(() => User.findOne({ name: 'Joe'}))
//             .then((user) => {
//                 user.posts.push({ title: 'new post'});
//                 return user.save();
//             })
//             .then(() => User.findOne({ name: 'Joe' }))
//             .then((user) => {
//                 assert(user.posts.length === 1);
//                 assert(user.posts[0].title === 'new post')
//                 done();
//             });
//     });

//     it('can remove a subdocument from an existing document', (done) => {
//         const meredith = new User({
//             name: 'Meredith',
//             posts: [
//                 {
//                     title: 'first post!'
//                 },
//                 {
//                     title: 'second post!'
//                 }
//             ]
//         })

//         meredith.save()
//             .then(() => User.findOne({ name: 'Meredith' }))
//             .then((user) => {
//                 //multiple remove methods
//                 //user.posts = user.posts.filter(post => post.title !== 'first post!')
//                 //user.posts[0].remove();
//                 user.posts.forEach(post => {
//                     if (post.title === "first post!") {
//                         post.remove();
//                     }
//                 })
//                 return user.save();
//             })
//             .then(() => User.findOne({ name: 'Meredith' }))
//             .then((user) => {
//                 assert(user.posts.length === 1);
//                 assert(user.posts[0].title === 'second post!')
//                 done();
//             })
//     })
// })