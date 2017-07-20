const mongoose = require('mongoose');

//use ES6 global Promise from node.js env
mongoose.Promise = global.Promise;


//connect to MongoDB collection
before((done) => {
    mongoose.connect('mongodb://localhost/users_test');
    mongoose.connection
        .once('open', () => done())
        .on('error', (error) => {
            console.warn('Warning', error);
        });
})

//drop users collection before each test˜
beforeEach((done) => {
    const { users, blogposts, comments } = mongoose.connection.collections;
    // users.drop(() => {
    //     blogposts.drop(() => {
    //         comments.drop(() => {
    //             done();
    //         });
    //     });
    // });
});


