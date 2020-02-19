import React from 'react';

import { Loading } from './loading'

const serverUrl = 'https://server-for-faculty-dashboard.herokuapp.com/';

export class LeaveLog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			headerHtml: [],
			entriesHtml: []
		}
	}
	generateTableHeader() {
		let columns = ["Leave ID","Leave Type","Start Date","End Date","Reason","Status"];
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
				<td key={entries[i].leaveid}>{entries[i].leaveid}</td>
				<td key={entries[i].request_type}>{entries[i].request_type}</td>
				<td key={entries[i].startfrom.toString().slice(0,10)}>{entries[i].startfrom.toString().slice(0,10)}</td>
				<td key={entries[i].ends_on.toString().slice(0,10)}>{entries[i].ends_on.toString().slice(0,10)}</td>
				<td key={entries[i].reason}>{entries[i].reason}</td>
				<td key={entries[i].status}>{entries[i].status}</td>
			</tr>
			);
		}
		console.log(this.state.entriesHtml);
	}

	componentWillMount(){
		var data = {
			username: this.props.username,
			isHOD: this.props.isHOD
		}
		console.log(JSON.stringify(data));
		fetch(serverUrl+"leavelog",{
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
				this.setState({isLoaded: true});
			}
		})
	}

	render() {
		if(!this.state.isLoaded)
			// return "Loading...";
			return(
				<Loading />
			);
		else
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
	}
}