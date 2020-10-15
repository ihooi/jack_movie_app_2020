import React from 'react';

function Potato() {
  return <h3>I like potato</h3>;
}

// 13: 끝에 한칸띄고 슬래시 잊지말자
function App() {
  return (
    <div>
      <h1>Hello</h1> 
      <Potato />     
    </div>
  );
}

export default App;
