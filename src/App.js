import React, { Component } from 'react'
import PostForm from './PostForm'
import AllPost from './AllPost'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navber">
          <h2 className="center">The Post</h2>
        </div>
        <PostForm />
        <AllPost />
        
      </div>
    );
  }
}

export default App;
