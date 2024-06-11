const { Blog } = require('../models');

const blogdata = [
  {
    title: 'Blossoming Apricot',
    author: 'LedyX',
    post_date: 'March 30, 2018',
    category_id: 1,
    text_body:
      'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: 'Cosmos Flowers',
    author: 'WStudio',
    post_date: 'May 05, 2017',
    category_id: 1,
    text_body: 'Pink cosmos flowers against a blue sky.',
  },
  {
    title: 'Sand + Sea = Summer',
    author: 'S_Photo',
    post_date: 'June 10, 2019',
    category_id: 2,
    text_body: 'Sandy beach with the blue sea and sky in the background.',
  },
  {
    title: 'Beach Chairs',
    author: 'icemanphotos',
    post_date: 'July 4, 2020',
    category_id: 2,
    text_body: 'Two beach chairs under a beach umbrella on the beach.',
  },
  {
    title: 'Beach Sunrise',
    author: 'VRstudio',
    post_date: 'August 14, 2016',
    category_id: 2,
    text_body: 'Sun setting in the horizon with waves lapping the shore.',
  },
  {
    title: 'Fall Colors',
    author: 'DrivingJack',
    post_date: 'October 15, 2018',
    category_id: 3,
    text_body:
      'Trees with red, orange, yellow leaves reflected on a still lake.',
  },
  {
    title: 'Autumn Mountains',
    author: 'Vitalii_Mamchuk',
    post_date: 'November 3, 2016',
    category_id: 3,
    text_body:
      'Mountains with red and yellow leaves against a background of hazy rolling hills.',
  },
  {
    title: 'Frozen River',
    author: 'Vlad Sokolovsky',
    post_date: 'December 24, 2020',
    category_id: 4,
    text_body:
      'Trees with white frozen branches reflected on a frozen river against a light pink sky.',
  },
  {
    title: 'Winter Home',
    author: 'Smit',
    post_date: 'January 20, 2018',
    category_id: 4,
    text_body:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },
];

const seedBlogs = () => Blog.bulkCreate(blogdata);

module.exports = seedBlogs;
