import React, {Component} from 'react';
import NameForm from './NameForm';
import Breakfast from './Breakfast';


class Comand extends Component {
    constructor(props){
        super(props);
        this.state= {
          orders:[],
          value:'Perla'
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

export default Comand;
