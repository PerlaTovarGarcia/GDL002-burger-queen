(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){},22:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){e.exports=a.p+"static/media/logo.e6873da0.png"},31:function(e,t,a){e.exports=a.p+"static/media/logo3.07ed333a.png"},34:function(e,t,a){e.exports=a.p+"static/media/logo2.c7987921.png"},36:function(e,t,a){e.exports=a(61)},41:function(e,t,a){},42:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(30),r=a.n(l),o=(a(41),a(5)),s=a(6),i=a(8),m=a(7),u=a(9),d=(a(42),a(4)),b=a(15),p=(a(18),a(31)),v=a.n(p),h=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d.b,{to:"/",className:"buttons"},"Salir."),c.a.createElement("div",null,c.a.createElement("img",{src:v.a,alt:"Logo",style:{width:"100%",height:"100%"}})))}}]),t}(n.Component),E=a(34),f=a.n(E),g=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("img",{src:f.a,alt:"Logo",style:{width:"100%",height:"100%"}})),c.a.createElement("div",{className:"buttonsInicio"},c.a.createElement("button",null,c.a.createElement(d.b,{to:"/kitchen",className:"buttons"},"Cocina.")),c.a.createElement("button",null,c.a.createElement(d.b,{to:"/breakfastFirebase",className:"buttons"},"Pedidos."))))}}]),t}(n.Component),O=a(20),y=a(10),N=(a(22),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={value:"Perla"},a.handleChange=a.handleChange.bind(Object(y.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(y.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e,t){e.preventDefault(),this.props.addName(this.state.value)}},{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("label",{className:"butt"},"Mesero que atendio:",c.a.createElement("select",{className:"orderSelect",variant:"warning",value:this.state.value,onChange:this.handleChange},c.a.createElement("option",{value:"Perla"},"Perla"),c.a.createElement("option",{value:"Gerardo"},"Gerardo"),c.a.createElement("option",{value:"Sandra"},"Sandra"),c.a.createElement("option",{value:"Luis"},"Luis"))),c.a.createElement("input",{className:"sumit",type:"submit",value:"Submit"}))}}]),t}(n.Component)),k=a(24);k.initializeApp({apiKey:"AIzaSyAnXHhFrG9kh8v_vSHf1U6Cr4M5NoORW8s",authDomain:"mi-proyecto-fabuloso-23cca.firebaseapp.com",databaseURL:"https://mi-proyecto-fabuloso-23cca.firebaseio.com",projectId:"mi-proyecto-fabuloso-23cca",storageBucket:"mi-proyecto-fabuloso-23cca.appspot.com",messagingSenderId:"102580805316",appId:"1:102580805316:web:81284ffc36c50cc4"});var j=k,S=(a(28),a(29),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).removeRow=function(e,t){e.preventDefault(),a.state.comands.splice(t,1),a.setState({div:a.state.comands})},a.state={orders:[],comands:[],value:""},a.submit=a.submit.bind(Object(y.a)(a)),a.addName=a.addName.bind(Object(y.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"addName",value:function(e){this.setState({value:e})}},{key:"submit",value:function(e,t){var a={name:e,price:t};this.setState({comands:[].concat(Object(O.a)(this.state.comands),[a])})}},{key:"componentDidMount",value:function(){console.log("el componente se agreg\xf3 al DOM"),this.componentOrders(),this.componentComands()}},{key:"componentOrders",value:function(){var e=this;j.database().ref().child("food").on("value",function(t){var a=t.val(),n=[];for(var c in a)n.push({id:c,image:a[c].image,name:a[c].name,price:a[c].price});e.setState({orders:n})})}},{key:"componentComands",value:function(){j.database().ref().child("orderFood").set([])}},{key:"sumItem",value:function(){var e=this.state.comands.map(function(e){return e.price}).reduce(function(e,t){return e+t});this.setState({total:e})}},{key:"render",value:function(){var e=this;return console.log(this.state.comands),c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("div",{className:"but"},c.a.createElement("button",null,c.a.createElement(d.b,{to:"/BreakfastFirebase",className:"buttons",style:{textDecoration:"none"}},"Desayuno.")),c.a.createElement("button",null,c.a.createElement(d.b,{to:"/",className:"buttons",style:{textDecoration:"none"}},"Salir."))),c.a.createElement("div",null,c.a.createElement(N,{addName:this.addName})),c.a.createElement("div",null,c.a.createElement("span",{className:"cont"},this.state.orders.map(function(t){return c.a.createElement("div",{className:"card",style:{margin:"1%"},key:t.name},c.a.createElement("div",null,c.a.createElement("img",{src:t.image,alt:""})),c.a.createElement("span",{className:"container"},c.a.createElement("h3",null,t.name),c.a.createElement("p",null,t.price),c.a.createElement("button",{className:"sumit",onClick:function(){e.submit(t.name,t.price)},type:"submit"},"Agregar")))}))),c.a.createElement("div",null,c.a.createElement("div",{className:"butt"},c.a.createElement("h5",null,"Mesero: ",c.a.createElement("span",null,this.state.value)))),c.a.createElement("div",null,c.a.createElement("div",null,this.state.comands.map(function(t,a){return c.a.createElement("div",{className:"contenedorOrder",key:a},c.a.createElement("h3",{className:"order"},t.name),c.a.createElement("p",{className:"order"},t.price),c.a.createElement("button",{className:"sumit",onClick:function(t){return e.removeRow(t,a)}},"eliminar"))}))),c.a.createElement("div",null,c.a.createElement("button",{className:"sumit",onClick:this.sumItem},"Total: $ ",this.state.total))))}}]),t}(n.Component)),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).removeRow=function(e,t){e.preventDefault(),a.state.comands.splice(t,1),a.setState({div:a.state.comands})},a.state={orders:[],comands:[],value:"",total:0},a.submit=a.submit.bind(Object(y.a)(a)),a.addName=a.addName.bind(Object(y.a)(a)),a.sumItem=a.sumItem.bind(Object(y.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"addName",value:function(e){this.setState({value:e})}},{key:"submit",value:function(e,t){var a={name:e,price:t};this.setState({comands:[].concat(Object(O.a)(this.state.comands),[a])})}},{key:"componentDidMount",value:function(){console.log("el componente se agreg\xf3 al DOM"),this.componentOrders(),this.componentComands()}},{key:"componentOrders",value:function(){var e=this;j.database().ref().child("breakfast").on("value",function(t){var a=t.val(),n=[];for(var c in a)n.push({id:c,image:a[c].image,name:a[c].name,price:a[c].price});e.setState({orders:n})})}},{key:"componentComands",value:function(){j.database().ref().child("orderBreakfast").set([])}},{key:"sumItem",value:function(){var e=this.state.comands.map(function(e){return e.price}).reduce(function(e,t){return e+t});this.setState({total:e})}},{key:"render",value:function(){var e=this;return console.log(this.state.comands),c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("div",{className:"but"},c.a.createElement("button",null,c.a.createElement(d.b,{to:"/food",className:"buttons"},"Comida.")),c.a.createElement("button",null,c.a.createElement(d.b,{to:"/",className:"buttons"},"Salir."))),c.a.createElement("div",null,c.a.createElement(N,{addName:this.addName})),c.a.createElement("div",null,c.a.createElement("span",{className:"cont"},this.state.orders.map(function(t){return c.a.createElement("div",{className:"card",style:{margin:"1%"},key:t.name},c.a.createElement("div",null,c.a.createElement("img",{src:t.image,alt:""})),c.a.createElement("span",{className:"container"},c.a.createElement("h3",null,t.name),c.a.createElement("p",null,t.price),c.a.createElement("button",{className:"sumit",onClick:function(){e.submit(t.name,t.price)},type:"submit"},"Agregar")))}))),c.a.createElement("div",null,c.a.createElement("div",{className:"butt"},c.a.createElement("h5",null,"Mesero: ",c.a.createElement("span",null,this.state.value)))),c.a.createElement("div",null,c.a.createElement("div",null,this.state.comands.map(function(t,a){return c.a.createElement("div",{className:"contenedorOrder",key:a},c.a.createElement("h3",{className:"order"},t.name),c.a.createElement("p",{className:"order"},t.price),c.a.createElement("button",{className:"sumit",onClick:function(t){return e.removeRow(t,a)}},"eliminar"))}))),c.a.createElement("div",null,c.a.createElement("button",{className:"sumit",onClick:this.sumItem},"Total: $ ",this.state.total))))}}]),t}(n.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement(b.c,null,c.a.createElement(b.a,{path:"/",component:g}),c.a.createElement(b.a,{path:"/breakfastFirebase",component:C}),c.a.createElement(b.a,{path:"/food",component:S}),c.a.createElement(b.a,{path:"/kitchen",component:h})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.954bfa09.chunk.js.map