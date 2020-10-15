import React from 'react';

function Food( { fav }) {
return <h3>I like { fav }</h3>;
}

const foodILike = [
  {
    name: 'kalgooksu',
    image: 'https://www.chungjungone.com/knowhow/images/blog/ezr/ker42/1.jpg'
  },
  {
    name: 'Kare',
    image: 'https://img.daily.co.kr/@files/www.daily.co.kr/content/life/2015/20151216/3b75cf6dfbc03668f3fc9bb17a416b59.jpg'
  },
  {
    name: 'bibimbap',
    image: 'https://lh3.googleusercontent.com/proxy/bjHjex1nbUeZVLscBrJh4XGn_kUW8xoEzzpVWMkU5Vo-YDHXgexZo5bIi-e8mWljI7AwnSZ_1KPXeLcV859fxhhLCGGIH2lAuZY'
  },
];

function App() {
  return (
    <div>
      <h1>Hello</h1>     
    </div>
  );
}

export default App;
