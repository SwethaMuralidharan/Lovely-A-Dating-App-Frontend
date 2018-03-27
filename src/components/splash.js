import React, {Component} from 'react'
import SignUp from './SignUp';

class Splash extends Component{
  render(){
    return (
      <div className="fullbody">
        <div className="splash-pic">
          <div id="signUp">
            <SignUp/>
          </div>
        </div>
      </div>
    )
  }
}

export default Splash
