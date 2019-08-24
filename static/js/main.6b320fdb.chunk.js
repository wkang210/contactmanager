(window.webpackJsonpcontactmanager=window.webpackJsonpcontactmanager||[]).push([[0],{37:function(e,t,a){e.exports=a(67)},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),o=a.n(c),l=a(2),i=a(3),s=a(5),m=a(4),u=a(6),p=a(14),h=a(15),d=a(7),b=a.n(d),f=a(12),v=a(36),E=a(16),y=a(13),g=a.n(y);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach(function(t){Object(E.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var C=r.a.createContext(),N=function(e,t){switch(t.type){case"DELETE_CONTACT":return j({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return j({},e,{contacts:[t.payload].concat(Object(v.a)(e.contacts))});case"EDIT_CONTACT":return j({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?t.payload:e})});default:return e}},k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){a.setState(function(t){return N(t,e)})}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(C.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),w=C.Consumer,x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.onShowClick=function(e){a.setState({showContactInfo:!a.state.showContactInfo})},a.onDeleteClick=function(){var e=Object(f.a)(b.a.mark(function e(t,a){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("delete ",t),e.prev=1,e.next=4,g.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 4:a({type:"DELETE_CONTACT",payload:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),a({type:"DELETE_CONTACT",payload:t});case 10:case"end":return e.stop()}},e,null,[[1,7]])}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone,l=this.state.showContactInfo;return r.a.createElement(w,null,function(t){var i=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n,"  ",r.a.createElement("i",{onClick:e.onShowClick,className:l?"glyphicon glyphicon-triangle-bottom":"glyphicon glyphicon-triangle-right",style:{cursor:"pointer"}}),r.a.createElement("i",{onClick:e.onDeleteClick.bind(e,a,i),className:"glyphicon glyphicon-trash",style:{float:"right",cursor:"pointer",color:"red"}}),r.a.createElement(p.b,{to:"contact/edit/".concat(a)},r.a.createElement("i",{className:"glyphicon glyphicon-pencil",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)):null)})}}]),t}(n.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(w,null,function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),t.map(function(e){return r.a.createElement(x,{key:e.id,contact:e})}))})}}]),t}(n.Component),A=function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"glyphicon glyphicon-home"}),"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"glyphicon glyphicon-plus"}),"Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"glyphicon glyphicon-question-sign"}),"About"))))))};A.defaultProps={branding:"My App"};var D=A,T=a(35),P=a.n(T),F=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,i=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:o,className:P()("form-control form-control-lg",{"is-invalid":i}),placeholder:c,name:a,value:n,onChange:l}),i&&r.a.createElement("div",{className:"invalid-feedback"},i))};F.defaultProps={type:"text"};var q=F,I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onFieldChange=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(f.a)(b.a.mark(function e(t,n){var r,c,o,l,i,s;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),console.log(a.state),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=6;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 6:if(""!==o){e.next=9;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 9:if(""!==l){e.next=12;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 12:return i={name:c,email:o,phone:l},e.next=15,g.a.post("https://jsonplaceholder.typicode.com/users",i);case 15:s=e.sent,t({type:"ADD_CONTACT",payload:s.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 19:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(w,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(q,{label:"Name",name:"name",placeholder:"Enter Name...",value:a,onChange:e.onFieldChange,error:o.name}),r.a.createElement(q,{label:"Email",name:"email",type:"email",placeholder:"Enter Email...",value:n,onChange:e.onFieldChange,error:o.email}),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"phone"},"Phone"),r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Phone...",name:"phone",value:c,onChange:e.onFieldChange,error:o.phone})),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-block btn-light"}))))})}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onFieldChange=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(f.a)(b.a.mark(function e(t,n){var r,c,o,l,i,s,m;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),console.log(a.state),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=6;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 6:if(""!==o){e.next=9;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 9:if(""!==l){e.next=12;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 12:return i={name:c,email:o,phone:l},s=a.props.match.params.id,e.next=16,g.a.put("https://jsonplaceholder.typicode.com/users/".concat(s),i);case 16:m=e.sent,t({type:"EDIT_CONTACT",payload:m.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 20:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(b.a.mark(function e(){var t,a,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,g.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(w,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(q,{label:"Name",name:"name",placeholder:"Enter Name...",value:a,onChange:e.onFieldChange,error:o.name}),r.a.createElement(q,{label:"Email",name:"email",type:"email",placeholder:"Enter Email...",value:n,onChange:e.onFieldChange,error:o.email}),r.a.createElement(q,{label:"Phone",name:"phone",type:"phone",placeholder:"Enter phone...",value:c,onChange:e.onFieldChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-block btn-light"}))))})}}]),t}(n.Component);function M(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-5"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))}function L(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"404 Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist"))}var B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",body:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("component did mount"),fetch("https://jsonplaceholder.typicode.com/todos/1").then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({title:t.title,body:t.body}),console.log(e.state)})}},{key:"render",value:function(){var e=this.state.title;return r.a.createElement("div",null,r.a.createElement("h1",null,e))}}]),t}(n.Component),J=(a(65),a(66),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(k,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(D,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:S}),r.a.createElement(h.a,{exact:!0,path:"/contact/add",component:I}),r.a.createElement(h.a,{exact:!0,path:"/contact/edit/:id",component:_}),r.a.createElement(h.a,{exact:!0,path:"/about",component:M}),r.a.createElement(h.a,{exact:!0,path:"/test",component:B}),r.a.createElement(h.a,{component:L}))))))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.6b320fdb.chunk.js.map