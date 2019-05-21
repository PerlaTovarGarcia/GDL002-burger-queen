import React, {Component} from 'react';



class ComandBreakfast extends Component{
  render(){
    const order = this.props.comBreakfast.map((food, i) => {
      return(
        <div>
        <ul key={i}>
        <li>
        {food.name}
        <span>{food.price}</span>
        </li>
        </ul>
        </div>
      )
    })
    return(
      order
    )
  }
}

export default ComandBreakfast;
