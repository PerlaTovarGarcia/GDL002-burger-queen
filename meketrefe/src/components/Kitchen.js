import React, {Component} from 'react';
import {Link}from 'react-router-dom';
import '../css/links.css';
import '../css/breacfast.css';
//import logo from '../imagenes/logo3.png';
import firebase from '../firebase';

class Kitchen extends Component {
  constructor(props) {
    super(props);
    this.state={
      orders:[]

    };


  };
  componentDidMount() {
    console.log('el componente se agregó al DOM')
    function snapshotToArray(snapshot){
            let orders = []

            snapshot.forEach(order => {
                const items = order.val();
                items.key = order.key;

                orders.push(items)
            });
            return orders
        }
        const dbFoodOrdersRef = firebase.database().ref();
        const foodOrdersRef = dbFoodOrdersRef.child('ComandBreakfast/');
        foodOrdersRef.on("value", s=>{
            const ordersForArray = snapshotToArray(s);
            this.setState({
                orders: ordersForArray
            })
        })

  }

  removeRow = (event, index) => {
        event.preventDefault();
        this.state.orders.splice(index, 1);
        this.setState({div:this.state.orders});
    }


render(){
  console.log(this.state.orders);
 return(

<div>
          <button className = 'but'><Link to="/" className = 'buttons' style={{ textDecoration: 'none'}}>Salir.</Link></button>

      <div className = 'contenedorOrder container cont'>
      {this.state.orders.map((order, index) =>{
        return(
                   <div key={index} className = 'card'>
                       <h5 >Orden #{index+1}</h5>
                       <div >
                           {order.map((item, index)=>
                           <div key={index}>
                               <p>{item.name}</p>

                           </div>
                           )}
                           <button className="sumit" onClick={(event) => this.removeRow(event, index)}>Pedido listo</button>
                      </div>
                  </div>
)})}

      </div>
</div>

)}

}


export default Kitchen;
