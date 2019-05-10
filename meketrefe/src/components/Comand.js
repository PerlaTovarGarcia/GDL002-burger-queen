import React, {Component} from 'react';
import NameForm from './component/NameForm';
import Breakfast from './component/Breakfast';

class Comand extends Component {
    constructor(props){
        super(props);
        this.state= {
          orders:[]
        }
        this.addNote = this.addNote.bind(this);
        this.addOrders = this.addOrders.bind(this);


     }

breakBtn(){
    document.getElementById('breakfastIndex').style.display="block";
    document.getElementById('lunchIndex').style.display="none";
  }

sendToKitchen(){
    document.getElementById('orderReady').style.display="block";
    document.getElementById('orderTable').style.display="none";

}

newOrders(){
document.getElementById('orderReady').style.display="none";
document.getElementById('orderTable').style.display="block";

}

addNote(name){
this.setState({
  name
});

  }

addOrders(orders){
this.setState({
  orders
});

}

removeRow = (event, index) => {
        event.preventDefault();
        this.state.orders.splice(index, 1);
        this.setState({tr: this.state.orders});
    }

render(){
 return(

 <div>
      <div>
      
      </div>
 </div>
    );

}

}

export default Comand;
