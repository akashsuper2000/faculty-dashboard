import React from 'react';
import ReactDOM from 'react-dom';

class UC extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			id: this.props.facultyId
		}
	}

  render(){
    return(
      <div style={{textAlign: 'center', alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
      <span style={{marginTop: 200, fontSize: 50, fontWeight: 'lighter'}}>Welcome {this.state.id}!</span>
      </div>
    );
  }
}


export default UC;