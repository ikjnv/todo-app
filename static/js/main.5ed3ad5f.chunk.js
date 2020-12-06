(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{1355:function(e,t){},1358:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1),c=n.n(o),s=n(21),a=n.n(s),i=(n(39),n(38)),l=n(4),d=n(13),u=n.n(d),j=n(18),b=n(10),f=n(8),h=n(12),p=n(43);function O(e){return m.apply(this,arguments)}function m(){return(m=Object(j.a)(u.a.mark((function e(t){var n,r,o,c,s,a,i,l=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:{},r=n.body,o=Object(p.a)(n,["body"]),c={"Content-Type":"application/json"},s=Object(h.a)(Object(h.a)({method:r?"POST":"GET"},o),{},{headers:Object(h.a)(Object(h.a)({},c),o.headers)}),r&&(s.body=JSON.stringify(r)),e.prev=4,e.next=7,window.fetch(t,s);case 7:return i=e.sent,e.next=10,i.json();case 10:if(a=e.sent,!i.ok){e.next=13;break}return e.abrupt("return",a);case 13:throw new Error(i.statusText);case 16:return e.prev=16,e.t0=e.catch(4),e.abrupt("return",Promise.reject(e.t0.message?e.t0.message:a));case 19:case"end":return e.stop()}}),e,null,[[4,16]])})))).apply(this,arguments)}O.get=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return O(e,Object(h.a)(Object(h.a)({},t),{},{method:"GET"}))},O.post=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return O(e,Object(h.a)(Object(h.a)({},n),{},{body:t}))};var v={All:"all",Active:"active",Completed:"completed"},x={status:v.All,colors:[]},g=Object(b.d)({name:"filters",initialState:x,reducers:{statusFilterChanged:function(e,t){e.status=t.payload},colorFilterChanged:{reducer:function(e,t){var n=t.payload,r=n.color,o=n.changeType,c=e.colors;switch(o){case"added":c.includes(r)||c.push(r);break;case"removed":e.colors=c.filter((function(e){return e!==r}));break;default:return}},prepare:function(e,t){return{payload:{color:e,changeType:t}}}}}}),y=g.actions,C=(y.statusFilterChanged,y.colorFilterChanged),N=g.reducer,k=Object(b.c)(),w=k.getInitialState({status:"idle"}),T=Object(b.b)("todos/fetchTodos",Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/fakeApi/todos");case 2:return t=e.sent,e.abrupt("return",t.todos);case 4:case"end":return e.stop()}}),e)})))),A=Object(b.b)("todos/saveNewTodo",function(){var e=Object(j.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={text:t},e.next=3,O.post("/fakeApi/todos",{todo:n});case 3:return r=e.sent,e.abrupt("return",r.todo);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),S=Object(b.d)({name:"todos",initialState:w,reducers:{todoToggled:function(e,t){var n=t.payload,r=e.entities[n];r.completed=!r.completed},todoColorSelected:{reducer:function(e,t){var n=t.payload,r=n.color,o=n.todoId;e.entities[o].color=r},prepare:function(e,t){return{payload:{todoId:e,color:t}}}},todoDeleted:k.removeOne,allTodosCompleted:function(e,t){Object.values(e.entities).forEach((function(e){e.completed=!0}))},completedTodosCleared:function(e,t){var n=Object.values(e.entities).filter((function(e){return e.completed})).map((function(e){return e.id}));k.removeMany(e,n)}},extraReducers:function(e){e.addCase(T.pending,(function(e,t){e.status="loading"})).addCase(T.fulfilled,(function(e,t){k.setAll(e,t.payload),e.status="idle"})).addCase(A.fulfilled,k.addOne)}}),I=S.actions,F=(I.todoAdded,I.todoToggled),E=I.todoColorSelected,G=I.todoDeleted,M=I.allTodosCompleted,R=I.completedTodosCleared,z=S.reducer,D=k.getSelectors((function(e){return e.todos})),H=D.selectAll,$=D.selectById,B=(Object(f.a)(H,(function(e){return e.map((function(e){return e.id}))})),Object(f.a)(H,(function(e){return e.filters}),(function(e,t){var n=t.status,r=t.colors,o=n===v.All;if(o&&0===r.length)return e;var c=n===v.Completed;return e.filter((function(e){var t=o||e.completed===c,n=0===r.length||r.includes(e.color);return t&&n}))}))),J=Object(f.a)(B,(function(e){return e.map((function(e){return e.id}))})),P=function(){var e=Object(o.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(o.useState)("idle"),a=Object(i.a)(s,2),d=a[0],u=a[1],j=Object(l.b)(),b="loading"===d,f=b?"":"Add a new todo item",h=b?Object(r.jsx)("div",{className:"loader"}):null;return Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("input",{className:"new-todo",placeholder:f,value:n,onChange:function(e){return c(e.target.value)},onKeyDown:function(e){var t=n.trim();13===e.which&&t&&(u("loading"),j(A(t)),c(""),u("idle"))},disabled:b}),h]})},q=["green","blue","orange","purple","red"],K=function(e){return e[0].toUpperCase()+e.slice(1)},L=n(44),U=n(45),Q=Object(r.jsx)(L.a,{icon:U.a}),V=function(e){var t=e.id,n=Object(l.c)((function(e){return $(e,t)})),o=n.text,c=n.completed,s=n.color,a=Object(l.b)(),i=q.map((function(e){return Object(r.jsx)("option",{value:e,children:K(e)},e)}));return Object(r.jsx)("li",{children:Object(r.jsxs)("div",{className:"view",children:[Object(r.jsxs)("div",{className:"segment label",children:[Object(r.jsx)("input",{className:"toggle",type:"checkbox",checked:c,onChange:function(){a(F(n.id))}}),Object(r.jsx)("div",{className:"todo-text",children:o})]}),Object(r.jsxs)("div",{className:"segment buttons",children:[Object(r.jsxs)("select",{className:"colorPicker",value:s,style:{color:s},onChange:function(e){var t=e.target.value;a(E(n.id,t))},children:[Object(r.jsx)("option",{value:""}),i]}),Object(r.jsx)("button",{className:"destroy",onClick:function(){a(G(n.id))},children:Q})]})]})})},W=function(){var e=Object(l.c)(J);if("loading"===Object(l.c)((function(e){return e.todos.status})))return Object(r.jsx)("div",{className:"todo-list",children:Object(r.jsx)("div",{className:"loader"})});var t=e.map((function(e){return Object(r.jsx)(V,{id:e},e)}));return Object(r.jsx)("ul",{className:"todo-list",children:t})},X=function(e){var t=e.count,n=1===t?"":"s";return Object(r.jsxs)("div",{className:"todo-count",children:[Object(r.jsx)("h5",{children:"Remaining Todos"}),Object(r.jsx)("strong",{children:t})," item",n," left"]})},Y=function(e){var t=e.value,n=e.onChange,o=Object.keys(v).map((function(e){var o=v[e],c=o===t?"selected":"";return Object(r.jsx)("li",{children:Object(r.jsx)("button",{className:c,onClick:function(){return n(o)},children:e})},o)}));return Object(r.jsxs)("div",{className:"filters statusFilters",children:[Object(r.jsx)("h5",{children:"Filter by Status"}),Object(r.jsx)("ul",{children:o})]})},Z=function(e){var t=e.value,n=e.onChange,o=q.map((function(e){var o=t.includes(e);return Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",name:e,checked:o,onChange:function(){n(e,o?"removed":"added")}}),Object(r.jsx)("span",{className:"color-block",style:{backgroundColor:e}}),K(e)]},e)}));return Object(r.jsxs)("div",{className:"filters colorFilters",children:[Object(r.jsx)("h5",{children:"Filter by Color"}),Object(r.jsx)("form",{className:"colorSelection",children:o})]})},_=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return H(e).filter((function(e){return!e.completed})).length})),n=Object(l.c)((function(e){return e.filters})),o=n.status,c=n.colors;return Object(r.jsxs)("footer",{className:"footer",children:[Object(r.jsxs)("div",{className:"actions",children:[Object(r.jsx)("h5",{children:"Actions"}),Object(r.jsx)("button",{className:"button",onClick:function(){return e(M())},children:"Mark All Completed"}),Object(r.jsx)("button",{className:"button",onClick:function(){return e(R())},children:"Clear Completed"})]}),Object(r.jsx)(X,{count:t}),Object(r.jsx)(Y,{value:o,onChange:function(t){return e({type:"filters/statusFilterChanged",payload:t})}}),Object(r.jsx)(Z,{value:c,onChange:function(t,n){return e(C(t,n))}})]})};var ee=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("nav",{children:Object(r.jsx)("section",{id:"title",children:Object(r.jsx)("h1",{children:"React-Redux Todo app"})})}),Object(r.jsxs)("main",{children:[Object(r.jsxs)("section",{className:"medium-container",children:[Object(r.jsx)("h2",{children:"Todos"}),Object(r.jsxs)("div",{className:"todoapp",children:[Object(r.jsx)(P,{}),Object(r.jsx)(W,{}),Object(r.jsx)(_,{})]})]}),Object(r.jsx)("section",{className:"footer",children:Object(r.jsx)("p",{children:"Developed by Abdurauf"})})]})]})},te=Object(b.a)({reducer:{todos:z,filters:N}}),ne=n(15),re=(n(22),n(34)),oe=n.n(re),ce=ne.c.extend({serializeIds:"always"}),se=oe()();var ae=function(e){var t,n;return e[(t=0,n=e.length-1,t=Math.ceil(t),n=Math.floor(n),Math.floor(se()*(n-t+1))+t)]},ie=[{base:"Buy $THING",values:["milk","bread","cheese","toys"]},{base:"Clean $THING",values:["house","yard","bedroom","car"]},{base:"Read $THING",values:["newspaper","book","email"]}];new ne.d({routes:function(){this.namespace="fakeApi",this.timing=1e3,this.resource("todos"),this.resource("lists");var e=this;this.post("/todos",(function(t,n){var r=this.normalizedRequestAttrs();if("error"===r.text)throw new Error("Could not save the todo!");return e.create("todo",r)}))},models:{todo:ne.b.extend({}),list:ne.b.extend({todos:Object(ne.e)()})},factories:{todo:ne.a.extend({id:function(e){return Number(e)},text:function(){return function(){var e=ae(ie),t=ae(e.values);return e.base.replace("$THING",t)}()},completed:function(){return!1},color:function(){return""}})},serializers:{todo:ce.extend({serialize:function(e,t){var n=function(e){e.id=Number(e.id)},r=ce.prototype.serialize.apply(this,arguments);return r.todo?n(r.todo):r.todos&&r.todos.forEach(n),r}}),list:ce},seeds:function(e){e.createList("todo",5)}}),te.dispatch(T()),a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(l.a,{store:te,children:Object(r.jsx)(ee,{})})}),document.getElementById("root"))},39:function(e,t,n){}},[[1358,1,2]]]);
//# sourceMappingURL=main.5ed3ad5f.chunk.js.map