const mongoose = require('mongoose');
const assert = require('assert');
const User = require('../src/user');
const Comment = require('../src/comment')
const BlogPost = require('../src/blogPost')

describe('association tests', () => {

    let joe, meredith, blogPost, comment;

    beforeEach((done) => {
        joe = new User({ name: 'Joe' });
        meredith = new User({ name: 'Meredith' });
        blogPost = new BlogPost({ title: 'This is fantastic', content: 'yep it really is'});
        comment = new Comment({ content: 'congrats on writing something' });

        //bit of magic occuring on mongoose's side. It will pull out the values as defined in the schmema
        joe.blogPosts.push(blogPost);
        blogPost.comments.push(comment);
        comment.user = meredith;

        Promise.all([joe.save(), meredith.save(), blogPost.save(), comment.save()])
            .then(() => done());
    })

    it('saves a relation between a user and a blogpost', (done) => {
        User.findOne({ name: 'Joe' }).populate('blogPosts')
            .then((user) => {
                assert(user.blogPosts[0].title === 'This is fantastic');
                done();
            });
    })

    it('saves a full relation graph -> user -> blogPosts -> comments -> user', (done) => {
        User.findOne({ name: 'Joe' })
            .populate({
                path: 'blogPosts',
                populate: {
                    path: 'comments',
                    model: 'comment',
                    populate: {
                        path: 'user',
                        model: 'user'
                    }
                }
            })
            .then((user) => {
                assert( user.blogPosts[0].comments[0].content === 'congrats on writing something')
                assert( user.blogPosts[0].comments[0].user.name === 'Meredith')
                done();
            })
    })
})