(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){},33:function(e,t,a){e.exports=a.p+"static/media/logo2.c7987921.png"},34:function(e,t,a){e.exports=a(59)},39:function(e,t,a){},40:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),o=a.n(c),s=(a(39),a(6)),l=a(7),i=a(9),m=a(8),u=a(10),d=(a(40),a(5)),b=a(15),v=(a(18),a(21),a(24));v.initializeApp({apiKey:"AIzaSyAnXHhFrG9kh8v_vSHf1U6Cr4M5NoORW8s",authDomain:"mi-proyecto-fabuloso-23cca.firebaseapp.com",databaseURL:"https://mi-proyecto-fabuloso-23cca.firebaseio.com",projectId:"mi-proyecto-fabuloso-23cca",storageBucket:"mi-proyecto-fabuloso-23cca.appspot.com",messagingSenderId:"102580805316",appId:"1:102580805316:web:81284ffc36c50cc4"});var p=v,h=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).removeRow=function(e,t){e.preventDefault(),a.state.orders.splice(t,1),a.setState({div:a.state.orders})},a.state={orders:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("el componente se agreg\xf3 al DOM"),p.database().ref().child("ComandBreakfast/").on("value",function(t){var a=function(e){var t=[];return e.forEach(function(e){var a=e.val();a.key=e.key,t.push(a)}),t}(t);e.setState({orders:a})})}},{key:"render",value:function(){var e=this;return console.log(this.state.orders),r.a.createElement("div",null,r.a.createElement("button",{className:"but"},r.a.createElement(d.b,{to:"/",className:"buttons",style:{textDecoration:"none"}},"Salir.")),r.a.createElement("div",{className:"contenedorOrder container cont"},this.state.orders.map(function(t,a){return r.a.createElement("div",{key:a,className:"card"},r.a.createElement("h5",null,"Orden #",a+1),r.a.createElement("div",null,t.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",null,e.name))}),r.a.createElement("button",{className:"sumit",onClick:function(t){return e.removeRow(t,a)}},"Pedido listo")))})))}}]),t}(n.Component),f=a(33),E=a.n(f),O=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:E.a,alt:"Logo",style:{width:"103%",height:"100%"}})),r.a.createElement("div",{className:"buttonsInicio"},r.a.createElement(d.b,{to:"kitchen",className:"buttons",style:{textDecoration:"none"}},"Cocina."),r.a.createElement(d.b,{to:"breakfastFirebase",className:"buttons",style:{textDecoration:"none"}},"Pedidos.")))}}]),t}(n.Component),k=a(20),y=a(4),N=(a(23),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={value:"Perla"},a.handleChange=a.handleChange.bind(Object(y.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(y.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e,t){e.preventDefault(),this.props.addName(this.state.value)}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{className:"butt"},"Mesero que atendio:",r.a.createElement("select",{className:"orderSelect",variant:"warning",value:this.state.value,onChange:this.handleChange},r.a.createElement("option",{value:"Perla"},"Perla"),r.a.createElement("option",{value:"Gerardo"},"Gerardo"),r.a.createElement("option",{value:"Sandra"},"Sandra"),r.a.createElement("option",{value:"Luis"},"Luis"))),r.a.createElement("input",{className:"sumit",type:"submit",value:"Submit"}))}}]),t}(n.Component)),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).sendOrder=function(){var e=a.state.comands,t={};return t["ComandBreakfast/"+p.database().ref("ComandBreakfast/").child("order").push().key]=e,console.log("updates",t),p.database().ref().update(t)},a.removeRow=function(e,t){e.preventDefault(),a.state.comands.splice(t,1),a.setState({div:a.state.comands})},a.state={orders:[],comands:[],value:"",total:0},a.submit=a.submit.bind(Object(y.a)(a)),a.addName=a.addName.bind(Object(y.a)(a)),a.sumItem=a.sumItem.bind(Object(y.a)(a)),a.sendOrder=a.sendOrder.bind(Object(y.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"addName",value:function(e){this.setState({value:e})}},{key:"submit",value:function(e,t){var a={name:e,price:t};this.setState({comands:[].concat(Object(k.a)(this.state.comands),[a])})}},{key:"componentDidMount",value:function(){console.log("el componente se agreg\xf3 al DOM"),this.componentOrders()}},{key:"componentOrders",value:function(){var e=this;p.database().ref().child("food").on("value",function(t){var a=t.val(),n=[];for(var r in a)n.push({id:r,image:a[r].image,name:a[r].name,price:a[r].price}),console.log(n);e.setState({orders:n})})}},{key:"sumItem",value:function(){var e=this.state.comands.map(function(e){return e.price}).reduce(function(e,t){return+e+ +t});this.setState({total:e})}},{key:"render",value:function(){var e=this;return console.log(this.state.comands),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{className:"but"},r.a.createElement(d.b,{to:"/BreakfastFirebase",className:"buttons",style:{textDecoration:"none"}},"Desayuno.")),r.a.createElement("button",{className:"but"},r.a.createElement(d.b,{to:"/",className:"buttons",style:{textDecoration:"none"}},"Salir."))),r.a.createElement("div",null,r.a.createElement(N,{addName:this.addName})),r.a.createElement("div",null,r.a.createElement("span",{className:"cont"},this.state.orders.map(function(t){return r.a.createElement("div",{className:"card",style:{margin:"1%"},key:t.name},r.a.createElement("div",null,r.a.createElement("img",{src:t.image,alt:""})),r.a.createElement("span",{className:"container"},r.a.createElement("h3",null,t.name),r.a.createElement("p",null,t.price),r.a.createElement("button",{className:"sumit",onClick:function(){e.submit(t.name,t.price)},type:"submit"},"Agregar")))}))),r.a.createElement("div",null,r.a.createElement("div",{className:"butt"},r.a.createElement("h5",null,"Mesero: ",r.a.createElement("span",null,this.state.value)))),r.a.createElement("div",null,r.a.createElement("div",null,this.state.comands.map(function(t,a){return r.a.createElement("div",{className:"contenedorOrder",key:a},r.a.createElement("h3",{className:"order"},t.name),r.a.createElement("p",{className:"order"},t.price),r.a.createElement("button",{className:"sumit",onClick:function(t){return e.removeRow(t,a)}},"eliminar"))}))),r.a.createElement("div",null,r.a.createElement("button",{className:"sumit",onClick:this.sumItem},"Total: $ ",this.state.total))),r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"sumit",onClick:this.sendOrder},"Enviar a Cocina")))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).sendOrder=function(){var e=a.state.comands,t={};return t["ComandBreakfast/"+p.database().ref("ComandBreakfast/").child("order").push().key]=e,console.log("updates",t),p.database().ref().update(t)},a.removeRow=function(e,t){e.preventDefault(),a.state.comands.splice(t,1),a.setState({div:a.state.comands})},a.state={orders:[],comands:[],value:"",total:0},a.submit=a.submit.bind(Object(y.a)(a)),a.addName=a.addName.bind(Object(y.a)(a)),a.sumItem=a.sumItem.bind(Object(y.a)(a)),a.sendOrder=a.sendOrder.bind(Object(y.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"addName",value:function(e){this.setState({value:e})}},{key:"submit",value:function(e,t){var a={name:e,price:t};this.setState({comands:[].concat(Object(k.a)(this.state.comands),[a])})}},{key:"componentDidMount",value:function(){this.componentOrders()}},{key:"componentOrders",value:function(){var e=this;p.database().ref().child("breakfast").on("value",function(t){var a=t.val(),n=[];for(var r in a)n.push({id:r,image:a[r].image,name:a[r].name,price:a[r].price});e.setState({orders:n})})}},{key:"sumItem",value:function(){var e=this.state.comands.map(function(e){return e.price}).reduce(function(e,t){return+e+ +t});this.setState({total:e})}},{key:"render",value:function(){var e=this;return console.log(this.state.comands),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{className:"but"},r.a.createElement(d.b,{to:"/food",className:"buttons",style:{textDecoration:"none"}},"Comida.")),r.a.createElement("button",{className:"but"},r.a.createElement(d.b,{to:"/",className:"buttons",style:{textDecoration:"none"}},"Salir."))),r.a.createElement("div",null,r.a.createElement(N,{addName:this.addName})),r.a.createElement("div",null,r.a.createElement("span",{className:"cont"},this.state.orders.map(function(t){return r.a.createElement("div",{className:"card",style:{margin:"1%"},key:t.name},r.a.createElement("div",null,r.a.createElement("img",{src:t.image,alt:""})),r.a.createElement("span",{className:"container"},r.a.createElement("h3",null,t.name),r.a.createElement("p",null,t.price),r.a.createElement("button",{className:"sumit",onClick:function(){e.submit(t.name,t.price)},type:"submit"},"Agregar")))}))),r.a.createElement("div",null,r.a.createElement("div",{className:"butt"},r.a.createElement("h5",null,"Mesero: ",r.a.createElement("span",null,this.state.value)))),r.a.createElement("div",null,r.a.createElement("div",null,this.state.comands.map(function(t,a){return r.a.createElement("div",{className:"contenedorOrder",key:a},r.a.createElement("h3",{className:"order"},t.name),r.a.createElement("p",{className:"order"},t.price),r.a.createElement("button",{className:"sumit",onClick:function(t){return e.removeRow(t,a)}},"eliminar"))}))),r.a.createElement("div",null,r.a.createElement("button",{className:"sumit",onClick:this.sumItem},"Total:",this.state.total))),r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"sumit",onClick:this.sendOrder},"Enviar a Cocina")))}}]),t}(n.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(b.a,{exact:!0,path:"/",component:O}),r.a.createElement(b.a,{path:"/breakfastFirebase",component:j}),r.a.createElement(b.a,{path:"/food",component:g}),r.a.createElement(b.a,{path:"/kitchen",component:h}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.f68b8ada.chunk.js.map