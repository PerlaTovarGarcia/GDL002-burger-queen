import React, {Component} from 'react';
import NameForm from './NameForm';
import BreakfastFirebase from './BreakfastFirebase';
import {Link}from 'react-router-dom';
import firebase from '../firebase';
//import * as firebase from 'firebase/app';


class ComandBreakfast extends Component {
    constructor(props){
        super(props);
        this.state= {
          orders:[],
          value:''
        }
        this.addName = this.addName.bind(this);
        this.addOrders = this.addOrders.bind(this);


     }



addName(value){
this.setState({
  value
});

}

  addOrders(orders){
    console.log(this.state.orders)

    this.setState({
      orders
    });

  }

  removeRow = (event, index) => {
        event.preventDefault();
        this.state.orders.splice(index, 1);
        this.setState({div:this.state.orders});
    }


render(){

 return(

 <div>

           {this.state.orders.map((orders, index) =>

                  <div key={index}>
                   <div>Comida {orders.name}</div>
                    <div>Precio {orders.price}</div>
                    <button  onClick={(event) => this.removeRow(event, index)}>eliminar</button>
                  </div>
                )}


    </div>
  );

}

}

export default ComandBreakfast;
