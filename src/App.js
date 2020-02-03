import React from 'react';
import ReactDOM from 'react-dom';
import ReactPasswordStrength from 'react-password-strength';
import './bootstrap.css';
import './App.css';
import user from './Components/user.svg';
import UC from './Components/uc.js';

import LMS from './Components/lms.js';

class App extends React.Component{

  componentDidMount(){
    document.title = 'Faculty Dashboard';
  }

  constructor(props){
    super(props);
    this.state = {
      page: 0,
      login: 0,
      user: 'User',
      sendurl: 'https://server-for-faculty-dashboard.herokuapp.com/'
    }
  }

  handleLogin = (e) => {
    e.preventDefault();
    let self = this;
    var data = {user: document.getElementsByName('username')[0].value,
    pass: document.getElementsByName('password')[0].value};

    console.log(JSON.stringify(data));
    fetch(self.state.sendurl+"login", {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        body: JSON.stringify(data)
    }).then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        console.log(data);
        data = JSON.parse(data); 
        if(data.res.length == 1){
        console.log('Success');
        self.setState({user: document.getElementsByName('username')[0].value});
        self.setState({login: 1});
        }
        else if(data.res.length == 0){
          console.log('Incorrect credentials!');
          alert('Incorrect credentials!');
        }
        else{
          console.log('Failure');
          alert('Something went wrong, Try again later!');
        }
    }).catch(function(err) {
        console.log(err);
    });
  }

  handleRegister = (e) => {
    e.preventDefault();
    let self = this;
    var data = {user: document.getElementsByName('username')[0].value,
    email: document.getElementsByName('email')[0].value,
    pass: document.getElementsByName('password')[0].value};
    
    console.log(JSON.stringify(data));
    fetch(self.state.sendurl+"register", {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        body: JSON.stringify(data)
    }).then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        console.log(data);
        data = JSON.parse(data);  
        if(data.res.length == 1){
        console.log('Account already exists!');
        alert('Account already exists!');
        }
        else if(data.res.affectedRows == 1){
          console.log('Success');
          alert('Account successfully created!');
        }
        else{
          console.log('Failure');
          alert('Something went wrong, Try again later!');
        }
    }).catch(function(err) {
        console.log(err);
    });
  }

  handleFP = (e) => {
    e.preventDefault();
    let self = this;
    var data = {user: document.getElementsByName('username')[0].value};
    
    console.log(JSON.stringify(data));
    fetch(self.state.sendurl+"fp", {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        body: JSON.stringify(data)
    }).then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        console.log(data);
        data = JSON.parse(data);
        if(data.res == 1){
        console.log('Success');
        alert('Password sent to your Email ID!');
        }
        else if(data.res == 0){
          alert('Account does not exist!');
        }
    }).catch(function(err) {
        console.log(err);
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    if(this.state.login==0){
      if(e.target.value=='Register'){
        this.setState({page: 1});
      }
      else if(e.target.value=='Forgot Password?'){
        this.setState({page: 2});
      }
      else{
        this.setState({page: 0});
      }
    }
    else{
      var value = e.target.innerHTML.split(' ')[0];
      for(var i=0;i<e.target.parentNode.children.length;i++){
        e.target.parentNode.children[i].style.fontSize = 'medium';
        e.target.parentNode.children[i].style.fontWeight = 'normal';
      }
      e.target.style.fontSize = 'large';
      e.target.style.fontWeight = 'bold';
      if(value=='My'){
        this.setState({page: 0});
      }
      else if(value=='Course'){
        this.setState({page:1});
      }
      else if(value=='Time'){
        this.setState({page: 2});
      }
      else if(value=='Announcements'){
        this.setState({page: 3});
      }
      else if(value=='Leave'){
        this.setState({page: 4});
      }
      else{
        this.setState({page: 0});
        this.setState({login: 0});
      }
    }
  }

  render(){

    if(this.state.login==0){

    if(this.state.page==0){
      return(

        <div className='Container'>
        <div className='Box'>
          <h1 className='Heads'>Sign In</h1>
          <div className='Content'>
          <form onSubmit={this.handleLogin}>

          <div className='FormGroup'>
          <input className='InputBoxes' name='username' placeholder='Username' required></input>
          <span className='Subheads' name='userinv' style={{visibility: 'collapse'}}>Enter a username!</span>
          </div>

          <div className='FormGroup'>
          <input className='InputBoxes' name='password' type='password' placeholder='Password' required></input>
          <span className='Subheads' name='passinv' style={{visibility: 'collapse'}}>Invalid password!</span>
          </div>

          <input className='btn-lg btn btn-default' type='submit' value='Login'/><br/>
          <div className='FormGroup'>
          <input className='btn-md btn btn-default Smbtn' value='Register' onClick={this.handleChange}/>
          <input className='btn-md btn btn-default Smbtn' value='Forgot Password?' onClick={this.handleChange}/>
          </div>
          </form>       
              
          </div>
        </div>
        </div>

      );
    }

    else if(this.state.page==1){
      return(

        <div className='Container'>
        <div className='Box'>
          <h1 className='Heads'>Register</h1>
          <div className='Content'>
          <form onSubmit={this.handleRegister}>

          <div className='FormGroup'>
          <input className='InputBoxes' name='username' placeholder='Username' required></input>
          <span className='Subheads' name='userinv' style={{visibility: 'collapse'}}>Enter a username!</span>
          </div>

          <div className='FormGroup'>
          <input className='InputBoxes' name='email' placeholder='Email ID' pattern='^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$' required></input>
          <span className='Subheads' name='userinv' style={{visibility: 'collapse'}}>Enter an Email!</span>
          </div>

          <div className='FormGroup'>
          <ReactPasswordStrength
            className="FormGroup"
            style={{border: 0}}
            minLength={5}
            minScore={2}
            scoreWords={['Weak', 'Okay', 'Good', 'Strong', 'Stronger']}
            tooShortWord={'Too short'}
            inputProps={{ name: "password", autoComplete: "off", className: "Passbox", placeholder: "Password", required: 'true', pattern: '^.{5}.*$' }}
          />
          </div>

          <input className='btn-lg btn btn-default' type='submit' value='Register'/><br/>
          <div className='FormGroup'>
          <input className='btn-md btn btn-default Smbtn' value='Login' onClick={this.handleChange}/>
          <input className='btn-md btn btn-default Smbtn' value='Forgot Password?' onClick={this.handleChange}/>
          </div>
          </form>       
              
          </div>
        </div>
        </div>

      );
    }

    else{
      return(

        <div className='Container'>
        <div className='Box'>
          <h1 className='Heads'>Forgot Password</h1>
          <div className='Content'>
          <form onSubmit={this.handleFP}>

          <div className='FormGroup'>
          <span className='Subheads' name='otp-thing'>Send the password to the registered Email ID?</span>
          </div>
          <input className='InputBoxes' name='username' placeholder='Username' required></input>
          <input className='btn-lg btn btn-default' type='submit' value='Send'/><br/>
          <div className='FormGroup'>
          <input className='btn-md btn btn-default Smbtn' value='Login' onClick={this.handleChange}/>
          <input className='btn-md btn btn-default Smbtn' value='Register' onClick={this.handleChange}/>
          </div>
          </form>       
              
          </div>
        </div>
        </div>

      );
    }
  }

  else{

    return(

      <div className='Container2'>

      <div>
        <div className='row Topbar'>
        <div className='col-lg-2 Navbut' style={{fontWeight: 'bold', fontSize: 'large'}} onClick={this.handleChange}>My Profile</div>
        <div className='col-lg-2 Navbut' onClick={this.handleChange}>Course Handled</div>
        <div className='col-lg-2 Navbut' onClick={this.handleChange}>Time Table</div>
        <div className='col-lg-2 Navbut' onClick={this.handleChange}>Announcements</div>
        <div className='col-lg-2 Navbut' onClick={this.handleChange}>Leave Management</div>
        <div className='col-lg-2 Navbut' onClick={this.handleChange}> Logout <img src={user} className='User-logo' alt='User' /></div>
        </div>
        <hr/>
        {this.state.page==0?(<UC />):(
          this.state.page==1?(<UC />):(
            this.state.page==2?(<UC />):(
              this.state.page==3?(<UC />):(
                this.state.page==4?(<LMS />):(
                  <UC />
          )))))}
      </div>

      </div>

      );

  }

  }
}


export default App;