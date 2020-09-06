(this["webpackJsonpactive-mind"]=this["webpackJsonpactive-mind"]||[]).push([[0],{41:function(e,t,a){e.exports=a(77)},67:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),i=a.n(r),s=a(3),l=a(11),o=a(38),m=a(10),u=a(2),p=a(8),d=a(21),g=a.n(d),f=a(24),b=a.n(f),E=a(39),v=a(40),h=a.n(v).a.create({baseURL:"https://opentdb.com"}),y=function(e,t){return e.points+=t,{type:"ADD_POINTS",payload:e}},O=function(){return function(){var e=Object(E.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/api.php?amount=1&category=11&difficulty=easy&type=multiple&encode=base64");case 2:a=e.sent,t({type:"GET_TRIVIA",payload:a.data.results[0]});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=(a(67),function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],r=t[1],i=Object(s.b)(),l=Object(s.c)((function(e){return e.users}));return c.a.createElement("div",{className:"overlay"},c.a.createElement("div",null,c.a.createElement("h2",{className:"ui center aligned welcome-msg"},"Welcome! Who is playing?"),c.a.createElement("ul",{className:"user-buttons"},function(){if(l)return l.map((function(e){return c.a.createElement(m.b,{to:"/activities"},c.a.createElement("button",{key:e.userid,onClick:function(){return i(function(e){return{type:"SET_ACTIVE",payload:e}}(e))}},e.name))}))}())),c.a.createElement("div",{className:"signUp"},c.a.createElement("h3",{className:"ui centered middle aligned four column grid see-name"},"Don't see your name?"),c.a.createElement("div",{className:"ui centered middle aligned four column grid"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==a&&(i({type:"ADD_USER",payload:{name:a,userid:g()(),points:0,tasks:[]}}),r(""))}},c.a.createElement("input",{type:"text",value:a,onChange:function(e){r(e.target.value)},className:"enter-user"}),c.a.createElement("div",null,c.a.createElement("button",{className:"ui vertical animated button teal"},c.a.createElement("div",{className:"hidden content"},c.a.createElement("i",{"aria-hidden":"true",className:"user plus icon"})),c.a.createElement("div",{className:"visible content"},"Add User")))))))}),N=(a(69),function(){return c.a.createElement("div",{className:"head-container"},c.a.createElement("h1",{className:"heading"},"MindFull"),c.a.createElement(m.b,{to:"/mindfull"},c.a.createElement("button",null,"Home")))}),S=(a(70),function(){var e=Object(s.c)((function(e){return e.activeUser})),t=[{name:"Trivia",img:"https://www.kindpng.com/picc/m/1-13034_lightbulb-vector-transparent-background-light-bulb-clip-art.png"},{name:"Memory",img:"https://www.clipartkey.com/mpngs/m/8-84364_cartoon-brain-clip-art-brain-cartoon-transparent-background.png"},{name:"Tasks",img:"https://s.clipartkey.com/mpngs/s/65-656589_transparent-to-do-list-png-todo-list-icon.png"}];return c.a.createElement("div",null,c.a.createElement("div",{className:"greeting"},c.a.createElement("h1",null,"Hello ",e.name,"!"),c.a.createElement("h2",null,"You have ",e.points," activity points!"),c.a.createElement("p",null,"Play activities to earn more points:")),c.a.createElement("div",{className:"activities-group"},t.map((function(e){return c.a.createElement(m.b,{to:"/".concat(e.name.toLowerCase())},c.a.createElement("div",{class:"title-img"},c.a.createElement("button",{className:"activity-btn"},c.a.createElement("h2",null,e.name),c.a.createElement("img",{src:e.img}))))}))))}),j=(a(71),function(){var e=Object(s.b)(),t=Object(n.useState)(""),a=Object(p.a)(t,2),r=a[0],i=a[1],l=Object(s.c)((function(e){return e.trivia})),o=Object(s.c)((function(e){return e.activeUser})),u=Object(n.useState)(0),d=Object(p.a)(u,2),g=d[0],f=d[1];Object(n.useEffect)((function(){e(O())}),[]);return c.a.createElement("div",{className:"overlay"},c.a.createElement("div",null,c.a.createElement(m.b,{to:"/activities"},c.a.createElement("button",{className:"finish"},"Finish Trivia"))),c.a.createElement("div",{className:"points"},c.a.createElement("p",{className:"points"},"Points: ",o.points)),c.a.createElement("div",null,c.a.createElement("h1",{className:"question"},function(){if(l.question)return atob(l.question)}()),c.a.createElement("ul",{className:"ui centered middle aligned four column grid"},function(){var t=l.incorrect_answers;if(t)return 4!==t.length&&(t.push(l.correct_answer),function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}}(t)),t.map((function(t){return c.a.createElement("button",{class:"answer-button",onClick:function(){return function(t){if(t===l.correct_answer){var a=100-25*g;e(y(o,a)),i("Correct. Great job! +".concat(a," points")),setTimeout((function(){f(0),e(O()),i("")}),2e3)}else f(g+1),i("Incorrect. Try again!")}(t)}},atob(t))}))}())),c.a.createElement("div",{className:"message"},function(){if(""!==r)return c.a.createElement("div",null,c.a.createElement("h3",{className:"C"===r[0]?"success ":"fail ui center aligned header"},r))}()))}),T=a(13),_=[{img:"https://content.mycutegraphics.com/graphics/bicycle/bicycle-orange.png",clicked:!1},{img:"https://content.mycutegraphics.com/graphics/bicycle/bicycle-orange.png",clicked:!1},{img:"https://i.pinimg.com/originals/17/84/7b/17847b8eb034e9d3f3ee996b0cad6ddb.png",clicked:!1},{img:"https://i.pinimg.com/originals/17/84/7b/17847b8eb034e9d3f3ee996b0cad6ddb.png",clicked:!1},{img:"https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/6219/dog-clipart-md.png",clicked:!1},{img:"https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/6219/dog-clipart-md.png",clicked:!1},{img:"https://www.clker.com/cliparts/Y/c/t/U/i/H/golf-green-md.png",clicked:!1},{img:"https://www.clker.com/cliparts/Y/c/t/U/i/H/golf-green-md.png",clicked:!1},{img:"https://i.pinimg.com/originals/8f/06/d9/8f06d96817c73128cda7756fee2b877c.png",clicked:!1},{img:"https://i.pinimg.com/originals/8f/06/d9/8f06d96817c73128cda7756fee2b877c.png",clicked:!1},{img:"https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/63910/mountain-clipart-md.png",clicked:!1},{img:"https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/63910/mountain-clipart-md.png",clicked:!1},{img:"https://i.pinimg.com/originals/6f/82/cb/6f82cb851ad6811ef373f2a1cc38a713.png",clicked:!1},{img:"https://i.pinimg.com/originals/6f/82/cb/6f82cb851ad6811ef373f2a1cc38a713.png",clicked:!1},{img:"https://i.pinimg.com/originals/2c/63/fc/2c63fcdee5fdfa437ce79b135bc0e67d.png",clicked:!1},{img:"https://i.pinimg.com/originals/2c/63/fc/2c63fcdee5fdfa437ce79b135bc0e67d.png",clicked:!1}],w=(a(72),function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.activeUser})),a=Object(n.useState)(_),r=Object(p.a)(a,2),i=r[0],l=r[1],o=Object(n.useState)([]),m=Object(p.a)(o,2),u=m[0],d=m[1],g=Object(n.useState)(""),f=Object(p.a)(g,2),b=f[0],E=f[1],v=Object(n.useState)(!1),h=Object(p.a)(v,2),O=h[0],k=h[1];Object(n.useEffect)((function(){for(var e=i.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),a=[i[t],i[e]];i[e]=a[0],i[t]=a[1]}l(Object(T.a)(i))}),[]);var N=function(){setTimeout((function(){E("")}),900)};return c.a.createElement("div",null,c.a.createElement("div",{className:"mem-greeting"},c.a.createElement("h1",null,"Memory Game:"),c.a.createElement("h3",null,"Choose the matching images!")),c.a.createElement("div",{className:"outer-grid"},i.map((function(e,t){return console.log(e),c.a.createElement("button",{className:"img-btn"},c.a.createElement("img",{src:e.img,alt:"Memory",onClick:function(){return function(e){i[e].clicked=!0,console.log(_[e]),l(Object(T.a)(i)),u.push(i[e]),d(u)}(t)},className:e.clicked?"mem-img":"transparent-mem-img"}))}))),function(){var a,n;2===u.length&&(u[0].img===u[1].img?(e(y(t,50)),d([]),E("Great job! +50 Points!"),N()):(a=u[0],n=u[1],setTimeout((function(){i.map((function(e){e.img!==a.img&&e.img!==n.img||(e.clicked=!1)})),l(Object(T.a)(i))}),900),d([]),E("Try again!"),N()))}(),c.a.createElement("div",{className:"bottom-msg"},c.a.createElement("h3",{className:"success-msg"},b),c.a.createElement("h3",{className:"cur-pts"},"Current points: ",t.points)),function(){var e=!0;i.forEach((function(t){t.clicked||(e=!1)})),e&&!O&&k(!0)}(),function(){if(O)return c.a.createElement("button",{onClick:function(){return function(){i.map((function(e){return e.clicked=!1,e}));for(var e=i.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),a=[i[t],i[e]];i[e]=a[0],i[t]=a[1]}l(Object(T.a)(i)),k(!1)}()}},"Play again!")}())}),I=(a(73),function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.activeUser.tasks})),a=Object(n.useState)(""),r=Object(p.a)(a,2),i=r[0],l=r[1],o=Object(s.c)((function(e){return e.activeUser}));return c.a.createElement("div",{className:"task-container"},c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(function(e,t){return{type:"ADD_TASK",payload:{task:e,user:t}}}({text:i,complete:!1,id:g()()},o)),l("")}},c.a.createElement("input",{type:"text",value:i,onChange:function(e){l(e.target.value)},className:"text-input"}),c.a.createElement("button",{className:"add-btn"},"Add Task")),c.a.createElement("ul",{className:"task-list"},(console.log("rerender"),t.map((function(t){return c.a.createElement("li",{key:t.id,className:t.complete?"complete-task":"incomplete-task"},c.a.createElement("input",{type:"checkbox",onClick:function(){return a=t.id,void e(function(e,t){return{type:"COMPLETE_TASK",payload:{id:e,user:t}}}(a,o));var a},className:"check"}),c.a.createElement("p",{className:"task-text"},t.text))})))),c.a.createElement("button",{onClick:function(){return e(function(e){return{type:"CLEAR_TASKS",payload:e}}(o))},className:"clear-btn"},"Clear Tasks"))}),A=function(e){return c.a.createElement("div",null,c.a.createElement(m.a,null,c.a.createElement(N,null),c.a.createElement(u.a,{path:"/",exact:!0,component:k}),c.a.createElement(u.a,{path:"/mindfull",exact:!0,component:k}),c.a.createElement(u.a,{path:"/activities",component:S}),c.a.createElement(u.a,{path:"/trivia",component:j}),c.a.createElement(u.a,{path:"/memory",component:w}),c.a.createElement(u.a,{path:"/tasks",component:I})))},C=JSON.parse(localStorage.getItem("users"))||[],D=a(12),U=JSON.parse(localStorage.getItem("activeUser"))||{},J={},M=Object(l.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USER":var a=JSON.parse(localStorage.getItem("users"))||[];return a.push(t.payload),localStorage.setItem("users",JSON.stringify(a)),[].concat(Object(T.a)(e),[t.payload]);case"ADD_POINTS":return e.map((function(e){return e.userid===t.payload.userid&&(e.points=t.payload.points),e})),localStorage.setItem("users",JSON.stringify(e)),e;default:return e}},activeUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ACTIVE":return Object(D.a)({},t.payload);case"ADD_POINTS":return localStorage.setItem("activeUser",JSON.stringify(t.payload)),Object(D.a)({},t.payload);case"ADD_TASK":return(a=JSON.parse(localStorage.getItem("users"))).map((function(e){return e.userid===t.payload.user.userid&&e.tasks.push(t.payload.task),e})),localStorage.setItem("users",JSON.stringify(a)),e.tasks.push(t.payload.task),localStorage.setItem("activeUser",JSON.stringify(e)),Object(D.a)({},e);case"COMPLETE_TASK":return(a=JSON.parse(localStorage.getItem("users"))).map((function(e){return e.userid===t.payload.user.userid&&e.tasks.push(t.payload.task),e})),localStorage.setItem("users",JSON.stringify(a)),e.tasks.map((function(e){return e.id===t.payload.id&&(e.complete=!e.complete),e})),localStorage.setItem("activeUser",JSON.stringify(e)),Object(D.a)({},e);case"CLEAR_TASKS":var a;return(a=JSON.parse(localStorage.getItem("users"))).map((function(e){return e.userid===t.payload.userid&&(e.tasks=[]),e})),localStorage.setItem("users",JSON.stringify(a)),e.tasks=[],localStorage.setItem("activeUser",JSON.stringify(e)),Object(D.a)({},e);default:return e}},trivia:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TRIVIA":return Object(D.a)({},t.payload);default:return e}}});a(74).config();var x=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,P=Object(l.e)(M,x(Object(l.a)(o.a)));i.a.render(c.a.createElement(s.a,{store:P},c.a.createElement(A,null)),document.querySelector("#root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.f80b0909.chunk.js.map