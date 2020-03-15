import React from 'react';
import { Form, Col, Button } from 'react-bootstrap'
import { BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";

import { DatePickerFromTo } from './datepicker_fromto.js'
import { LeaveLog } from './leavelog'

const serverUrl = 'https://server-for-faculty-dashboard.herokuapp.com/'
// const serverUrl = 'http://localhost:5000/';
const Notfound = () => <h1>Not found</h1>
export class Apply extends React.Component {
	constructor(props) {
		super(props);
		this.formData = {
			leaveType: null,
			appliedby: this.props.username,
			startDate: null,
			endDate: null,
			reason: null,
		};
		this.state = {
			renderLeaveLog: false
		}
	}

	handleApplyForm = (e) => {
		e.preventDefault();
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

		
		console.log(typeof(this.formData.startDate),this.formData.startDate);

		if(!this.formData.startDate || !this.formData.endDate)
		{
			return alert("Enter Proper Dates");
		}
		var T = new Date();
		var S = this.formData.startDate;
		var E = this.formData.endDate;
		console.log(T);console.log(S);console.log(E);
		if(S.getTime()>E.getTime())
		{
			return alert("Improper Dates");
		}
		console.log(this.formData);

		fetch(serverUrl+"apply",{
			method: 'POST',
			headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
			body: JSON.stringify(this.formData)
		}).then( response=>{
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			}
			return response.json();
		}).then(data=>{
		}).catch(err=>{
			console.log(err);
		})
		alert("Leave Applied");

		this.setState({renderLeaveLog: true});
	}

	handlefromDate = (val) => {
		// val = new Date(val.toDateString());
		val.setDate(val.getDate()+1);
		this.formData.startDate = val;
	}
	handletoDate = (val) => {
		// val = new Date(val.toDateString());
		val.setDate(val.getDate()+1);
		this.formData.endDate = val;
	}

	render() {
		if(this.props.isHOD)
		{
			return "Only faculties can apply leave";
		}
		else if(this.state.renderLeaveLog)
		{
			return (
				<Router>
				<Redirect to='/leavelog' />
				<Switch>
						<Route exact path="/leavelog" render={() => <LeaveLog username={this.props.username} isHOD={this.props.isHOD}/>} />
						<Route component={Notfound} />
					</Switch>
				</Router>
			);
		}
		else
		{
			return (
				<div>
					<h3 className = 'leftAllignFormHeader'>Leave Application</h3>
					<Form className = "Form" onSubmit={this.handleApplyForm}>
						<fieldset>
							<Col>
							<Form.Group id="leaveType">
								<Form.Label className="formHeader" as="legend" >
									Type of Leave
								</Form.Label>
									<Form.Check
										type="radio"
										label="Casual"
										name="formHorizontalRadios"
										id="formHorizontalRadios1"
										value="Casual Leave"
									/>
									<Form.Check
										type="radio"
										label="Sick"
										name="formHorizontalRadios"
										id="formHorizontalRadios2"
										value="Sick Leave"
									/>
									<Form.Check
										type="radio"
										label="Privilege"
										name="formHorizontalRadios"
										id="formHorizontalRadios3"
										value="Privilege Leave"
									/>
							</Form.Group>
							</Col>
						</fieldset>

						<br></br>

						<Col>
							<span className="formHeaderspl">Enter Dates</span>
							<DatePickerFromTo fromDate={this.handlefromDate} toDate={this.handletoDate} />
						</Col>

						<br></br>
						<br></br>
						<Col>
							<Form.Group controlId="exampleForm.ControlTextarea1" value="reason">
								<Form.Label className="formHeader">Reason</Form.Label>
								<Form.Control as="textarea" rows="2" id="reason" />
							</Form.Group>
						</Col>

						<br></br>

						<Col>
							<Button variant="dark" type="submit">
								Apply
						</Button>
						</Col>
					</Form>
				</div>
			);
		}
	}
}
