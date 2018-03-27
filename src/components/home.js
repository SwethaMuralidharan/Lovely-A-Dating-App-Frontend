import React, {Component} from 'react';
import User from './user.js';
import Title from './title.js';
import Filters from './filters.js';
import Profiles from './profiles.js';

class Home extends Component{
  constructor(){
    super();
    this.state={
      matchesShown: false
    }
      this.displaymatches=this.displaymatches.bind(this);
      this.displayEveryone=this.displayEveryone.bind(this);
      this.deleteUser=this.deleteUser.bind(this);
  }
  displaymatches(){
    this.setState({
      matchesShown:true
    })
  }
  displayEveryone(){
    this.setState({
      matchesShown:false
    })
  }
  deleteUser(){
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users/${this.props.match.params.user_id}`,
    {
      method: 'delete'
    }).then((response) => {
    });
    this.props.history.push('/');
  }
  render(){
    return (
      <div className="App allusers">
        <div className="row">
          <div className="col-md-6">
            <User user_id={this.props.match.params.user_id} onDeleteClick={this.deleteUser} />
          </div>
          <div className="col-md-6">
            <Title/>
            <Filters onClickSeeMatches={this.displaymatches} onClickSeeEveryone={this.displayEveryone} user_id={this.props.match.params.user_id}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Profiles userId={ this.props.match.params.user_id } showMatches={ this.state.matchesShown }/>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
