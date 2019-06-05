
import React, { Component } from 'react';
import firebase from '../firebase';

class FirebaseOrder extends Component {
    constructor(props) {
        super(props);
        this.sendOrder = this.sendOrder.bind(this)
    }

    sendOrder(){
	      const ordersRef=firebase.database().ref().child('orderBreakfast');

	      ordersRef.set([

	      ]);
      }
    render() {
        return (
            <div>
                <button  type="button" className="sumit"
                 onClick={this.sendOrder}>
                     Enviar a Cocina
                </button>
            </div>

        )
    }
}


export default FirebaseOrder
