import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './Main';
import * as serviceWorker from './serviceWorker';

class Index extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      login: 0,
      page: 0
    }
  };

  render(){
  	if(this.state.login==0){
  		return(<App />);
  	}

  	else{
  		return(<Main />);
  	}
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorker.unregister();
