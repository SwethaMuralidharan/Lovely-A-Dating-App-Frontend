import React, {Component} from 'react';

class AllUsers extends Component{
 constructor() {
   super();
   this.state = {
     allUsers: []
   }
 }
 componentDidMount() {
   fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users`).then((res) => {
     return res.json();
    }).then((json) => {
      this.setState({
        allUsers:json
      })
  });
}
render(){
  return ( <div className="allusers">
    {this.state.allUsers.map(eachUser => {
          return (
                  <div id="user-box" key={eachUser._id}>
                    <div className="user-pic">
                      {(eachUser.image_url==="")?
                      (<img className="imgwidth" src={'https://docs.moodle.org/26/en/images_en/7/7c/F1.png'} alt="ProfilePic" />)
                      :
                      (<img className="imgwidth" src={eachUser.image_url} alt="ProfilePic" />)}
                    </div>
                    <div className="card-body">
                          <h4>{eachUser.name}</h4>
                          <ul id="user-info">
                            <li>{eachUser.age}</li>
                            <li>{eachUser.gender}</li>
                            <li>{eachUser.location}</li>
                          </ul>
                          <a href={`home/${eachUser._id}`} className="btn btn-primary">Go to profile</a>
                    </div>
                  </div>

        )
      })}
    </div>
  );
 }
}
export default AllUsers;
