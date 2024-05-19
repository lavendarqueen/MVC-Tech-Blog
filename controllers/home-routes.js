const router = require('express').Router();

// ? We are using hardcoded data here, where would our data usually come from? Remember - we haven't yet set up a database or Sequelize in our app.
const blogPosts = [
  {
    id: 1,
    author_name: "Phyllis Ann",
    blog_title: 'Testing MVC Tech Blog',
    comment: 'I cannot wait to see how this works!',
  },
  {
    id: 2,
    author_name: "Phyllis Ann",
    blog_title: 'Testing MVC Tech Blog',
    comment: 'I cannot wait to see how this works!',
    user: ""
  },
  {
    id: 3,
    author_name: "Phyllis Ann",
    blog_title: 'Testing MVC Tech Blog',
    comment: 'I cannot wait to see how this works!',
  },
  {
    id: 4,
    author_name: "Phyllis Ann",
    blog_title: 'Testing MVC Tech Blog',
    comment: 'I cannot wait to see how this works!',
  }
  {
    id: 5,
    author_name: "Phyllis Ann",
    blog_title: 'Testing MVC Tech Blog',
    comment: 'I cannot wait to see how this works!',
    user: 
  },
  {
    id: 6,
    author_name: "Phyllis Ann",
    blog_title: 'Testing MVC Tech Blog',
    comment: 'I cannot wait to see how this works!',
  },
  {
    id: 7,
    author_name: "Phyllis Ann",
    blog_title: 'Testing MVC Tech Blog',
    comment: 'I cannot wait to see how this works!',
  },
];

// ? get all comments
router.get('/', async (req, res) => {
  res.render('all', { blogPosts });
});
