(this["webpackJsonp20_20.03.2020_bulentbey_"]=this["webpackJsonp20_20.03.2020_bulentbey_"]||[]).push([[0],{62:function(e,t,a){e.exports=a(92)},67:function(e,t,a){},68:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(18),r=a.n(c),l=(a(67),a(16)),i=(a(68),a(95)),s=a(98),u=a(96),m=a(97),d=a(53),p=a(52),h=a(59),g={categoriesData:[{name:"Business"},{name:"Entertainment"},{name:"General"},{name:"Health"},{name:"Science"},{name:"Sports"},{name:"Technology"}],categoriesCountry:[{name:"USA",parameter:"us"},{name:"GERMANY",parameter:"de"},{name:"TURKEY",parameter:"tr"}]};var v=function(e){var t=Object(n.useState)(null),a=Object(l.a)(t,2),c=a[0],r=a[1],v=Object(n.useState)(null),y=Object(l.a)(v,2),f=y[0],b=y[1],E=Object(n.useState)(null),w=Object(l.a)(E,2),x=w[0],k=w[1];return e.click(f,x),o.a.createElement("div",{style:{fontFamily:"Special Elite, cursive"}},o.a.createElement(i.a,{fixed:"top",expand:"md",bg:"dark",variant:"dark"},o.a.createElement(i.a.Brand,{href:"/"},"YVZ NEWS ",o.a.createElement(h.a,{className:"iconn"})),o.a.createElement(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(i.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(s.a,{className:"mr-auto"},o.a.createElement(s.a.Link,{href:"/"},"Home"),o.a.createElement(u.a,{title:"Categories",id:"basic-nav-dropdown"},g.categoriesData.map((function(e,t){return o.a.createElement(u.a.Item,{key:t,onClick:function(){return b("".concat(e.name.toLowerCase()))}},e.name)}))),o.a.createElement(u.a,{title:"Country",id:"basic-nav-dropdown"},g.categoriesCountry.map((function(e,t){return o.a.createElement(u.a.Item,{key:t,onClick:function(){return k("".concat(e.parameter))}},e.name)})))),o.a.createElement(m.a,{inline:!0,onSubmit:function(t){t.preventDefault(),e.click3(c),r("")}},o.a.createElement(d.a,{type:"text",value:c,onChange:function(e){return r(e.target.value)},placeholder:"Search",className:"mr-sm-2",autoComplete:"off"}),o.a.createElement(p.a,{type:"submit",variant:"outline-success"},"Search")))))},y=a(54),f=a(55),b=a(60),E=a(57),w=a(61),x=a(94),k=a(99);var j=function(e){return o.a.createElement("div",{style:{width:e.newWidth,height:e.newHeight}},o.a.createElement("div",{className:"m-2 shadow cardbox"},o.a.createElement(k.a,null,o.a.createElement(k.a.Img,{variant:"top",src:e.urlToImage,style:{height:"200px"}}),o.a.createElement(k.a.Title,{className:"cardTitle mb-1",style:{height:"130px",padding:"8px"}},e.title),o.a.createElement(k.a.Text,{className:"cardText mb-1",style:{height:e.newTextHeight,padding:"8px"}},e.description),o.a.createElement(p.a,{className:"m-2",style:{display:e.display},variant:"outline-primary",onClick:e.click},"Read More"))))},O=a(58),S=a.n(O),T=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(o)))).state={data:[{urlToImage:null,title:null,description:null}],activeNewIndex:0,newsDetail:null},a}return Object(w.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount cal\u0131\u015ft\u0131"),console.log(this.props.country),console.log(this.props.category);var t="https://newsapi.org/v2/top-headlines?"+(null!==this.props.country?"country=".concat(this.props.country,"&"):"country=us&")+(null!==this.props.category?"category=".concat(this.props.category,"&"):"category=general&")+"apiKey=4120e32fdd1049bb95ff351e584be75d";S.a.get(t).then((function(t){console.log(t),e.setState({data:t.data.articles})})).catch((function(e){return console.log(e)}))}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate calisti")}},{key:"render",value:function(){var e=this;console.log("render calisti"),console.log(this.props.country),console.log(this.props.category);var t=this.state.data.map((function(t,a){return o.a.createElement(j,Object.assign({key:a},t,{newWidth:"25%",newHeight:"570px",newTextHeight:"150px",click:function(){return t=a,void e.setState({activeNewIndex:t});var t}}))})),a=this.state.activeNewIndex;return o.a.createElement("div",{style:{marginTop:"65px"}},o.a.createElement("div",{style:{width:"70%",float:"left"}},o.a.createElement(x.a,null,t)),o.a.createElement("div",{style:{width:"30%",float:"left",position:"fixed",top:"65px",right:0}},o.a.createElement("div",null,o.a.createElement(j,{click:function(){console.log(e.state.data[a].url),window.location.href=e.state.data[a].url},newWidth:"100%",newHeight:"570px",newTextHeight:"204px",urlToImage:this.state.data[a].urlToImage,title:this.state.data[a].title,description:this.state.data[a].description}))))}}]),t}(n.Component);var C=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),i=Object(l.a)(r,2),s=i[0],u=i[1],m=Object(n.useState)(null),d=Object(l.a)(m,2),p=d[0],h=d[1];return o.a.createElement("div",null,o.a.createElement(v,{click:function(e,t){console.log(e),console.log(t),c(e),u(t),console.log(a),console.log(s)},click3:function(e){h(e)}}),o.a.createElement(T,{category:a,country:s,search:p}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(91);r.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.5a92ca99.chunk.js.map