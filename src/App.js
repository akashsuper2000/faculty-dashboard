import React from 'react';
import ReactDOM from 'react-dom';
import ReactPasswordStrength from 'react-password-strength';
import './bootstrap.css';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      page: 0,
    }
  };

  handleLogin = (e) => {
    e.preventDefault();
    var data = {user: document.getElementsByName('username')[0].value,
    pass: document.getElementsByName('password')[0].value};

    console.log(JSON.stringify(data));
    fetch("http://localhost:5000/login", {
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
        // eslint-disable-next-line
        if(data == "success"){
        console.log('Success'); 
        }
    }).catch(function(err) {
        console.log(err);
    });
  }

  handleRegister = (e) => {
    e.preventDefault();
    var data = {user: document.getElementsByName('username')[0].value,
    email: document.getElementsByName('email')[0].value,
    pass: document.getElementsByName('password')[0].value};
    
    console.log(JSON.stringify(data));
    fetch("http://localhost:5000/register", {
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
        // eslint-disable-next-line
        if(data == "success"){
        console.log('Success'); 
        }
    }).catch(function(err) {
        console.log(err);
    });
  }

  handleFP = (e) => {
    e.preventDefault();
    var data = {send: "yes"};
    
    console.log(JSON.stringify(data));
    fetch("http://localhost:5000/fp", {
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
        // eslint-disable-next-line
        if(data == "success"){
        console.log('Success'); 
        }
    }).catch(function(err) {
        console.log(err);
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    console.log(e.target);
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

  render(){

    if(this.state.page==0){
      return(

        <div className='Container'>
        <div className='Box'>
          <h1 className='Heads'>Sign In</h1>
          <div className='Content'>
          <form onSubmit={this.handleLogin}>

          <div className='FormGroup'>
          <input className='InputBoxes' name='username' placeholder='Name' required></input>
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
          <input className='InputBoxes' name='username' placeholder='Name' required></input>
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
          <span className='Subheads' name='otp-thing'>Send the password to the registered &emsp; Email ID?</span>
          </div>

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
}


export default App;