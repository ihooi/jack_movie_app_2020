import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

// 렌더 이후 이걸 호출해서 타임아웃 함수를 써서 isLoading을 false로 바꿔.. 언제? 3초뒤에
  componentDidMount() {
    setTimeout(() =>{
      this.setState({isLoading: false});
    }, 3000);
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }
}

export default App;
