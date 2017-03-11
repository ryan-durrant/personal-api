/*jshint esversion: 6 */
let user = {
  name: 'Ryan',
  location: 'Provo',
  occupations: ['student', 'ScanFactor Founder'],
  hobbies: [
    {
      name: 'Rock climbing',
      type: 'adventure'
    },
    {
      name: 'TV watcher',
      type: 'lazy'
    },
    {
      name: 'Entrepreneurship',
      type: 'adventure'
    }
  ],
  family: [
    {
      name: 'Valerie',
      relation: 'wife',
      gender: 'female'
    },
    {
      name: 'Joseph',
      relation: 'bro',
      gender: 'male'
    },{
      name: 'Deanna',
      relation: 'sister',
      gender: 'female'
    }
  ],
  restaurants: [
    {
      name: 'De La Rosa',
      type: 'mexican',
      rating: 7
    },
    {
      name: 'Mooyah',
      type: 'burger joint',
      rating: 6
    },
    {
      name: 'Kneaders',
      type: 'sandwiches',
      rating: 8
    }
  ]
};
module.exports = user;
