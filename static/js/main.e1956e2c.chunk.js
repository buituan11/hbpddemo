(window.webpackJsonphpbd=window.webpackJsonphpbd||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(7),c=t.n(r),o=(t(13),t(1)),s=t(2),i=t(4),m=t(3),d=t(5),u=(t(14),t(15),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).move=function(e){var a=e+t.state.currdeg;t.setState({currdeg:a})},t.pushColor=function(e){if("undefined"!==typeof Storage){var a=JSON.parse(localStorage.getItem("color")),t=0;a.map((function(a){a===e&&(t=1)})),0===t&&a.push(e),localStorage.setItem("color",JSON.stringify(a))}else alert("Khong ho tro")},t.state={currdeg:0},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"menu-tab"},n.a.createElement("div",{className:"slider"},n.a.createElement("div",{className:"carousel",style:{transform:"rotateY("+this.state.currdeg+"deg)",transformStyle:"preserve-3d",transition:"transform 1s"}},n.a.createElement("div",{className:"item a"}),n.a.createElement("div",{className:"item b"}),n.a.createElement("div",{className:"item c"}),n.a.createElement("div",{className:"item d"}),n.a.createElement("div",{className:"item e"},n.a.createElement("button",{className:"button-color",style:{backgroundColor:"yellow"},onClick:function(){return e.pushColor("yellow")}})),n.a.createElement("div",{className:"item f"},n.a.createElement("button",{className:"button-color",style:{backgroundColor:"#F86B88"},onClick:function(){return e.pushColor("#F86B88")}})))),n.a.createElement("div",{className:"next",onClick:function(){return e.move(60)}}," ",n.a.createElement("i",{className:"fas fa-chevron-right"})," "),n.a.createElement("div",{className:"prev",onClick:function(){return e.move(-60)}}," ",n.a.createElement("i",{className:"fas fa-chevron-left"})," "))}}]),a}(l.Component)),f=(t(16),function(e){function a(){var e,t;Object(o.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).pushStuff=function(e){var a=JSON.parse(localStorage.getItem("stuff"));-1===a.indexOf(e)&&a.push(e),localStorage.setItem("stuff",JSON.stringify(a))},t.renderProfile=function(e,a,l,r,c,o){return n.a.createElement("div",{className:"col-lg-6 col-12"},n.a.createElement("div",{className:"profile-item"},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis eni"),n.a.createElement("ul",null,n.a.createElement("p",null,"adasasdaad"),c.map((function(e,a){return n.a.createElement("li",{key:a},e)}))),n.a.createElement("div",{id:o,onClick:function(){return t.pushStuff(o)}})))},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"profile-tab"},n.a.createElement("div",{className:"aa container-fluid"},n.a.createElement("div",{className:"duck"},n.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1569239394/Hpbd/vit.png",alt:""})),n.a.createElement("div",{className:"row"},this.renderProfile("AA","Nam","18","AAA",[1,2,3,4],"stuff-a"),this.renderProfile("BB","Nu","18","BBB",[1,2,3,4],"stuff-b")))))}}]),a}(l.Component)),h=(t(17),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).pushColor=function(e){if("undefined"!==typeof Storage){for(var a=t.state.color,l=0,n=0,r=a.length;n<r;n++)if(a[n]===e){l=1;break}0===l&&a.push(e),localStorage.setItem("color",JSON.stringify(a)),t.setState({color:a})}else alert("Khong ho tro localStorage")},t.pushStuff=function(e,a){if("undefined"!==typeof Storage){for(var l=t.state.stuff,n=0,r=0,c=l.length;r<c;r++)l[r]===e&&n++;n!==a&&l.push(e),localStorage.setItem("stuff",JSON.stringify(l)),t.setState({stuff:l})}else alert("Khong ho tro localStorage")},t.contactT=function(){alert("H\u1ecfi ch\xfa Tu\u1ea5n :3")},t.renderHint=function(){return n.a.createElement("div",null,n.a.createElement("button",{className:"question","data-toggle":"modal","data-target":"#question"},"               ",n.a.createElement("i",{className:"fas fa-question"})),n.a.createElement("div",{className:"modal fade",id:"question",tabIndex:-1,role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("h5",{className:"modal-title",id:"exampleModalLongTitle"},"Hint"),n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{className:"modal-body"},n.a.createElement("div",{className:"hint"},n.a.createElement("p",null,"Mu\u1ed1n m\u1edf qu\u1ea3 th\xec ph\u1ea3i l\xe0m b\xe1nh. Mu\u1ed1n l\xe0m b\xe1nh th\xec ph\u1ea3i \u0111i ki\u1ebfm \u0111\u1ed3"),n.a.createElement("p",null,"T\xecm trong Menu, Profile, Cake \u0111\u1ec3 l\u1ea5y m\xe0u, l\u1ea5y b\xe1nh, l\u1ea5y n\u1ebfn :3"),n.a.createElement("p",null,"V\xed d\u1ee5 nh\u01b0 n\xe0y"),n.a.createElement("div",{className:"example container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xl-12 col-12 row"},n.a.createElement("button",{className:"col-xl-2 col-2 button-color-eg",style:{backgroundColor:"#672907"},onClick:function(){return t.pushColor("#672907")}}),n.a.createElement("p",{className:"col-xl-10 col-10"},"\u0110\xe2y l\xe0 m\xe0u socola. B\u1ea5m v\xe0o th\xec n\xf3 s\u1ebd hi\u1ec7n m\xe0u \u1edf Color")),n.a.createElement("div",{className:"col-xl-12 col-12 row"},n.a.createElement("div",{className:"col-xl-3 col-3 stuff-eg"}),n.a.createElement("p",{className:"col-xl-9 col-9"},"\u0110\xe2y l\xe0 t\u1ea7ng b\xe1nh. B\u1ea5m v\xe0o th\xec n\xf3 s\u1ebd hi\u1ec7n b\xe1nh \u1edf Stuff")),n.a.createElement("p",{className:"col-xl-12 col-12"},"T\xecm m\xe0u, t\xecm n\u1ebfn, ... \u1edf kh\u1eafp n\u01a1iiii :>"))))),n.a.createElement("div",{className:"modal-footer"},n.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",onClick:function(){return t.contactT()}},"Cancel"),n.a.createElement("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal"},n.a.createElement("i",{className:"fas fa-thumbs-up"})))))))},t.renderStuff=function(){var e=localStorage.getItem("candle");return n.a.createElement("div",{className:"stuff-cake"},t.state.stuff.map((function(a,l){return"candle"!==a?n.a.createElement("div",{key:l,id:a,onClick:function(){return t.addStuff(a)}}):n.a.createElement("div",{key:l,id:"stuff-candle",onClick:function(){return t.addStuff(a)}},n.a.createElement("img",{src:e,alt:""}),n.a.createElement("div",null))})))},t.renderCake=function(){var e=localStorage.getItem("candle");return n.a.createElement("div",{className:"place"},t.state.cake.map((function(a,l){return"object"===typeof a?n.a.createElement("div",{key:l,id:"top"},a.map((function(a,t){return n.a.createElement("div",{key:t,id:"candle"},n.a.createElement("img",{src:e,alt:""}),n.a.createElement("div",null))}))):"stuff-a"===a?n.a.createElement("div",{key:l,id:"a-1"},n.a.createElement("div",{id:"a-2",style:{backgroundColor:t.state.cake[l+1]}})):"stuff-b"===a?n.a.createElement("div",{key:l,id:"b-1"},n.a.createElement("div",{id:"b-2",style:{backgroundColor:t.state.cake[l+1]}})):void 0})))},t.addStuff=function(e){var a=t.state.cake,l=t.state.stuff;if(console.log(a.length),0===a.length)if("candle"===e){a.push([1]),console.log(typeof a[0]);var n=l.indexOf("candle");l.splice(n,1)}else a.push(e);else if(a.length<4)if("object"===typeof a[a.length-1])if("candle"===e){a[a.length-1].push(1);var r=l.indexOf("candle");l.splice(r,1)}else alert("C\u1eafm n\u1ebfn r\u1ed3i th\xec sao \u0111\u1ec3 b\xe1nh l\xean \u0111\u01b0\u1ee3c?? :D ??");else if("candle"===e){a.push([1]);var c=l.indexOf("candle");l.splice(c,1)}else 1===a.length||3===a.length?alert("Th\xeam l\u1edbp ph\u1ee7 b\xe1nh \u0111\xe3 :>"):a.push(e);else if(a.length>=4)if(console.log("aaaaa"),4===a.length)if("candle"===e){a.push([1]);var o=l.indexOf("candle");l.splice(o,1)}else alert("B\xe1nh cao qu\xe1 b\u1ecb \u0111\u1ed5");else if("object"===typeof a[a.length-1])if("candle"===e){a[a.length-1].push(1);var s=l.indexOf("candle");l.splice(s,1)}else alert("B\xe1nh cao qu\xe1 b\u1ecb \u0111\u1ed5");localStorage.setItem("stuff",JSON.stringify(l)),localStorage.setItem("cake",JSON.stringify(a)),t.setState({cake:a,stuff:l})},t.addColor=function(e){var a=t.state.cake;0===a.length?alert("Th\xeam t\u1ea7ng b\xe1nh \u0111\xe3 :>"):"object"===typeof a[a.length-1]?alert("C\u1eafm n\u1ebfn r\u1ed3i th\xec sao \u0111\u1ec3 b\xe1nh l\xean \u0111\u01b0\u1ee3c?? :D ??"):1===a.length||3===a.length?a.push(e):a[a.length-1]=e,localStorage.setItem("cake",JSON.stringify(a)),t.setState({cake:a})},t.remake=function(){var e=[];localStorage.setItem("cake",JSON.stringify(e)),t.setState({cake:e})},t.renderOpen=function(){var e=["stuff-a","#672907","stuff-b","yellow",[1,1,1]],a="#accept";e.length!==t.state.cake.length&&(a="#deny");for(var l=0,r=e.length;l<r-1;l++)e[l]!==t.state.cake[l]&&(a="#deny");return n.a.createElement("div",{className:"col-xl-6 col-6"},n.a.createElement("button",{type:"button",className:"btn btn-primary","data-toggle":"modal","data-target":a},"M\u1edf kh\xf3a ",n.a.createElement("i",{className:"fas fa-birthday-cake"})),n.a.createElement("div",{className:"modal fade",id:"deny",tabIndex:-1,role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog",role:"document"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"M\u1edf kh\xf3a"),n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{className:"modal-body"},n.a.createElement("p",null,"L\xe0m nh\u01b0 n\xe0y \u0111\u1ec3 m\u1edf kh\xf3a :>"),n.a.createElement("p",null,"L\xe0m xong \u1ea5n l\u1ea1i m\u1edf kh\xf3a l\xe0 \u0111\u01b0\u1ee3c"),n.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1571046101/Hpbd/done.jpg",alt:""})),n.a.createElement("div",{className:"modal-footer"},n.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"))))),n.a.createElement("div",{className:"modal fade",id:"accept",tabIndex:-1,role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog",role:"document"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"M\u1edf kh\xf3a"),n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{className:"modal-body"},n.a.createElement("p",null,"Ch\xfac m\u1eebng sinh nh\u1eadt :>"),n.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1571057270/Hpbd/bb.jpg",alt:""})),n.a.createElement("div",{className:"modal-footer"},n.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"))))))},t.state={color:[],stuff:[],cake:[]},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("color")),a=JSON.parse(localStorage.getItem("stuff")),t=JSON.parse(localStorage.getItem("cake"));this.setState({color:e,stuff:a,cake:t})}},{key:"render",value:function(){var e=this,a=localStorage.getItem("candle");return n.a.createElement("div",{className:"cake"},n.a.createElement("div",{className:"cake-candle",onClick:function(){return e.pushStuff("candle",3)}},n.a.createElement("img",{src:a,alt:""}),n.a.createElement("div",null)),this.renderCake(),this.renderHint(),n.a.createElement("div",{className:"make container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"color col-xl-3"},n.a.createElement("p",null,"Color"),n.a.createElement("div",{className:"color-cake"},this.state.color.map((function(a,t){return n.a.createElement("div",{key:t,className:"color-item",style:{backgroundColor:a},onClick:function(){return e.addColor(a)}})})))),n.a.createElement("div",{className:"stuff col-xl-5"},n.a.createElement("p",null,"Stuff"),this.renderStuff()),n.a.createElement("div",{className:"col-xl-4 container-fluid btn-cake"},n.a.createElement("div",{className:"row"},n.a.createElement("button",{className:"btn btn-danger col-xl-6 col-6",onClick:function(){return e.remake()}},"Remake(L\xe0m l\u1ea1i) ",n.a.createElement("i",{className:"fas fa-undo"})),this.renderOpen())))))}}]),a}(l.Component)),g=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).activeMenu=function(e,a){for(var l=document.getElementsByClassName("menu"),n=0;n<l.length;n++)l[n].id="";e.target.id="active",t.setState({render:a})},t.renderMenu=function(){return 0===t.state.render?n.a.createElement(u,null):1===t.state.render?n.a.createElement(f,null):2===t.state.render?n.a.createElement(h,null):void 0},t.pushColor=function(e){if("undefined"!==typeof Storage){var a=JSON.parse(localStorage.getItem("color")),t=0;a.map((function(a){a===e&&(t=1)})),0===t&&a.push(e),localStorage.setItem("color",JSON.stringify(a))}else alert("Khong ho tro")},t.warning=function(){alert("H\u1ecdc \u0111eeeeeeeeeeeeee")},t.renderRemind=function(){return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("button",{className:"remind","data-toggle":"modal","data-target":"#remindEnglish"},"                ",n.a.createElement("i",{className:"fas fa-exclamation"})),n.a.createElement("div",{className:"modal fade",id:"remindEnglish",tabIndex:-1,role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("h5",{className:"modal-title",id:"exampleModalLongTitle"},"Remind"),n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{className:"modal-body"},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis eni")),n.a.createElement("div",{className:"modal-footer"},n.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",onClick:function(){return t.warning()}},"Yesn't"),n.a.createElement("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal"},"Yes"))))))},t.state={render:0},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){"undefined"!==typeof Storage?(localStorage.clear(),localStorage.setItem("color",JSON.stringify([])),localStorage.setItem("stuff",JSON.stringify([])),localStorage.setItem("cake",JSON.stringify([])),localStorage.setItem("candle","https://res.cloudinary.com/buituan/image/upload/v1570613855/Hpbd/fire.png")):alert("Khong ho tro")}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement("header",null,n.a.createElement("ul",null,n.a.createElement("li",{className:"menu",id:"active",onClick:function(a){return e.activeMenu(a,0)}},"Menu"),n.a.createElement("li",{className:"menu",id:"",onClick:function(a){return e.activeMenu(a,1)}},"Profile"),n.a.createElement("li",{className:"menu",id:"",onClick:function(a){return e.activeMenu(a,2)}},"Cake"))),this.renderMenu(),1===this.state.render?this.renderRemind():null)}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.e1956e2c.chunk.js.map