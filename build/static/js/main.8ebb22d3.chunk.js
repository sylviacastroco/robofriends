(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),l=(n(14),n(4)),i=n(5),s=n(7),h=n(6),u=n(8),m=(n(2),function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(a,"?size=300x300")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))}),d=function(e){var t=e.robots,n=t.map((function(e,n){return r.a.createElement(m,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}));return r.a.createElement("div",null,n)},f=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",null,r.a.createElement("input",{className:"pa3 ma5 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},b=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)},g=(n(15),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc ma5"},r.a.createElement("h1",{className:"f1"},"Robofriends"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(d,{robots:a}))):r.a.createElement("h1",{className:"f1 tc"},"Loading")}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.8ebb22d3.chunk.js.map