import React from 'react';
import PropTypes from 'prop-types';

function Food( { name, picture, rating }) {
  return (
    <div>
      <h2>I like {name} </h2>
      <img src={picture} alt={name} />
      <h3>{rating}/5</h3>
    </div>
  );
}

Food.prototype = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

const foodILike = [
  {
    id: 1,
    name: 'kalgooksu',
    image: 'https://www.chungjungone.com/knowhow/images/blog/ezr/ker42/1.jpg',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Kare',
    image: 'https://img.daily.co.kr/@files/www.daily.co.kr/content/life/2015/20151216/3b75cf6dfbc03668f3fc9bb17a416b59.jpg',
    rating: 5,
  },
  {
    id:3,
    name: 'bibimbap',
    image: 'https://simplycook.imgix.net/recipes/Bibimbap-_720x480.jpg?dpr=1&fit=crop&fm=jpg&h=1000&ixlib=php-1.2.1&lossless=0&q=50&w=1200&s=621a9259e28cbbda23d38f524d6817ee',
  },
];

function App() {
  return (
    <div>
      {foodILike.map(x => (<Food key={x.id} name={x.name} picture={x.image} rating={x.rating} />))}
    </div>
  );
}

export default App;
