import React from 'react';
import './lms.css';
import { BrowserRouter as Router,Switch,Route,NavLink,Redirect } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'

import './bootstrap.css';

import { Apply } from './applyleave'
import { ApproveDecline } from './approvedecline'
import { LeaveLog } from './leavelog'
import { Loading } from './loading'

const serverUrl = 'https://server-for-faculty-dashboard.herokuapp.com/';
const Notfound = () => <h1>Not found</h1>

export default class LMS extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: this.props.facultyId,
			isHOD: false,
			isLoaded: false
		}
	}
	componentWillMount(){
		var data = {
			username: this.state.username
		}
		fetch(serverUrl+'verify',{
			method: 'POST',
			headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
			body: JSON.stringify(data)
		}).then( response=>{
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			}
			return response.json();
		}).then(data=>{
			if(data!=null)
			{
				data = JSON.parse(data);
				console.log(data);
				this.setState({isHOD: data.isHOD});
				this.setState({isLoaded: true},);
			}
		}).catch(err=>{
			console.log(err);
		})
	}
	render() {
		if(!this.state.isLoaded)
		{
			// return "Loading...";
			return(
				<Loading />
			);
		}
		else
		{
			return (
				<Router>
					<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="bottom">
						<Navbar.Brand href="#" >
							<NavLink className="navbarLinks" exact activeClassName="active" to="/leavelog">Leave Log</NavLink>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="ml-auto">
								{!this.state.isHOD && 
									<Nav.Link href="#" >
										<NavLink className="navbarLinks" activeClassName="active" to="/apply">Apply</NavLink>
									</Nav.Link>
								}				
								{this.state.isHOD &&
									<Nav.Link href="#" >
										<NavLink className="navbarLinks" activeClassName="active" to="/approvedecline">Approve/Decline</NavLink>
									</Nav.Link>
								}			
							</Nav>
						</Navbar.Collapse>
					</Navbar>
					<Redirect to="/leavelog" />
					<Switch>
						<Route exact path="/leavelog" render={() => <LeaveLog username={this.state.username} isHOD={this.state.isHOD}/>} />
						<Route path="/apply" render={() => <Apply username={this.state.username} isHOD={this.state.isHOD}/>} />
						<Route path="/approvedecline" render={() => <ApproveDecline username={this.state.username} isHOD={this.state.isHOD}/>} />
						<Route component={Notfound} />
					</Switch>
				</Router>
			);
		}
	}
}
