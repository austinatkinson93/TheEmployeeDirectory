(this.webpackJsonptheemployeedirectory=this.webpackJsonptheemployeedirectory||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),c=a.n(r);a(23);var o=function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"jumbotron jumbotron-fluid header"},l.a.createElement("div",{class:"container"},l.a.createElement("h1",{class:"display-4"},"Employee Directory"))))},s=a(16),i=a(12),m=a(13),u=a(17),p=a(15),h=a(14),d=a.n(h),E=function(){return d.a.get("https://randomuser.me/api/?results=200&nat=us")};var f=function(e){var t=e.employees.filter((function(t){return t.name.first.toUpperCase().includes(e.search.toUpperCase())}));return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"image"),l.a.createElement("th",{scope:"col"},l.a.createElement("a",{name:"name",onClick:e.onClick},"Name")),l.a.createElement("th",{scope:"col"},l.a.createElement("a",{name:"phone",onClick:e.onClick},"Phone")),l.a.createElement("th",{scope:"col"},l.a.createElement("a",{name:"email",onClick:e.onClick},"Email")),l.a.createElement("th",{scope:"col"},l.a.createElement("a",{name:"dob",onClick:e.onClick},"DOB")))),l.a.createElement("tbody",null,t.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,l.a.createElement("img",{alt:e.name.first,src:e.picture.medium})),l.a.createElement("td",null,e.name.first," ",e.name.last),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.dob.date.slice(0,10)))}))))))},v=(a(41),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={employees:[],search:"",sorted:!1},e.searchEmployees=function(){E().then((function(t){e.setState({employees:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var a=t.target.value;e.setState({search:a})},e.handleClick=function(t){var a=Object(s.a)(e.state.employees),n=t.target.name;!1===e.state.sorted?(a.sort((function(e,t){var a,l;return"name"!==n?(a=+e[n],l=+t[n]):(a=e[n].first.toUpperCase(),l=t[n].first.toUpperCase()),a<l?-1:a>l?1:0})),e.setState({employees:a,sorted:!0})):(a.sort((function(e,t){var a,l;return"name"!==n?(a=+e[n],l=+t[n]):(a=e[n].first.toUpperCase(),l=t[n].first.toUpperCase()),a<l?1:a>l?-1:0})),e.setState({employees:a,sorted:!1}))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.searchEmployees(),console.log("employees after api call:"),console.log(this.state.employees)}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{className:"form-control",value:this.state.search,onChange:this.handleInputChange,placeholder:"Search"})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement(f,{employees:this.state.employees,search:this.state.search,onClick:this.handleClick}))))}}]),a}(n.Component));var y=function(){return l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.42f589e6.chunk.js.map