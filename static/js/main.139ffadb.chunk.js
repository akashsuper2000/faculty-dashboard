(this["webpackJsonpfaculty-dashboard"]=this["webpackJsonpfaculty-dashboard"]||[]).push([[0],{44:function(e,a,t){},52:function(e,a,t){e.exports=t.p+"static/media/user.5e946c20.svg"},62:function(e,a,t){e.exports=t(89)},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},89:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(22),l=t.n(r),s=(t(67),t(13)),c=t(16),i=t(14),m=t(12),u=t(11),d=t(17),p=t(51),h=t.n(p),f=(t(44),t(68),t(52)),g=t.n(f),v=(t(69),t(26)),b=t(19),E=t(94),y=t(55),N=t(92),D=t(93),C=t(95),O=t(29),k=t.n(O),S=t(53),w=t.n(S),F=t(40),j=t.n(F),T=(t(85),t(25)),L=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(i.a)(a).call(this,e))).handleFromChange=t.handleFromChange.bind(Object(m.a)(t)),t.handleToChange=t.handleToChange.bind(Object(m.a)(t)),t.state={from:void 0,to:void 0},t.today=new Date,t}return Object(d.a)(a,e),Object(u.a)(a,[{key:"showFromMonth",value:function(){var e=this.state,a=e.from,t=e.to;a&&k()(t).diff(k()(a),"months")<2&&this.to.getDayPicker().showMonth(a)}},{key:"handleFromChange",value:function(e){if(this.setState({from:e}),console.log(e),void 0!==e){var a=new Date(e);a=a.getDate()+"/"+(a.getMonth()+1)+"/"+a.getFullYear(),console.log(a),this.props.fromDate(a)}}},{key:"handleToChange",value:function(e){if(null==this.state.from)return alert("from is null"),console.log(document.getElementsByTagName("input")[4]),document.getElementsByTagName("input")[4].value="",void console.log(document.getElementsByTagName("input")[4].value);if(this.setState({to:e},this.showFromMonth),console.log(e),void 0!==e){var a=new Date(e);a=a.getDate()+"/"+(a.getMonth()+1)+"/"+a.getFullYear(),console.log(a),this.props.toDate(a)}}},{key:"render",value:function(){var e=this,a=this.state,t=a.from,n=a.to,r={start:t,end:n};return o.a.createElement("div",{className:"InputFromTo"},o.a.createElement(j.a,{id:"FROMFROM",min:this.today,value:t,placeholder:"From",format:"LL",formatDate:T.formatDate,parseDate:T.parseDate,dayPickerProps:{selectedDays:[t,{from:t,to:n}],disabledDays:{before:this.today,after:n},toMonth:n,modifiers:r,numberOfMonths:2,onDayClick:function(){e.to.getInput().focus(),e.handleFromChange()}},onDayChange:this.handleFromChange})," ","\u2014"," ",o.a.createElement("span",{className:"InputFromTo-to"},o.a.createElement(j.a,{id:"TOTO",min:this.today,ref:function(a){return e.to=a},value:n,placeholder:"To",format:"LL",formatDate:T.formatDate,parseDate:T.parseDate,dayPickerProps:{selectedDays:[t,{from:t,to:n}],disabledDays:{before:t},modifiers:r,month:t,fromMonth:t,numberOfMonths:2},onDayChange:this.handleToChange})),o.a.createElement(w.a,null,o.a.createElement("style",null,"\n  .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {\n    background-color: #f0f8ff !important;\n    color: #4a90e2;\n  }\n  .InputFromTo .DayPicker-Day {\n    border-radius: 0 !important;\n  }\n  .InputFromTo .DayPicker-Day--start {\n    border-top-left-radius: 50% !important;\n    border-bottom-left-radius: 50% !important;\n  }\n  .InputFromTo .DayPicker-Day--end {\n    border-top-right-radius: 50% !important;\n    border-bottom-right-radius: 50% !important;\n  }\n  .InputFromTo .DayPickerInput-Overlay {\n    width: 550px;\n  }\n  .InputFromTo-to .DayPickerInput-Overlay {\n    margin-left: -198px;\n  }\n")))}}]),a}(o.a.Component),P=function(){return o.a.createElement("h1",null,"Not found")},B=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",null,"Leave Log comes here"))}}]),a}(o.a.Component),I=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(i.a)(a).call(this,e))).handleApplyForm=function(e){e.preventDefault();for(var a=Object(m.a)(t),n=!1,o=document.getElementsByName("formHorizontalRadios"),r=0;r<o.length;r++)o[r].checked&&(t.formData.leaveType=o[r].value,n=!0);if(t.formData.reason=document.getElementById("reason").value,!n)return alert("Select leave type");if(!t.formData.reason)return alert("Enter Reason");var l=a.today.getDate()+"/"+(a.today.getMonth()+1)+"/"+a.today.getFullYear();if(a.today=l,!t.formData.startDate||!t.formData.endDate)return alert("Enter Dates");var s=new Date(a.today),c=new Date(t.formData.startDate),i=new Date(t.formData.endDate);if(console.log(s),console.log(c),console.log(i),c<s||c>i)return alert("Improper Dates");alert("Im pausing, check log!"),console.log(t.formData)},t.handlefromDate=function(e){t.formData.startDate=e},t.handletoDate=function(e){t.formData.endDate=e},t.formData={leaveType:null,startDate:null,endDate:null,reason:null},t.today=new Date,t}return Object(d.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(E.a,{onSubmit:this.handleApplyForm},o.a.createElement("fieldset",null,o.a.createElement(y.a,null,o.a.createElement(E.a.Group,{id:"leaveType"},o.a.createElement(E.a.Label,{as:"legend",column:!0,sm:2},"Type of Leave"),o.a.createElement(E.a.Check,{type:"radio",label:"Casual Leave",name:"formHorizontalRadios",id:"formHorizontalRadios1",value:"CL"}),o.a.createElement(E.a.Check,{type:"radio",label:"Sick Leave",name:"formHorizontalRadios",id:"formHorizontalRadios2",value:"SL"}),o.a.createElement(E.a.Check,{type:"radio",label:"Privilege Leave",name:"formHorizontalRadios",id:"formHorizontalRadios3",value:"PL"})))),o.a.createElement("br",null),o.a.createElement(y.a,null,o.a.createElement("span",null,"Enter Dates"),o.a.createElement(L,{fromDate:this.handlefromDate,toDate:this.handletoDate})),o.a.createElement("br",null),o.a.createElement(y.a,null,o.a.createElement(E.a.Group,{controlId:"exampleForm.ControlTextarea1",value:"reason"},o.a.createElement(E.a.Label,null,"Reason"),o.a.createElement(E.a.Control,{as:"textarea",rows:"2",id:"reason"}))),o.a.createElement("br",null),o.a.createElement(y.a,null,o.a.createElement(N.a,{variant:"primary",type:"submit"},"Apply"))))}}]),a}(o.a.Component),R=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",null,"Leave Request Table Comes Here"))}}]),a}(o.a.Component),x=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return console.log("Page Load Started"),o.a.createElement(v.a,null,o.a.createElement(D.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},o.a.createElement(D.a.Brand,{href:"#"},o.a.createElement(v.b,{exact:!0,activeClassName:"active",to:"/"},"Leave Log")),o.a.createElement(D.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(D.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(C.a,{className:"mr-auto"},o.a.createElement(C.a.Link,{href:"#"},o.a.createElement(v.b,{activeClassName:"active",to:"/apply"},"Apply")),o.a.createElement(C.a.Link,{href:"#"},o.a.createElement(v.b,{activeClassName:"active",to:"/approvedecline"},"Approve/Decline"))))),o.a.createElement(b.c,null,o.a.createElement(b.a,{exact:!0,path:"/",component:B}),o.a.createElement(b.a,{path:"/apply",component:I}),o.a.createElement(b.a,{path:"/approvedecline",component:R}),o.a.createElement(b.a,{component:P})))}}]),a}(o.a.Component),M=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(i.a)(a).call(this,e))).handleLogin=function(e){e.preventDefault();var a=Object(m.a)(t),n={user:document.getElementsByName("username")[0].value,pass:document.getElementsByName("password")[0].value};console.log(JSON.stringify(n)),fetch("https://server-for-faculty-dashboard.herokuapp.com:5000/login",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(n)}).then((function(e){if(e.status>=400)throw new Error("Bad response from server");return e.json()})).then((function(e){console.log(e),1==(e=JSON.parse(e)).res.length?(console.log("Success"),a.setState({user:document.getElementsByName("username")[0].value}),a.setState({login:1})):console.log("Failure")})).catch((function(e){console.log(e)}))},t.handleRegister=function(e){e.preventDefault();var a={user:document.getElementsByName("username")[0].value,email:document.getElementsByName("email")[0].value,pass:document.getElementsByName("password")[0].value};console.log(JSON.stringify(a)),fetch("https://server-for-faculty-dashboard.herokuapp.com:5000/register",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(a)}).then((function(e){if(e.status>=400)throw new Error("Bad response from server");return e.json()})).then((function(e){console.log(e),1==(e=JSON.parse(e)).res.affectedRows?console.log("Success"):console.log("Failure")})).catch((function(e){console.log(e)}))},t.handleFP=function(e){e.preventDefault();var a={user:document.getElementsByName("username")[0].value};console.log(JSON.stringify(a)),fetch("https://server-for-faculty-dashboard.herokuapp.com:5000/fp",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(a)}).then((function(e){if(e.status>=400)throw new Error("Bad response from server");return e.json()})).then((function(e){console.log(e),"success"==e&&console.log("Success")})).catch((function(e){console.log(e)}))},t.handleChange=function(e){if(e.preventDefault(),console.log(e.target),0==t.state.login)"Register"==e.target.value?t.setState({page:1}):"Forgot Password?"==e.target.value?t.setState({page:2}):t.setState({page:0});else{var a=e.target.innerHTML.split(" ")[0];"My"==a?t.setState({page:0}):"Course"==a?t.setState({page:1}):"Time"==a?t.setState({page:2}):"Announcements"==a?t.setState({page:3}):"Leave"==a?t.setState({page:0}):(t.setState({page:0}),t.setState({login:0}))}},t.state={page:0,login:1,user:"User"},t}return Object(d.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){document.title="Faculty Dashboard"}}]),Object(u.a)(a,[{key:"render",value:function(){return 0==this.state.login?0==this.state.page?o.a.createElement("div",{className:"Container"},o.a.createElement("div",{className:"Box"},o.a.createElement("h1",{className:"Heads"},"Sign In"),o.a.createElement("div",{className:"Content"},o.a.createElement("form",{onSubmit:this.handleLogin},o.a.createElement("div",{className:"FormGroup"},o.a.createElement("input",{className:"InputBoxes",name:"username",placeholder:"Username",required:!0}),o.a.createElement("span",{className:"Subheads",name:"userinv",style:{visibility:"collapse"}},"Enter a username!")),o.a.createElement("div",{className:"FormGroup"},o.a.createElement("input",{className:"InputBoxes",name:"password",type:"password",placeholder:"Password",required:!0}),o.a.createElement("span",{className:"Subheads",name:"passinv",style:{visibility:"collapse"}},"Invalid password!")),o.a.createElement("input",{className:"btn-lg btn btn-default",type:"submit",value:"Login"}),o.a.createElement("br",null),o.a.createElement("div",{className:"FormGroup"},o.a.createElement("input",{className:"btn-md btn btn-default Smbtn",value:"Register",onClick:this.handleChange}),o.a.createElement("input",{className:"btn-md btn btn-default Smbtn",value:"Forgot Password?",onClick:this.handleChange})))))):1==this.state.page?o.a.createElement("div",{className:"Container"},o.a.createElement("div",{className:"Box"},o.a.createElement("h1",{className:"Heads"},"Register"),o.a.createElement("div",{className:"Content"},o.a.createElement("form",{onSubmit:this.handleRegister},o.a.createElement("div",{className:"FormGroup"},o.a.createElement("input",{className:"InputBoxes",name:"username",placeholder:"Username",required:!0}),o.a.createElement("span",{className:"Subheads",name:"userinv",style:{visibility:"collapse"}},"Enter a username!")),o.a.createElement("div",{className:"FormGroup"},o.a.createElement("input",{className:"InputBoxes",name:"email",placeholder:"Email ID",pattern:"^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$",required:!0}),o.a.createElement("span",{className:"Subheads",name:"userinv",style:{visibility:"collapse"}},"Enter an Email!")),o.a.createElement("div",{className:"FormGroup"},o.a.createElement(h.a,{className:"FormGroup",style:{border:0},minLength:5,minScore:2,scoreWords:["Weak","Okay","Good","Strong","Stronger"],tooShortWord:"Too short",inputProps:{name:"password",autoComplete:"off",className:"Passbox",placeholder:"Password",required:"true",pattern:"^.{5}.*$"}})),o.a.createElement("input",{className:"btn-lg btn btn-default",type:"submit",value:"Register"}),o.a.createElement("br",null),o.a.createElement("div",{className:"FormGroup"},o.a.createElement("input",{className:"btn-md btn btn-default Smbtn",value:"Login",onClick:this.handleChange}),o.a.createElement("input",{className:"btn-md btn btn-default Smbtn",value:"Forgot Password?",onClick:this.handleChange})))))):o.a.createElement("div",{className:"Container"},o.a.createElement("div",{className:"Box"},o.a.createElement("h1",{className:"Heads"},"Forgot Password"),o.a.createElement("div",{className:"Content"},o.a.createElement("form",{onSubmit:this.handleFP},o.a.createElement("div",{className:"FormGroup"},o.a.createElement("span",{className:"Subheads",name:"otp-thing"},"Send the password to the registered Email ID?")),o.a.createElement("input",{className:"InputBoxes",name:"username",placeholder:"Username",required:!0}),o.a.createElement("input",{className:"btn-lg btn btn-default",type:"submit",value:"Send"}),o.a.createElement("br",null),o.a.createElement("div",{className:"FormGroup"},o.a.createElement("input",{className:"btn-md btn btn-default Smbtn",value:"Login",onClick:this.handleChange}),o.a.createElement("input",{className:"btn-md btn btn-default Smbtn",value:"Register",onClick:this.handleChange})))))):o.a.createElement("div",{className:"Container2"},o.a.createElement("div",null,o.a.createElement("div",{className:"row Topbar"},o.a.createElement("div",{className:"col-lg-2 Navbut",onClick:this.handleChange},"My Profile"),o.a.createElement("div",{className:"col-lg-2 Navbut",onClick:this.handleChange},"Course Handled"),o.a.createElement("div",{className:"col-lg-2 Navbut",onClick:this.handleChange},"Time Table"),o.a.createElement("div",{className:"col-lg-2 Navbut",onClick:this.handleChange},"Announcements"),o.a.createElement("div",{className:"col-lg-2 Navbut",onClick:this.handleChange},"Leave Management"),o.a.createElement("div",{className:"col-lg-2 Navbut",onClick:this.handleChange}," Logout ",o.a.createElement("img",{src:g.a,className:"User-logo",alt:"User"}))),o.a.createElement("hr",null),o.a.createElement(x,null)))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[62,1,2]]]);
//# sourceMappingURL=main.139ffadb.chunk.js.map