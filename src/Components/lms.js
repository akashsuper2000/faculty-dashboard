import React from 'react';
import ReactDOM from 'react-dom';
import './lms.css';
// import App from './App';
import { BrowserRouter as Router,Switch,Route,NavLink } from "react-router-dom";
import { Navbar, Nav, Form, Button, Col } from 'react-bootstrap'
import { DatePickerFromTo } from './datepicker_fromto.js'
import '../bootstrap.css';

const Notfound = () => <h1>Not found</h1>

class LeaveLog extends React.Component {
	render() {
		return (
			<div>
				<p>Leave Log comes here</p>
			</div>
		);
	}
}

class Apply extends React.Component {
	constructor(props) {
		super(props);
		this.formData = {
			leaveType: null,
			startDate: null,
			endDate: null,
			reason: null,
		};
		this.today = new Date();
	}

	handleApplyForm = (e) => {
		e.preventDefault();
		let self = this;
		let valid = false;
		var leaveTypeRadio = document.getElementsByName("formHorizontalRadios");
		for (var i = 0; i < leaveTypeRadio.length; i++) {
			if (leaveTypeRadio[i].checked) {
				this.formData.leaveType = leaveTypeRadio[i].value;
				valid = true;
			}
		}
		this.formData.reason = document.getElementById("reason").value;
		
		if(!valid)
		{
			return alert("Select leave type"); 
		}
		if(!this.formData.reason)
		{
			return alert("Enter Reason");
		}
		var Strtoday =  self.today.getDate()+'/'+(self.today.getMonth()+1)+'/'+self.today.getFullYear();
		self.today = Strtoday;

		if(!this.formData.startDate || !this.formData.endDate)
		{
			return alert("Enter Dates");
		}
		var T = new Date(self.today);
		var S = new Date(this.formData.startDate);
		var E = new Date(this.formData.endDate);
		console.log(T);console.log(S);console.log(E);
		if(S<T || S>E)
		{
			return alert("Improper Dates");
		}
		alert("Im pausing, check log!");
		console.log(this.formData);
	}
	handlefromDate = (val) => {
		this.formData.startDate = val;
	}
	handletoDate = (val) => {
		this.formData.endDate = val;
	}

	render() {
		return (
			<div>
				<Form onSubmit={this.handleApplyForm}>
					<fieldset>
						<Col>
						<Form.Group id="leaveType">
							<Form.Label as="legend" column sm={2} >
								Type of Leave
							  </Form.Label>
								<Form.Check
									type="radio"
									label="Casual Leave"
									name="formHorizontalRadios"
									id="formHorizontalRadios1"
									value="CL"
								/>
								<Form.Check
									type="radio"
									label="Sick Leave"
									name="formHorizontalRadios"
									id="formHorizontalRadios2"
									value="SL"
								/>
								<Form.Check
									type="radio"
									label="Privilege Leave"
									name="formHorizontalRadios"
									id="formHorizontalRadios3"
									value="PL"
								/>
							
						</Form.Group>
						</Col>
					</fieldset>

					<br></br>

					<Col>
						<span>Enter Dates</span>
						<DatePickerFromTo fromDate={this.handlefromDate} toDate={this.handletoDate} />
					</Col>

					<br></br>

					<Col>
						<Form.Group controlId="exampleForm.ControlTextarea1" value="reason">
							<Form.Label>Reason</Form.Label>
							<Form.Control as="textarea" rows="2" id="reason" />
						</Form.Group>
					</Col>

					<br></br>

					<Col>
						<Button variant="primary" type="submit">
							Apply
					  </Button>
					</Col>
				</Form>
			</div>
		);
	}
}

class ApproveDecline extends React.Component {
	render() {
		return (
			<div>
				<p>Leave Request Table Comes Here</p>
			</div>
		);
	}
}

class LMS extends React.Component {
	render() {
		console.log("Page Load Started");
		return (
			<Router>
				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
					<Navbar.Brand href="#" >
						<NavLink exact activeClassName="active" to="/">Leave Log</NavLink>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#" >
								<NavLink activeClassName="active" to="/apply">Apply</NavLink>
							</Nav.Link>
							<Nav.Link href="#" >
								<NavLink activeClassName="active" to="/approvedecline">Approve/Decline</NavLink>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Switch>
					<Route exact path="/" component={LeaveLog} />
					<Route path="/apply" component={Apply} />
					<Route path="/approvedecline" component={ApproveDecline} />
					<Route component={Notfound} />
				</Switch>
			</Router>
		);
	}
}

export default LMS;