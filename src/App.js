import React from 'react';
import ReactDOM from 'react-dom';
import ReactPasswordStrength from 'react-password-strength';
import { ReCaptcha } from 'react-recaptcha-google';
import { loadReCaptcha } from 'react-recaptcha-google';
import { Loading } from './Components/loading.js';

import UC from './Components/uc.js';
import LMS from './Components/lms.js';
import ViewSchedule from './Components/ViewSchedule.jsx';
import ViewCoursePlan from './Components/ViewCoursePlan.jsx';
import Announcements from './Components/announcements.js';
import Profile from './Components/Profile.jsx';

import './bootstrap.css';
import './App.css';
import univlogo from './Components/univlogo.svg';


class App extends React.Component{

  componentDidMount(){
    loadReCaptcha();
    if (this.captchaDemo) {
      console.log('Captcha live!');
        this.captchaDemo.reset();
        this.captchaDemo.execute();
    }
    document.title = 'Faculty Dashboard';
    if (document.cookie.split(';').filter((item) => item.trim().startsWith('user=')).length) {
      var user = document.cookie.replace(/(?:(?:^|.*;\s*)user\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      this.setState({user: user});
      this.setState({login: 1});
    }
  }

  constructor(props){
    super(props);
    this.state = {
      page: 0,
      login: 0,
      user: 'User',
      name: 'Name',
      email: 'sefacultydashboard@gmail.com',
      dept: 'cse',
      loading: 0,
      //https://server-for-faculty-dashboard.herokuapp.com/
      sendurl: 'https://server-for-faculty-dashboard.herokuapp.com/'
    }
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  onLoadRecaptcha() {
      if (this.captchaDemo) {
          this.captchaDemo.reset();
          this.captchaDemo.execute();
      }
  }
  verifyCallback(recaptchaToken) {
    console.log(recaptchaToken)
  }

  handleLogin = (e) => {
    e.preventDefault();
    let self = this;
    self.setState({loading: 1});
    var data = {id: document.getElementsByName('id')[0].value,
    password: document.getElementsByName('password')[0].value};

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
        self.setState({user: data.res[0].id});
        self.setState({name: data.res[0].name});
        self.setState({dept: data.res[0].dept});
        self.setState({email: data.res[0].email});
        self.setState({login: 1});
        self.setState({loading: 0});
        document.cookie = 'user='+self.state.user;
        }
        else if(data.res.length == 0){
          console.log('Incorrect credentials!');
          alert('Incorrect credentials!');
          self.setState({loading: 0});
        }
        else{
          console.log('Failure');
          alert('Something went wrong, Try again later!');
          self.setState({loading: 0});
        }
    }).catch(function(err) {
        console.log(err);
    });
  }

  handleRegister = (e) => {
    e.preventDefault();
    let self = this;
    var data = {id: document.getElementsByName('id')[0].value,
    name: document.getElementsByName('name')[0].value,
    dept: document.getElementsByName('dept')[0].value,
    email: document.getElementsByName('email')[0].value,
    password: document.getElementsByName('password')[0].value};
    
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
    var data = {id: document.getElementsByName('id')[0].value};
    
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
      for(var i=0;i<e.target.parentNode.parentNode.children.length;i++){
        e.target.parentNode.parentNode.children[i].children[0].style.borderStyle = 'none';
      }
      e.target.style.borderStyle = 'solid';
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
      else if(value=='Logout'){
        this.setState({page: 0});
        this.setState({login: 0});
        document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      }
    }
  }

  render(){

    if(this.state.login==0){

    if(this.state.page==0){
      if(this.state.loading==0){
        return(

          <div className='Container'>

          <ReCaptcha
              ref={(el) => {this.captchaDemo = el;}}
              size="invisible"
              render="explicit"
              sitekey="6LdYqNoUAAAAAEABmZvNgKyUYxQsNLMRl2u0rx6R"
              onloadCallback={this.onLoadRecaptcha}
              verifyCallback={this.verifyCallback}
          />
          <div className='Box'>
            <img src={univlogo} className='Userloginlogo' alt='User' />
            <h1 className='Heads'>Login</h1>
            <div className='Content'>
            <form onSubmit={this.handleLogin}>

            <div className='FormGroup'>
            <input className='InputBoxes' name='id' placeholder='Faculty ID' required></input>
            <span className='Subheads' name='userinv' style={{visibility: 'collapse'}}>Enter a username!</span>
            </div>

            <div className='FormGroup'>
            <input className='InputBoxes' name='password' type='password' placeholder='Password' required></input>
            <span className='Subheads' name='passinv' style={{visibility: 'collapse'}}>Invalid password!</span>
            </div>

            <input className='btn-lg btn btn-default InputBoxes Select' type='submit' value='Login'/><br/>
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
      else{
        return (<Loading />);
      }
    }

    else if(this.state.page==1){
      return(

        <div className='Container'>

        <ReCaptcha
            ref={(el) => {this.captchaDemo = el;}}
            size="invisible"
            render="explicit"
            sitekey="6LdYqNoUAAAAAEABmZvNgKyUYxQsNLMRl2u0rx6R"
            onloadCallback={this.onLoadRecaptcha}
            verifyCallback={this.verifyCallback}
        />
        <div className='Box'>
        <img src={univlogo} className='Userloginlogo' alt='User' />
          <h1 className='Heads'>Register</h1>
          <div className='Content'>
          <form onSubmit={this.handleRegister}>

          <div className='FormGroup'>
          <input className='InputBoxes' name='id' placeholder='Faculty ID' required></input>
          <span className='Subheads' name='userinv' style={{visibility: 'collapse'}}>Enter a username!</span>
          </div>

          <div className='FormGroup'>
          <input className='InputBoxes' name='name' placeholder='Full Name' required></input>
          <span className='Subheads' name='userinv' style={{visibility: 'collapse'}}>Enter a username!</span>
          </div>

          <div className='FormGroup'>
          <select className='InputBoxes' name='dept' placeholder='Department' required>
            <option default value='cse'>CSE</option>
            <option value='ece'>ECE</option>
            <option value='eee'>EEE</option>
            <option value='mec'>MEC</option>
            <option value='cvl'>CVL</option>
            <option value='che'>CHE</option>
            <option value='aro'>ARO</option>
            <option value='sci'>SCI</option>
            <option value='eng'>ENG</option>
            <option value='mat'>MAT</option>
            <option value='asc'>ASC</option>
          </select>
          <span className='Subheads' name='userinv' style={{visibility: 'collapse'}}>Enter a username!</span>
          </div>

          <div className='FormGroup'>
          <input className='InputBoxes' name='email' placeholder='Email ID' title='Please enter a valid Email ID' pattern='^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$' required></input>
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
            inputProps={{ name: "password", title: 'Minimum length is 5', autoComplete: "off", className: "Passbox", placeholder: "Password", required: 'true', pattern: '^.{5}.*$' }}
          />
          </div>

          <input className='btn-lg btn btn-default InputBoxes Select' type='submit' value='Register'/><br/>
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

        <ReCaptcha
            ref={(el) => {this.captchaDemo = el;}}
            size="invisible"
            render="explicit"
            sitekey="6LdYqNoUAAAAAEABmZvNgKyUYxQsNLMRl2u0rx6R"
            onloadCallback={this.onLoadRecaptcha}
            verifyCallback={this.verifyCallback}
        />
        <div className='Box'>
        <img src={univlogo} className='Userloginlogo' alt='User' />
          <h1 className='Heads'>Forgot Password</h1>
          <div className='Content'>
          <form onSubmit={this.handleFP}>

          <div className='FormGroup'>
          <span className='Subheads' name='otp-thing'>Send the password to the registered Email ID?</span>
          <span className='Subheads' name='userinv' style={{visibility: 'collapse'}}>This is the header!</span>
          </div>
          <div className='FormGroup'>
          <input className='InputBoxes' name='id' placeholder='Faculty ID' required></input>
          <span className='Subheads' name='userinv' style={{visibility: 'collapse'}}>Enter a Username!</span>
          </div>
          <div className='FormGroup'>
          <input className='btn-lg btn btn-default InputBoxes Select' type='submit' value='Send'/><br/>
          </div>
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
      <div>
      <div style={{backgroundColor: 'black'}}>

      <div className='Container2'>
        <div className='row Topbar'>
        <div className='col-lg-2' onClick={this.handleChange} title={this.state.user}><span style={{borderStyle: 'solid'}} className='Navbut'>My Profile</span></div>
        <div className='col-lg-2' onClick={this.handleChange}><span className='Navbut'>Course Plan</span></div>
        <div className='col-lg-2' onClick={this.handleChange}><span className='Navbut'>Time Table</span></div>
        <div className='col-lg-2' onClick={this.handleChange}><span className='Navbut'>Announcements</span></div>
        <div className='col-lg-2' onClick={this.handleChange}><span className='Navbut'>Leave Management</span></div>
        <div className='col-lg-2' onClick={this.handleChange}><span className='Navbut'>Logout</span></div>
        </div>
      </div>

      </div>
      {this.state.page==0?(<Profile facultyId={this.state.user} name={this.state.name} dept={this.state.dept} email={this.state.email}/>):(
          this.state.page==1?(<ViewCoursePlan facultyId={this.state.user} />):(
            this.state.page==2?(<ViewSchedule facultyId={this.state.user} />):(
              this.state.page==3?(<Announcements facultyId={this.state.user} />):(
                this.state.page==4?(<LMS facultyId={this.state.user} />):(<UC facultyId={this.state.user} />)
      ))))}
      </div>

      );

  }

  }
}


export default App;