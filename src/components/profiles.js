import React, {Component} from 'react';

class Profiles extends Component{
 constructor() {
   super();

   this.state = {
     allUsers: [],
     allMatches: []
   }
  this.getMatches=this.getMatches.bind(this);
 }
 getMatches(){
   fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users`).then((res) => {
     return res.json();
   }).then((json) => {
     let currentUserId = this.props.userId;
     let currentUser = json.find((userObj) => {
       return userObj._id === currentUserId;
     });
     let matchUserIds = currentUser.matches.map((eachMatch) => {return eachMatch.user_id});

     let currentuserremovedjson = json.filter((user)=>{
       return user!==currentUser
     })

     let allMatchesforoneUser = json.filter((user) => {
        return matchUserIds.indexOf(user._id) !== -1;
      })
     console.log(allMatchesforoneUser);
     this.setState({
       allUsers: currentuserremovedjson,
       allMatches: allMatchesforoneUser
     })
   });
 }

 componentDidMount() {
    this.getMatches();
 }

 componentWillReceiveProps(nextProps) {
  if(nextProps.showMatches){
    this.getMatches();
  }
 }

 render(){
   let users = this.props.showMatches ? this.state.allMatches : this.state.allUsers;
   if(this.props.showMatches && this.state.allMatches.length===0){
     return (
       <div className="center_form">
         <h4 className="displayNull"> Sorry. No Matches found yet. Keep looking.!</h4>
       </div>
     )
   }
   else{
     return ( <div>
       {users.map(eachUser => {
             return (
                     <div id="user-box" key={eachUser._id} className="card">
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
                         <a href={`/home/${eachUser._id}`} className="btn btn-primary">Go to profile</a>
                       </div>
                     </div>

         )})}
     </div>
   );
   }


 }
}
export default Profiles;
