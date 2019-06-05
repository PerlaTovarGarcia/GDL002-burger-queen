import React, {Component} from 'react';
import {Link}from 'react-router-dom';
import '../css/links.css';
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


render(){
  console.log(this.state.orders);
 return(

<div>
          <button className = 'but'><Link to="/" className = 'buttons' >Salir.</Link></button>

      <div>
      {this.state.orders.map((order, index) =>{
        return(
                   <div key={index}>
                       <h5 >Orden #{index+1}</h5>
                       <div >
                           {order.map((item, index)=>
                           <div key={index}>
                               <p>{item.name}</p>
                           </div>
                           )}

                      </div>
                  </div>
)})}

      </div>
</div>

)}

}


export default Kitchen;
