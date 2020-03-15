import React, { Component } from 'react';
import './bootstrap.css';
import './Profile.css';


class Profile extends Component {
    state = { 
        id : this.props.facultyId,
        emailId:this.props.email,
        name:this.props.name,
        dept:this.props.dept,
     }

    componentDidMount(){
        console.log(this.state);
        var dept = this.state.dept;
        dept = dept.toUpperCase();
        this.setState({dept: dept});
        if(this.state.id!='cb.en.cse001'&&this.state.id!='cb.en.cse002'&&this.state.id!='cb.en.cse044'&&this.state.id!='cb.en.cse046'&&this.state.id!='cb.en.cse120')
         {
             console.log("dh")
             this.setState({id:'sample'});
         }
     }
    
    render() { 
 
        return ( 
            <div>
                <section class="hero-section spad">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-10 offset-xl-1">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="hero-text">
                                        <h2>{this.state.name}</h2>
                                    </div>
                                    <div class="hero-info">
                                        <h2>General Info</h2>
                                        <ul>
                                            <li><span>Faculty Id</span>{this.state.id}</li>
                                            <li><span>Department</span>{this.state.dept}</li>
                                            <li><span>E-mail</span>{this.state.emailId}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <figure class="hero-image">
                                        <img src={`https://seschedule.s3.amazonaws.com/P${this.state.id}.jpg`} alt="Img not updated" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            </section>
            </div>
         );
    }
}
 
export default Profile;