const mongoose = require('mongoose');

//use ES6 global Promise from node.js env
mongoose.Promise = global.Promise;

//connect to MongoDB collection
before((done) => {
    mongoose.connect('mongodb://172.16.20.18:27017/boomerang');
    mongoose.connection
        .once('open', () => {
            console.log("open");
            done();
        })
        .on('error', (error) => {
            console.warn('Warning', error);
        });
})


