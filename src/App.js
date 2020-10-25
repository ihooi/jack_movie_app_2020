import React from 'react';

function Food( { name, picture }) {
  return (
    <div>
      <h2>I like {name} </h2>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'kalgooksu',
    image: 'https://www.chungjungone.com/knowhow/images/blog/ezr/ker42/1.jpg'
  },
  {
    id: 2,
    name: 'Kare',
    image: 'https://img.daily.co.kr/@files/www.daily.co.kr/content/life/2015/20151216/3b75cf6dfbc03668f3fc9bb17a416b59.jpg'
  },
  {
    id:3,
    name: 'bibimbap',
    image: 'https://lh3.googleusercontent.com/proxy/bjHjex1nbUeZVLscBrJh4XGn_kUW8xoEzzpVWMkU5Vo-YDHXgexZo5bIi-e8mWljI7AwnSZ_1KPXeLcV859fxhhLCGGIH2lAuZY'
  },
];

function App() {
  return (
    <div>
      {foodILike.map(x => (<Food key={x.id} name={x.name} picture={x.image}/>))}
    </div>
  );
}

export default App;
