import React from 'react';

function Food ({ fav }){    // function명은 대문자로 시작한다. 소괄호 안에 대괄호로 Props 정의
  return <h3>I like {fav} </h3>;   //끝에 ; 잊지말자
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
       <Food fav="bap" />  //끝에 한칸띄고 슬래시 잊지말자
    </div>
  );
}

export default App;
