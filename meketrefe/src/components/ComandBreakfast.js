import React, {Component} from 'react';
import NameForm from './NameForm';
import Breakfast from './Breakfast';
import {Link}from 'react-router-dom';


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
      <div>

          <Link to="/comandFood" className="link">Comida.</Link>
          <Link to="/" className="link">Salir.</Link>
        <div>

          <div>
          <NameForm  addName={this.addName} />
          </div>

                <div >
                              <div>
                              <Breakfast addOrders={this.addOrders}/>
                              </div>
                </div>

       </div>



       <div>

              <div><h5>Mesero: <span >{this.state.value}</span></h5></div>

           <div>
           {this.state.orders.map((orders, index) =>
                  <div key={index}>
                   <div>Comida {orders.item}</div>
                    <div>Precio {orders.price}</div>
                    <button  onClick={(event) => this.removeRow(event, index)}>eliminar</button>
                  </div>
                )}

           </div>
           </div>

           </div>


    </div>
  );

}

}

export default ComandBreakfast;
