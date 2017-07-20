const mongoose = require('mongoose');

//use ES6 global Promise from node.js env
mongoose.Promise = global.Promise;


//connect to MongoDB collection
before((done) => {
    mongoose.connect('mongodb://localhost:27017/users_test');
    mongoose.connection
        .once('open', () => done())
        .on('error', (error) => {
            console.warn('Warning', error);
        });
})

//drop users collection before each test
beforeEach((done) => {
    const { users, comments, blogposts } = mongoose.connection.collections;
    users.drop(() => {
        comments.drop(() => {
             blogposts.drop(() => {
                done();
            });
         });
    });
});


