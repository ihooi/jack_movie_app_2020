import React from 'react';

function Food( { fav }) {
return <h3>I like { fav }</h3>;
}

// 13: 끝에 한칸띄고 슬래시 잊지말자
function App() {
  return (
    <div>
      <h1>Hello</h1> 
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="bap" />     
    </div>
  );
}

export default App;
