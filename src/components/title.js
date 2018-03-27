import React, {Component} from 'react'

class Title extends Component{
  render(){
    return (
      <div id="title" className="row">
        <img id="logo" alt="Love.ly" src={require('../images/heart-flame.jpeg')} />
        <h1 className="App-title"><strong>Love.ly</strong></h1>
      </div>
    )
  }
}

export default Title
