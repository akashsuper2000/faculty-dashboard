(this["webpackJsonpfaculty-dashboard"]=this["webpackJsonpfaculty-dashboard"]||[]).push([[0],{44:function(e,t,a){},52:function(e,t,a){e.exports=a.p+"static/media/user.5e946c20.svg"},62:function(e,t,a){e.exports=a(89)},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),l=a.n(o),s=(a(67),a(12)),c=a(15),i=a(14),m=a(13),u=a(10),d=a(16),h=a(51),p=a.n(h),g=(a(44),a(68),a(52)),f=a.n(g),v=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{textAlign:"center",alignItems:"center",display:"flex",justifyContent:"center"}},r.a.createElement("span",{style:{marginTop:200,fontSize:50,fontWeight:"lighter"}},"Coming soon... Stay tuned!"))}}]),t}(r.a.Component),b=(a(69),a(26)),E=a(19),y=a(94),N=a(55),D=a(92),C=a(93),O=a(95),S=a(29),k=a.n(S),j=a(53),w=a.n(j),F=a(40),T=a.n(F),P=(a(85),a(25)),L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).handleFromChange=a.handleFromChange.bind(Object(m.a)(a)),a.handleToChange=a.handleToChange.bind(Object(m.a)(a)),a.state={from:void 0,to:void 0},a.today=new Date,a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"showFromMonth",value:function(){var e=this.state,t=e.from,a=e.to;t&&k()(a).diff(k()(t),"months")<2&&this.to.getDayPicker().showMonth(t)}},{key:"handleFromChange",value:function(e){if(this.setState({from:e}),console.log(e),void 0!==e){var t=new Date(e);t=t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear(),console.log(t),this.props.fromDate(t)}}},{key:"handleToChange",value:function(e){if(null==this.state.from)return alert("from is null"),console.log(document.getElementsByTagName("input")[4]),document.getElementsByTagName("input")[4].value="",void console.log(document.getElementsByTagName("input")[4].value);if(this.setState({to:e},this.showFromMonth),console.log(e),void 0!==e){var t=new Date(e);t=t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear(),console.log(t),this.props.toDate(t)}}},{key:"render",value:function(){var e=this,t=this.state,a=t.from,n=t.to,o={start:a,end:n};return r.a.createElement("div",{className:"InputFromTo"},r.a.createElement(T.a,{id:"FROMFROM",min:this.today,value:a,placeholder:"From",format:"LL",formatDate:P.formatDate,parseDate:P.parseDate,dayPickerProps:{selectedDays:[a,{from:a,to:n}],disabledDays:{before:this.today,after:n},toMonth:n,modifiers:o,numberOfMonths:2,onDayClick:function(){e.to.getInput().focus(),e.handleFromChange()}},onDayChange:this.handleFromChange})," ","\u2014"," ",r.a.createElement("span",{className:"InputFromTo-to"},r.a.createElement(T.a,{id:"TOTO",min:this.today,ref:function(t){return e.to=t},value:n,placeholder:"To",format:"LL",formatDate:P.formatDate,parseDate:P.parseDate,dayPickerProps:{selectedDays:[a,{from:a,to:n}],disabledDays:{before:a},modifiers:o,month:a,fromMonth:a,numberOfMonths:2},onDayChange:this.handleToChange})),r.a.createElement(w.a,null,r.a.createElement("style",null,"\n  .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {\n    background-color: #f0f8ff !important;\n    color: #4a90e2;\n  }\n  .InputFromTo .DayPicker-Day {\n    border-radius: 0 !important;\n  }\n  .InputFromTo .DayPicker-Day--start {\n    border-top-left-radius: 50% !important;\n    border-bottom-left-radius: 50% !important;\n  }\n  .InputFromTo .DayPicker-Day--end {\n    border-top-right-radius: 50% !important;\n    border-bottom-right-radius: 50% !important;\n  }\n  .InputFromTo .DayPickerInput-Overlay {\n    width: 550px;\n  }\n  .InputFromTo-to .DayPickerInput-Overlay {\n    margin-left: -198px;\n  }\n")))}}]),t}(r.a.Component),I=function(){return r.a.createElement("h1",null,"Not found")},x=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Leave Log comes here"))}}]),t}(r.a.Component),B=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).handleApplyForm=function(e){e.preventDefault();for(var t=Object(m.a)(a),n=!1,r=document.getElementsByName("formHorizontalRadios"),o=0;o<r.length;o++)r[o].checked&&(a.formData.leaveType=r[o].value,n=!0);if(a.formData.reason=document.getElementById("reason").value,!n)return alert("Select leave type");if(!a.formData.reason)return alert("Enter Reason");var l=t.today.getDate()+"/"+(t.today.getMonth()+1)+"/"+t.today.getFullYear();if(t.today=l,!a.formData.startDate||!a.formData.endDate)return alert("Enter Dates");var s=new Date(t.today),c=new Date(a.formData.startDate),i=new Date(a.formData.endDate);if(console.log(s),console.log(c),console.log(i),c<s||c>i)return alert("Improper Dates");alert("Im pausing, check log!"),console.log(a.formData)},a.handlefromDate=function(e){a.formData.startDate=e},a.handletoDate=function(e){a.formData.endDate=e},a.formData={leaveType:null,startDate:null,endDate:null,reason:null},a.today=new Date,a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y.a,{onSubmit:this.handleApplyForm},r.a.createElement("fieldset",null,r.a.createElement(N.a,null,r.a.createElement(y.a.Group,{id:"leaveType"},r.a.createElement(y.a.Label,{as:"legend",column:!0,sm:2},"Type of Leave"),r.a.createElement(y.a.Check,{type:"radio",label:"Casual Leave",name:"formHorizontalRadios",id:"formHorizontalRadios1",value:"CL"}),r.a.createElement(y.a.Check,{type:"radio",label:"Sick Leave",name:"formHorizontalRadios",id:"formHorizontalRadios2",value:"SL"}),r.a.createElement(y.a.Check,{type:"radio",label:"Privilege Leave",name:"formHorizontalRadios",id:"formHorizontalRadios3",value:"PL"})))),r.a.createElement("br",null),r.a.createElement(N.a,null,r.a.createElement("span",null,"Enter Dates"),r.a.createElement(L,{fromDate:this.handlefromDate,toDate:this.handletoDate})),r.a.createElement("br",null),r.a.createElement(N.a,null,r.a.createElement(y.a.Group,{controlId:"exampleForm.ControlTextarea1",value:"reason"},r.a.createElement(y.a.Label,null,"Reason"),r.a.createElement(y.a.Control,{as:"textarea",rows:"2",id:"reason"}))),r.a.createElement("br",null),r.a.createElement(N.a,null,r.a.createElement(D.a,{variant:"primary",type:"submit"},"Apply"))))}}]),t}(r.a.Component),A=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Leave Request Table Comes Here"))}}]),t}(r.a.Component),R=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return console.log("Page Load Started"),r.a.createElement(b.a,null,r.a.createElement(C.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(C.a.Brand,{href:"#"},r.a.createElement(b.b,{exact:!0,activeClassName:"active",to:"/"},"Leave Log")),r.a.createElement(C.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(C.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(O.a,{className:"mr-auto"},r.a.createElement(O.a.Link,{href:"#"},r.a.createElement(b.b,{activeClassName:"active",to:"/apply"},"Apply")),r.a.createElement(O.a.Link,{href:"#"},r.a.createElement(b.b,{activeClassName:"active",to:"/approvedecline"},"Approve/Decline"))))),r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",component:x}),r.a.createElement(E.a,{path:"/apply",component:B}),r.a.createElement(E.a,{path:"/approvedecline",component:A}),r.a.createElement(E.a,{component:I})))}}]),t}(r.a.Component),M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).handleLogin=function(e){e.preventDefault();var t=Object(m.a)(a),n={user:document.getElementsByName("username")[0].value,pass:document.getElementsByName("password")[0].value};console.log(JSON.stringify(n)),fetch(t.state.sendurl+"login",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(n)}).then((function(e){if(e.status>=400)throw new Error("Bad response from server");return e.json()})).then((function(e){console.log(e),1==(e=JSON.parse(e)).res.length?(console.log("Success"),t.setState({user:document.getElementsByName("username")[0].value}),t.setState({login:1})):0==e.res.length?(console.log("Account does not exist!"),alert("Account does not exist!")):(console.log("Failure"),alert("Something went wrong, Try again later!"))})).catch((function(e){console.log(e)}))},a.handleRegister=function(e){e.preventDefault();var t=Object(m.a)(a),n={user:document.getElementsByName("username")[0].value,email:document.getElementsByName("email")[0].value,pass:document.getElementsByName("password")[0].value};console.log(JSON.stringify(n)),fetch(t.state.sendurl+"register",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(n)}).then((function(e){if(e.status>=400)throw new Error("Bad response from server");return e.json()})).then((function(e){console.log(e),1==(e=JSON.parse(e)).res.length?(console.log("Account already exists!"),alert("Account already exists!")):1==e.res.affectedRows?console.log("Success"):(console.log("Failure"),alert("Something went wrong, Try again later!"))})).catch((function(e){console.log(e)}))},a.handleFP=function(e){e.preventDefault();var t=Object(m.a)(a),n={user:document.getElementsByName("username")[0].value};console.log(JSON.stringify(n)),fetch(t.state.sendurl+"fp",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(n)}).then((function(e){if(e.status>=400)throw new Error("Bad response from server");return e.json()})).then((function(e){console.log(e),1==(e=JSON.parse(e)).res?(console.log("Success"),alert("Password sent to your Email ID!")):0==e.res&&alert("Account does not exist!")})).catch((function(e){console.log(e)}))},a.handleChange=function(e){if(e.preventDefault(),console.log(e.target),0==a.state.login)"Register"==e.target.value?a.setState({page:1}):"Forgot Password?"==e.target.value?a.setState({page:2}):a.setState({page:0});else{for(var t=e.target.innerHTML.split(" ")[0],n=0;n<e.target.parentNode.children.length;n++)e.target.parentNode.children[n].style.fontSize="medium",e.target.parentNode.children[n].style.fontWeight="normal";e.target.style.fontSize="large",e.target.style.fontWeight="bold","My"==t?a.setState({page:0}):"Course"==t?a.setState({page:1}):"Time"==t?a.setState({page:2}):"Announcements"==t?a.setState({page:3}):"Leave"==t?a.setState({page:4}):(a.setState({page:0}),a.setState({login:0}))}},a.state={page:0,login:0,user:"User",sendurl:"https://server-for-faculty-dashboard.herokuapp.com/"},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){document.title="Faculty Dashboard"}}]),Object(u.a)(t,[{key:"render",value:function(){return 0==this.state.login?0==this.state.page?r.a.createElement("div",{className:"Container"},r.a.createElement("div",{className:"Box"},r.a.createElement("h1",{className:"Heads"},"Sign In"),r.a.createElement("div",{className:"Content"},r.a.createElement("form",{onSubmit:this.handleLogin},r.a.createElement("div",{className:"FormGroup"},r.a.createElement("input",{className:"InputBoxes",name:"username",placeholder:"Username",required:!0}),r.a.createElement("span",{className:"Subheads",name:"userinv",style:{visibility:"collapse"}},"Enter a username!")),r.a.createElement("div",{className:"FormGroup"},r.a.createElement("input",{className:"InputBoxes",name:"password",type:"password",placeholder:"Password",required:!0}),r.a.createElement("span",{className:"Subheads",name:"passinv",style:{visibility:"collapse"}},"Invalid password!")),r.a.createElement("input",{className:"btn-lg btn btn-default",type:"submit",value:"Login"}),r.a.createElement("br",null),r.a.createElement("div",{className:"FormGroup"},r.a.createElement("input",{className:"btn-md btn btn-default Smbtn",value:"Register",onClick:this.handleChange}),r.a.createElement("input",{className:"btn-md btn btn-default Smbtn",value:"Forgot Password?",onClick:this.handleChange})))))):1==this.state.page?r.a.createElement("div",{className:"Container"},r.a.createElement("div",{className:"Box"},r.a.createElement("h1",{className:"Heads"},"Register"),r.a.createElement("div",{className:"Content"},r.a.createElement("form",{onSubmit:this.handleRegister},r.a.createElement("div",{className:"FormGroup"},r.a.createElement("input",{className:"InputBoxes",name:"username",placeholder:"Username",required:!0}),r.a.createElement("span",{className:"Subheads",name:"userinv",style:{visibility:"collapse"}},"Enter a username!")),r.a.createElement("div",{className:"FormGroup"},r.a.createElement("input",{className:"InputBoxes",name:"email",placeholder:"Email ID",pattern:"^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$",required:!0}),r.a.createElement("span",{className:"Subheads",name:"userinv",style:{visibility:"collapse"}},"Enter an Email!")),r.a.createElement("div",{className:"FormGroup"},r.a.createElement(p.a,{className:"FormGroup",style:{border:0},minLength:5,minScore:2,scoreWords:["Weak","Okay","Good","Strong","Stronger"],tooShortWord:"Too short",inputProps:{name:"password",autoComplete:"off",className:"Passbox",placeholder:"Password",required:"true",pattern:"^.{5}.*$"}})),r.a.createElement("input",{className:"btn-lg btn btn-default",type:"submit",value:"Register"}),r.a.createElement("br",null),r.a.createElement("div",{className:"FormGroup"},r.a.createElement("input",{className:"btn-md btn btn-default Smbtn",value:"Login",onClick:this.handleChange}),r.a.createElement("input",{className:"btn-md btn btn-default Smbtn",value:"Forgot Password?",onClick:this.handleChange})))))):r.a.createElement("div",{className:"Container"},r.a.createElement("div",{className:"Box"},r.a.createElement("h1",{className:"Heads"},"Forgot Password"),r.a.createElement("div",{className:"Content"},r.a.createElement("form",{onSubmit:this.handleFP},r.a.createElement("div",{className:"FormGroup"},r.a.createElement("span",{className:"Subheads",name:"otp-thing"},"Send the password to the registered Email ID?")),r.a.createElement("input",{className:"InputBoxes",name:"username",placeholder:"Username",required:!0}),r.a.createElement("input",{className:"btn-lg btn btn-default",type:"submit",value:"Send"}),r.a.createElement("br",null),r.a.createElement("div",{className:"FormGroup"},r.a.createElement("input",{className:"btn-md btn btn-default Smbtn",value:"Login",onClick:this.handleChange}),r.a.createElement("input",{className:"btn-md btn btn-default Smbtn",value:"Register",onClick:this.handleChange})))))):r.a.createElement("div",{className:"Container2"},r.a.createElement("div",null,r.a.createElement("div",{className:"row Topbar"},r.a.createElement("div",{className:"col-lg-2 Navbut",style:{fontWeight:"bold",fontSize:"large"},onClick:this.handleChange},"My Profile"),r.a.createElement("div",{className:"col-lg-2 Navbut",onClick:this.handleChange},"Course Handled"),r.a.createElement("div",{className:"col-lg-2 Navbut",onClick:this.handleChange},"Time Table"),r.a.createElement("div",{className:"col-lg-2 Navbut",onClick:this.handleChange},"Announcements"),r.a.createElement("div",{className:"col-lg-2 Navbut",onClick:this.handleChange},"Leave Management"),r.a.createElement("div",{className:"col-lg-2 Navbut",onClick:this.handleChange}," Logout ",r.a.createElement("img",{src:f.a,className:"User-logo",alt:"User"}))),r.a.createElement("hr",null),0==this.state.page?r.a.createElement(v,null):1==this.state.page?r.a.createElement(v,null):2==this.state.page?r.a.createElement(v,null):3==this.state.page?r.a.createElement(v,null):4==this.state.page?r.a.createElement(R,null):r.a.createElement(v,null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[62,1,2]]]);
//# sourceMappingURL=main.92cc57ff.chunk.js.map