(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(3),c=a.n(s),m=a(1),r=(a(9),a(10),a(11),function(){return l.a.createElement("div",{className:"PostsList"},l.a.createElement("h2",null,"Posts:"),l.a.createElement("ul",{className:"PostsList__list"},l.a.createElement("li",{className:"PostsList__item"},l.a.createElement("div",null,l.a.createElement("b",null,"[User #1]: "),"sunt aut facere repellat provident occaecati excepturi optio"),l.a.createElement("button",{type:"button",className:"PostsList__button button"},"Close")),l.a.createElement("li",{className:"PostsList__item"},l.a.createElement("div",null,l.a.createElement("b",null,"[User #2]: "),"et ea vero quia laudantium autem"),l.a.createElement("button",{type:"button",className:"PostsList__button button"},"Open"))))}),o=(a(12),function(){return l.a.createElement("form",{className:"NewCommentForm"},l.a.createElement("div",{className:"form-field"},l.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input"})),l.a.createElement("div",{className:"form-field"},l.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input"})),l.a.createElement("div",{className:"form-field"},l.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input"})),l.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),u=(a(13),function(){return l.a.createElement("div",{className:"PostDetails"},l.a.createElement("h2",null,"Post details:"),l.a.createElement("section",{className:"PostDetails__post"},l.a.createElement("p",null,"sunt aut facere repellat provident occaecati excepturi optio")),l.a.createElement("section",{className:"PostDetails__comments"},l.a.createElement("button",{type:"button",className:"button"},"Hide 2 comments"),l.a.createElement("ul",{className:"PostDetails__list"},l.a.createElement("li",{className:"PostDetails__list-item"},l.a.createElement("button",{type:"button",className:"PostDetails__remove-button button"},"X"),l.a.createElement("p",null,"My first comment")),l.a.createElement("li",{className:"PostDetails__list-item"},l.a.createElement("button",{type:"button",className:"PostDetails__remove-button button"},"X"),l.a.createElement("p",null,"sad sds dfsadf asdf asdf")))),l.a.createElement("section",null,l.a.createElement("div",{className:"PostDetails__form-wrapper"},l.a.createElement(o,null))))});function i(){return(e="".concat("https://mate-api.herokuapp.com","/users"),fetch(e,t).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()})).then((function(e){return e.data}))).then((function(e){return e.sort((function(e,t){return e.id-t.id}))})).then((function(e){return e.slice(0,10)}));var e,t}var p=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),o=Object(m.a)(c,2),p=o[0],E=o[1];Object(n.useEffect)((function(){i().then(s)}),[]);return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App__header"},a?l.a.createElement("label",null,"Select a user: \xa0",l.a.createElement("select",{className:"App__user-selector",onChange:function(e){var t=e.target.value;E(t)}},l.a.createElement("option",{value:"0"},"All users"),a.map((function(e){var t=e.name,a=e.id;return l.a.createElement("option",{value:a,key:a},t)})))):l.a.createElement("span",null,"Users are not loaded")),l.a.createElement("main",{className:"App__main"},l.a.createElement("div",{className:"App__sidebar"},l.a.createElement(r,{selectedUserId:p})),l.a.createElement("div",{className:"App__content"},l.a.createElement(u,null))))};c.a.render(l.a.createElement(p,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.08ea1cc1.chunk.js.map