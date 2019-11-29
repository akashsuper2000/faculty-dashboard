import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './bootstrap.css';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      user: 'admin',
      pass: 'password',
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render(){
    return(

      <div className='Container'>
      <div className='Box'>
        <h1 className='Heads'>Login</h1>
        <div className='Content'>
        <form>

        <div className='FormGroup'>
        <input className='InputBoxes' name='username' placeholder='Name'></input>
        <span className='Subheads' name='userinv' style={{visibility: 'collapse'}}>Enter a username!</span>
        </div>

        <div className='FormGroup'>
        <input className='InputBoxes' name='password' type='password' placeholder='Password'></input>
        <span className='Subheads' name='passinv' style={{visibility: 'collapse'}}>Invalid password!</span>
        </div>

        </form>       
            
        </div>
      </div>
      </div>

    );
  }
}


export default App;