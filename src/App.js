import React from 'react';

class App extends React.Component {
//state 정의
  state = {
    count: 0,
  }

//숫자 늘리고 줄이는 함수
add = () => {
  this.setState(current => ({count: current.count +1}));
};

minus = () => {
  this.setState(current => ({count: current.count -1}));
};

//렌더
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    )
  }
}

export default App;
