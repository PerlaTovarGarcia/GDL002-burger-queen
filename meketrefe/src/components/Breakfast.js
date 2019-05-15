import React, {Component} from 'react';

import BreakData from './breakfast.json'



class Breakfast extends Component {
    constructor(props){
        super(props);
        this.state = {
           orders:[]
        }
         this.submit = this.submit.bind(this);
}



 submit(nameItem, price){
   //console.log(nameItem, price)
   //console.log('props', this.props.addOrders)
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
              <div key={index}>
                <h1>{postDetail.name}</h1>
                <h1>{postDetail.price}</h1>
                <button onClick={()=>{
                            this.submit(postDetail.name, postDetail.price);
                        }} type="submit" >Agregar</button>
              </div>


              )}
                </div>

        )
    }
}

export default Breakfast;
