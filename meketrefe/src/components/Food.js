import React, {Component} from 'react';
import {Link}from 'react-router-dom';
//import ComandBreakfast from './BreakfastOrder';
//import ComandBreakfast from './ComandBreakfast';
import NameForm from './NameForm';
import firebase from '../firebase';
import '../css/breacfast.css';
import '../css/links.css';
import '../css/nameForm.css';
//import logo from '../imagenes/logo.png';



class Food extends Component {
  constructor(props) {
    super(props);
    this.state={
      orders:[],
      comands:[],
      value:'',
      total:0

    };

    this.submit = this.submit.bind(this);
    this.addName = this.addName.bind(this);
    this.sumItem = this.sumItem.bind(this);
    this.sendOrder = this.sendOrder.bind(this)

  };

  addName(value){
    this.setState({
      value
    });

  }

  submit(name, price){
    const order = {
      name: name,
      price: price
    }

    this.setState({
      comands:[...this.state.comands,order]

    })
  }



  componentDidMount() {
    console.log('el componente se agregó al DOM')
    this.componentOrders();
  }

  componentOrders(){
    const ordersRef=firebase.database().ref().child('food');

    ordersRef.on('value',(snapshot)=>{
      let ordersNew = snapshot.val();
      let newState=[];
      for(let order in ordersNew){

        newState.push({
          id: order,
          image:ordersNew[order].image,
          name: ordersNew[order].name,
          price: ordersNew[order].price

        });
        console.log(newState);
        }

      this.setState({

        orders: newState,

      });

    });

  }

  sendOrder= ()=>{
      let order = this.state.comands;
      const foodOrder =  firebase.database().ref('ComandBreakfast/').child('order').push().key;
      let updates = {};
      updates['ComandBreakfast/' + foodOrder] = order;
      console.log('updates', updates);
      return firebase.database().ref().update(updates);


  }

  sumItem () {
      const price = this.state.comands.map((el) => el.price)
      const products = price.reduce((sum, result) => {
          return +sum + +result;
      });

      this.setState({
          total: products
      })

  }


  removeRow = (event, index) => {
        event.preventDefault();
        this.state.comands.splice(index, 1);
        this.setState({div:this.state.comands});
    }



  render(){
    console.log(this.state.comands);
    return (
      <div>
      <div>
      <div>
      <button className = 'but'><Link to="/BreakfastFirebase" className = 'buttons' style={{ textDecoration: 'none'}}>Desayuno.</Link></button>
      <button className = 'but'><Link to="/" className = 'buttons' style={{ textDecoration: 'none'}}>Salir.</Link></button>
      </div>
      <div>
      <NameForm  addName={this.addName} />
      </div>
      <div>
      <span className='cont'>
      {this.state.orders.map((postDetail)=>{
        return(
          <div className='card' style={{margin:'1%'}} key={postDetail.name}>
          <div>
              <img src={postDetail.image} alt=""/>
          </div>
          <span className="container">
          <h3>{postDetail.name}</h3>
          <p>{postDetail.price}</p>
          <button className="sumit" onClick={()=>{
            this.submit(postDetail.name, postDetail.price);
          }} type="submit" >Agregar</button>
          </span>
          </div>
        )
      })}

      </span>

      </div>

      <div>
              <div className="butt"><h5>Mesero: <span >{this.state.value}</span></h5></div>
      </div>
      <div>
            <div>
              {this.state.comands.map((comand, index) => {
                return(
                <div  className="contenedorOrder" key={index}>
                <h3  className="order">{comand.name}</h3>
                <p className="order">{comand.price}</p>
                <button className="sumit" onClick={(event) => this.removeRow(event, index)}>eliminar</button>

              </div>
              )}
            )
              }
            </div>
      </div>
          <div>
          <button className="sumit" onClick={this.sumItem}>Total: $ {this.state.total}</button>
          </div>


      </div>
      <div><button  type="button" className="sumit"
       onClick={this.sendOrder}>
           Enviar a Cocina
      </button></div>
      </div>


    )


  };
}
export default Food;
