(this["webpackJsonpchrome-ex-0"]=this["webpackJsonpchrome-ex-0"]||[]).push([[0],{25:function(e,t,n){e.exports={Clock:"topBar_Clock__2YnaJ"}},28:function(e,t,n){e.exports=n(67)},33:function(e,t,n){},34:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(19),c=n.n(r),l=(n(33),n(4)),i=n(3),u=(n(34),n(20)),m=n.n(u),d=n(21),s=n(22),p=n(26),E=n(23),v=n(27),g=n(24),f=n.n(g),h=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f.a,{format:"hh:mm:ss",ticking:!0}))}}]),t}(o.a.Component),b=n(25),y=n.n(b),x=function(){var e=Object(a.useState)("Loading quote..."),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){m.a.get("http://quotes.rest/qod.json").then((function(e){r(e.data.contents.quotes[0].quote),document.body.style.backgroundImage="url("+e.data.contents.quotes[0].background+")",document.body.style.backgroundPosition="center",document.body.style.backgroundSize="cover",document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundAttachment="fixed"}))})),o.a.createElement("div",null,o.a.createElement("div",{className:y.a.Clock},o.a.createElement(h,null)),o.a.createElement("span",null,'"',n,'"'))};var k=function(e){var t=e.addGroup,n=Object(a.useState)(" "),r=Object(i.a)(n,2),c=r[0],l=r[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"main-todo-input-wrap"},o.a.createElement("div",{className:"main-todo-input fl-wrap"},o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c&&(t(c),l(""))}},o.a.createElement("div",{className:"main-todo-input-item"}," ",o.a.createElement("input",{type:"text",id:"todo-list-item",value:c,placeholder:"What will you do today?",onChange:function(e){return l(e.target.value)}})," ")," ",o.a.createElement("input",{type:"submit",value:"Create Group",className:"add-items main-search-button"}))))))},j=n(6),C=n(8);var O=function(e){var t=e.todo,n=e.index,a=e.completeTodo,r=e.removeTodo,c=e.groupIndex;return o.a.createElement("tr",{style:{textDecoration:t.isCompleted?"line-through":""}},o.a.createElement("td",null,t.text),o.a.createElement("td",{style:{textAlign:"center"}},o.a.createElement(j.a,{onClick:function(){return a(c,n)},icon:C.a,color:"green"})),o.a.createElement("td",{style:{textAlign:"center"}},o.a.createElement(j.a,{onClick:function(){return r(c,n)},icon:C.b,color:"red"})))};var w=function(e){var t=e.groupIndex,n=e.addItem,r=Object(a.useState)(""),c=Object(i.a)(r,2),l=c[0],u=c[1];return o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("input",{style:{border:"none",backgroundColor:"transparent"},type:"text",placeholder:"add something to group...",value:l,onChange:function(e){return u(e.target.value)}})),o.a.createElement("td",{onClick:function(e){e.preventDefault(),l&&(n(l,t),u(""))},style:{fontWeight:"bold",textAlign:"center",color:"#4DB7FE"}},"Add"),o.a.createElement("td",null))};n(66);var T=function(e){var t=e.completeTodo,n=e.removeTodo,a=e.todos,r=e.groupName,c=e.groupIndex,l=e.removeGroup,i=e.addItem;return o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"main-todo-input-wrap"},o.a.createElement("div",{className:"main-todo-input fl-wrap todo-listing"},o.a.createElement("ul",{id:"list-items"},o.a.createElement("table",{id:"customers"},o.a.createElement("tr",null,o.a.createElement("th",null,r," "),o.a.createElement("th",null,"Tick Item"),o.a.createElement("th",null,"Remove Item")),a.map((function(e,a){return o.a.createElement(O,{key:a,index:a,todo:e,completeTodo:t,removeTodo:n,groupIndex:c})})),o.a.createElement(w,{groupIndex:c,addItem:i}),o.a.createElement("tr",null,o.a.createElement("td",null),o.a.createElement("td",null),o.a.createElement("td",{style:{textAlign:"right"}},o.a.createElement("span",{style:{color:"red",fontSize:"80%"},onClick:function(){return l(c)}},"Delete Group"))))))))};var I=function(){var e=Object(a.useState)([{content:[{text:"This is an item for this group",isCompleted:!1},{text:"This is also an item for this group",isCompleted:!1}],todogroup:"This is a group"},{content:[{text:"This item belongs to this group",isCompleted:!1},{text:"This item also belongs to this group",isCompleted:!1}],todogroup:"This is an another group"}]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=function(e,t){var a=Object(l.a)(n);a[t].content.push({text:e,isCompleted:!1}),r(a)},u=function(e,t){var a=Object(l.a)(n);a[e].content[t].isCompleted=!0,r(a)},m=function(e){var t=Object(l.a)(n);t.splice(e,1),r(t)},d=function(e,t){var a=Object(l.a)(n);a[e].content.splice(t,1),r(a)};return o.a.createElement("div",null,o.a.createElement("div",{className:"topbar"},o.a.createElement(x,null)),o.a.createElement("div",{className:"main"},o.a.createElement("div",{class:"row"},o.a.createElement(k,{addGroup:function(e){var t=[].concat(Object(l.a)(n),[{content:[],todogroup:e}]);r(t)}})),o.a.createElement("div",{className:"row"},n.map((function(e,t){return o.a.createElement(T,{completeTodo:u,removeTodo:d,todos:e.content,groupName:e.todogroup,groupIndex:t,removeGroup:m,addItem:c})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.436480ac.chunk.js.map