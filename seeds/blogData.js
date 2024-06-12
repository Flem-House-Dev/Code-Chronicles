const { Blog } = require('../models');

const blogdata = [
  {
    title: 'Working with headers',
    author: 'LedyX',
    post_date: 'March 30, 2018',
    category_id: 1,
    text_body:
      'Headers are a great way to show hierarchy in the text content. ',
  },
  {
    title: 'Importing Stylesheets',
    author: 'WStudio',
    post_date: 'May 05, 2017',
    category_id: 1,
    text_body: 'Stylesheets can be imported in the head section of the HTML document.',
  },
  {
    title: 'Data Types',
    author: 'S_Photo',
    post_date: 'June 10, 2019',
    category_id: 2,
    text_body: 'When working with JavaScript, it is important to understand the different datatypes: string, number, boolean, undefined, null, and object are some of the primitive data types that a user would work with.',
  },
  {
    title: 'Working With Arrays',
    author: 'icemanphotos',
    post_date: 'July 4, 2020',
    category_id: 2,
    text_body: 'When working with arrays, always wrap the array with square brackets [].',
  },
  {
    title: 'Introduction to Functions',
    author: 'VRstudio',
    post_date: 'August 14, 2016',
    category_id: 2,
    text_body: 'Functions in JavaScript are incredibly useful. They are where we program the logic itself to make things happen.',
  },
  {
    title: 'CSS Colors',
    author: 'DrivingJack',
    post_date: 'October 15, 2018',
    category_id: 3,
    text_body:
      'In CSS, there are a few ways to define colors. One way is to use the color name itself. Another is to define a color with a hex code.',
  },
  {
    title: 'Borders',
    author: 'Vitalii_Mamchuk',
    post_date: 'November 3, 2016',
    category_id: 3,
    text_body:
      'Borders are a great way to add some definition to the look of an html document. They can be adjusted to have a certain width or color.',
  },
  {
    title: 'What is Node.js?',
    author: 'Vlad Sokolovsky',
    post_date: 'December 24, 2020',
    category_id: 4,
    text_body:
      'Whereas JavaScript was originally designed to be used on the client\'s browser, Node.js works on the server side to handle logic and functionality on the back-end.',
  },
  {
    title: 'NPM Packages',
    author: 'Smit',
    post_date: 'January 20, 2018',
    category_id: 4,
    text_body:
      'NPM packages can be thought of as mini "apps" whereas the NPM (Node Package Manager) can be thought of as an "app store". ',
  },
];

const seedBlogs = () => Blog.bulkCreate(blogdata);

module.exports = seedBlogs;
