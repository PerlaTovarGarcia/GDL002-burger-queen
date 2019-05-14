import React, {Component} from 'react';
import NameForm from './NameForm';
import Breakfast from './Breakfast';


class Comand extends Component {
    constructor(props){
        super(props);
        this.state= {
          orders:[]
        }
        this.addName = this.addName.bind(this);
        this.addOrders = this.addOrders.bind(this);


     }


addName(name){
this.setState({
  name
});

}

  addOrders(orders){
    console.log(this.state.orders)
  this.setState({
  orders: [...this.state.orders, orders]
  });

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

              <div><h5>Mesero: <span >{this.state.name}</span></h5></div>



            <div>Comida</div>
            <div>Precio</div>



           <div> {this.state.orders.map((order, index) =>
                  <div key={index}>

                    <div>{order.item}</div>
                    <div>{order.price}</div>
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
