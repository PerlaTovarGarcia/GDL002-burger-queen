import React, {Component} from 'react';

import FoodData from './food.json'



class Food extends Component {
    constructor(props){
        super(props);
        this.state = {
           ordersFood:[]
        }
         this.hableSUbmit = this.hableSUbmit.bind(this);
}



 hableSUbmit(nameItem, price){
   //console.log(nameItem, price)
   //console.log('props', this.props.addOrders)
    const orders = this.state.ordersFood;

    const order = {
      item: nameItem,
      price: price
    }

    orders.push(order);
    this.props.addOrdersFood(this.state.ordersFood);
    }


    render(){

        return(
        <div>
             {FoodData.map((postDetail, index) =>
              <div key={index}>
                <h1>{postDetail.name}</h1>
                <h1>{postDetail.price}</h1>
                <button onClick={()=>{
                            this.hableSUbmit(postDetail.name, postDetail.price);
                        }} type="submit" >Agregar</button>
              </div>


              )}
                </div>

        )
    }
}

export default Food;
