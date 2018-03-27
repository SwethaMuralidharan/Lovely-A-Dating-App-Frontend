import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class SignUp extends Component {
  constructor() {
    super();
		this.state = {
			name: '',
			image_url: '',
      gender: '',
      age: '',
      description:'',
      location: ''
		}
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    if(this.state.name==='' || this.state.age==='' || this.state.location==='' || this.state.gender==='' || this.state.description===''){
      alert("Please provide all information to signup.")
    }
    else{
      fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.name,
          age: this.state.age,
          location: this.state.location,
          image_url: this.state.image_url,
          gender: this.state.gender,
          description: this.state.description
          })
        }).then((res) => {
          return res.json()
        }).then((json) => {
          this.props.history.push('/profiles');
        })
    }
  }

  render() {
    return(
      <form >
        <br />
        <h3>Sign Up To Find Your Match!</h3>
        <div id="signup_form">
        <label>Username:</label>
        <input placeholder= 'Username'
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value})}
        />
        <br />
        <label>Picture URL:</label>
        <input placeholder= 'Pic URL'
          value={this.state.image_url}
          onChange={e => this.setState({ image_url: e.target.value})}
        />
        <br />
        <label>Gender:</label>
        <input placeholder= 'Gender'
          value={this.state.gender}
          onChange={e => this.setState({ gender: e.target.value})}
        />
        <br />
        <label>Age:</label>
        <input placeholder= 'Age'
          value={this.state.age}
          onChange={e => this.setState({ age: e.target.value})}
        />
        <br />
        <label>Description:</label>
        <input placeholder= 'Describe yourself'
          value={this.state.description}
          onChange={e => this.setState({ description: e.target.value})}
        />
        <br />
        <label>Location:</label>
        <input placeholder= 'Location'
          value={this.state.location}
          onChange={e => this.setState({ location: e.target.value})}
        />
        <br />
        </div>
        <button className="btn btn-primary" onClick={e => this.onSubmit(e)}>Submit</button>
      </form>

    );
  }

}

export default withRouter(SignUp);
