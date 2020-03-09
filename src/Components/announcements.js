import React from 'react';
import { Form, Col, Button } from 'react-bootstrap'

import { Loading } from './loading'

// const serverUrl = 'https://server-for-faculty-dashboard.herokuapp.com/';
const serverUrl = 'http://localhost:5000/'

export default class Announcements extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            isLoadedHOD: false,
            isLoadedAnn: false,
            username: this.props.facultyId,
            isHOD: false,
			headerHtml: [],
			entriesHtml: [],
			reRender: false
		}
		this.formData = {
			id: this.props.facultyId,
			announcedate: null,
			announce: null
		};
	}
	generateTableHeader() {
		let columns = ["Date","Announcements"];
		for(var i = 0;i<columns.length;i++)
		{
			var colh = columns[i];
			colh = colh[0].toUpperCase() + colh.slice(1);
			this.state.headerHtml.push(<th id={colh}>{colh}</th>)
		}
		console.log(this.state.headerHtml);
	}

	generateTableEntries(entries) {
		var rows = entries.length;
		for(var i = 0;i<rows;i++)
		{
			console.log(entries[i]);
			this.state.entriesHtml.push(
			<tr align="center" key={i} id={entries[i].status}>
				<td key={entries[i].announcedate.toString().slice(0,10)}>{entries[i].announcedate.toString().slice(0,10)}</td>
				<td key={entries[i].announce}>{entries[i].announce}</td>
			</tr>
			);
		}
		console.log(this.state.entriesHtml);
	}

	handleApplyForm = (e) => {
		e.preventDefault();
		this.formData.announce = document.getElementById("announcementtext").value;
		if(!this.formData.announce)
		{
			return alert("Enter Announcement Text");
		}

		var T = new Date();
		this.formData.announcedate = T;
		console.log(this.formData);

		fetch(serverUrl+"applyAnn",{
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
		alert("Announcement Sent");

		this.setState({reRender: true});
	}

    getAnn(){
        var data = {
			username: this.state.username
		}
		console.log(JSON.stringify(data));
		fetch(serverUrl+"announcements",{
			method: 'POST',
			headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
			body: JSON.stringify(data)
		}).then( response=>{
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			}
			return response.json();
		}).catch(err=>{
			console.log(err);
		}).then(data=>{
			this.setState({headerHtml: [],
						   entriesHtml: []});
			console.log(data);
			if(data!=null)
			{
				data = JSON.parse(data);
				this.generateTableHeader();
				this.generateTableEntries(data.entries);
				this.setState({isLoadedAnn: true});
			}
		})
    }

	componentWillMount(){
        // Get isHOD
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
				this.setState({isLoadedHOD: true});
				if(data.isHOD===false)
				{
					this.getAnn();
				}
			}
		}).catch(err=>{
			console.log(err);
		})
	}

	render() {
        if(!this.state.isLoadedHOD)
        {
			// return "Loading...";
			return(
				<Loading />
            );
        }
        else if(this.state.isHOD)
        {
			if(this.state.reRender)
			{
				return(
					<Announcements facultyId={this.state.username} />
				);
			}
			else
			{
				return (
					<div>
						<h3 className = 'leftAllignFormHeader'>Make Announcement</h3>
						<Form className = "Form" onSubmit={this.handleApplyForm}>
							
							<br></br>

							<Col>
								<Form.Group controlId="exampleForm.ControlTextarea1" value="announcementtext">
									<Form.Label className="formHeader">Announcement Text</Form.Label>
									<Form.Control as="textarea" rows="2" id="announcementtext" />
								</Form.Group>
							</Col>

							<br></br>

							<Col>
								<Button variant="primary" type="submit">
									Announce
							</Button>
							</Col>
						</Form>
					</div>
				);
			}
        }
		else //not HOD
		{
            if(this.state.isLoadedAnn)
            {    
                console.log(this.state.entriesHtml);
                return (
                    <div id='tableallign'>
                        <table className="table tabel-hover">
                            <thead class="thead-light" align="center">
                                <tr>
                                    {this.state.headerHtml}
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.entriesHtml	}
                            </tbody>
                        </table>
                    </div>
                );
            }
            else
            {
                return(
                    <Loading />
                );
            }
		}
	}
}