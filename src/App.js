import React, { Component } from 'react';
import { Provider } from 'react-redux';
import LessonList from './components/LessonList';
import Video from './components/Video';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Video />
        <LessonList />
      </Provider>
    );
  }
}

export default App;
