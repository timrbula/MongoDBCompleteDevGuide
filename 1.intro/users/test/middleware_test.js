const mongoose = require('mongoose');
const assert = require('assert');
const User = require('../src/user');
const BlogPost = require('../src/blogPost');

describe('middleware', () => {
    let joe, blogPost;

    beforeEach((done) => {
        joe = new User({ name: 'Joe' });
        blogPost = new BlogPost({ title: 'This is fantastic', content: 'yep it really is'});
        
        //bit of magic occuring on mongoose's side. It will pull out the values as defined in the schmema
        joe.blogPosts.push(blogPost);

        Promise.all([joe.save(), blogPost.save()])
            .then(() => done());

        it('users clean up referenced blogposts on remove', (done) => {
            joe.remove()
                .then(() => BlogPost.count())
                .then((count) => {
                    assert(count === 0);
                    done();
                });
            });
    });
});