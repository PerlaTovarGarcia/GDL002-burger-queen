import React, { Component } from 'react';
import firebase from '../firebase';

class FirebaseOrder extends Component {
    constructor(props) {
        super(props);
        this.state
          comands:""
        }
        this.sendOrder = this.sendOrder.bind(this)
    }

    sendOrder= ()=>{
          let order = this.state.comands;
          const foodOrder =  firebase.database().ref('ComandBreakfast/').child('order').push().key;
          let updates = {};
          updates['ComandBreakfast/' + foodOrder] = order;
          console.log('updates', updates);
          return firebase.database().ref().update(updates);


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
