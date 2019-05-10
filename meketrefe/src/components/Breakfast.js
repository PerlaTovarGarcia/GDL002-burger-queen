import React, {Component} from 'react';
import BreakData from './breakfast.json'



class Breakfast extends Component {
    constructor(){
        super();
        this.state = {
           orders:[]
        }
         this.handleSubmit = this.handleSubmit.bind(this);
}

 handleSubmit(nameItem, price){
    const orders = this.state.orders;

    const order = {
      item: nameItem,
      price: price
    }

    orders.push(order);
    this.props.addOrders(this.state.orders);


    }




    render(){
        return(
        <div>
             {BreakData.map((postDetail, index) =>
              <div key={index} className="flip-card-front">
                <h1 className="activator">{postDetail.name}</h1>
                <h1 className="activator">{postDetail.price}</h1>
                <button variant="warning" onClick={()=>{
                          this.handleSubmit(postDetail.name, postDetail.price);
                      }} type="submit" >Agregar</button>
              </div>


              )}
                </div>

        )
    }
}

export default Breakfast
