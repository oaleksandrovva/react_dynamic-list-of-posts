(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(3),o=n.n(s),r=n(1),l=(n(9),n(10),"https://mate-api.herokuapp.com");function m(e,t){return fetch(e,t).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()})).then((function(e){return e.data}))}function u(){return m("".concat(l,"/posts"))}n(11);var i=function(e){var t=e.selectedUserId,n=e.setPostId,s=(e.isPostOpen,e.setPostOpen),o=Object(a.useState)([]),l=Object(r.a)(o,2),m=l[0],i=l[1],p=Object(a.useState)(""),f=Object(r.a)(p,2),b=f[0],d=f[1];Object(a.useEffect)((function(){var e;t?(e=t,u().then((function(t){return t.filter((function(t){return t.userId===e}))}))).then(i):u().then(i)}),[t]);var E=function(){s(!1),d("")};return c.a.createElement("div",{className:"PostsList"},c.a.createElement("h2",null,"Posts:"),c.a.createElement("ul",{className:"PostsList__list"},m.map((function(e){var t=e.id,a=e.userId,o=e.title;return c.a.createElement("li",{className:"PostsList__item",key:t},c.a.createElement("div",null,c.a.createElement("b",null,"[User #",a,"]:"),o||"No title"),b!==t?c.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){return function(e){s(!0),d(e),n(e)}(t)}},"Open"):c.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:E},"Close"))}))))},p=(n(12),function(){return c.a.createElement("form",{className:"NewCommentForm"},c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input"})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input"})),c.a.createElement("div",{className:"form-field"},c.a.createElement("textarea",{name:"body",placeholder:"Type comments here",className:"NewCommentForm__input"})),c.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))});n(13);var f=function(e){var t=e.postId,n=Object(a.useState)([]),s=Object(r.a)(n,2),o=s[0],u=s[1],i=Object(a.useState)(null),f=Object(r.a)(i,2),b=f[0],d=f[1],E=Object(a.useState)(!0),_=Object(r.a)(E,2),N=_[0],h=_[1];Object(a.useEffect)((function(){(function(e){return m("".concat(l,"/posts/").concat(e))})(t).then(u),function(e){return m("".concat(l,"/comments")).then((function(t){return t.filter((function(t){return t.postId===e}))}))}(t).then(d)}),[t]);return c.a.createElement("div",{className:"PostDetails"},c.a.createElement("h2",null,"Post details:"),c.a.createElement("section",{className:"PostDetails__post"},c.a.createElement("p",null,o.body||"No description")),c.a.createElement("section",{className:"PostDetails__comments"},c.a.createElement("button",{type:"button",className:"button",onClick:function(e){var t=e.target.textContent;h("Show comments"===t)}},N?"Hide ".concat(b?b.length:""," comments"):"Show comments"),c.a.createElement("ul",{className:"PostDetails__list"},N&&b&&b.map((function(e){var t=e.id,n=e.body;return c.a.createElement("li",{className:"PostDetails__list-item",key:t},c.a.createElement("button",{type:"button",className:"PostDetails__remove-button button"},"X"),c.a.createElement("p",null,n))})))),c.a.createElement("section",null,c.a.createElement("div",{className:"PostDetails__form-wrapper"},c.a.createElement(p,null))))};var b=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),n=t[0],s=t[1],o=Object(a.useState)(""),u=Object(r.a)(o,2),p=u[0],b=u[1],d=Object(a.useState)(""),E=Object(r.a)(d,2),_=E[0],N=E[1],h=Object(a.useState)(!1),v=Object(r.a)(h,2),O=v[0],j=v[1];Object(a.useEffect)((function(){m("".concat(l,"/users")).then((function(e){return e.sort((function(e,t){return e.id-t.id}))})).then((function(e){return e.slice(0,10)})).then(s)}),[]);return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App__header"},n?c.a.createElement("label",null,"Select a user: \xa0",c.a.createElement("select",{className:"App__user-selector",onChange:function(e){var t=e.target.value;b(t)}},c.a.createElement("option",{value:"0"},"All users"),n.map((function(e){var t=e.name,n=e.id;return c.a.createElement("option",{value:n,key:n},t)})))):c.a.createElement("span",null,"Users are not loaded")),c.a.createElement("main",{className:"App__main"},c.a.createElement("div",{className:"App__sidebar"},c.a.createElement(i,{selectedUserId:Number(p),setPostId:N,isPostOpen:O,setPostOpen:j})),c.a.createElement("div",{className:"App__content"},O&&c.a.createElement(f,{postId:Number(_)}))))};o.a.render(c.a.createElement(b,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.9e62835a.chunk.js.map