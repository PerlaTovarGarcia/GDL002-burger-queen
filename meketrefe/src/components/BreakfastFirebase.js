  import React, {Component} from 'react';
  import {Link}from 'react-router-dom';
  import NameForm from './NameForm';
  import firebase from '../firebase';
  import '../css/breacfast.css';
  import '../css/links.css';
  import '../css/nameForm.css';


  class BreakfastFirebase extends Component {
    constructor(props) {
      super(props);
      this.state={
        orders:[],
        comands:[],
        value:'',
        total:0

      };
      //this.componentOrders = this.componentOrders.bind(this);
      this.submit = this.submit.bind(this);
      this.addName = this.addName.bind(this);
      this.sumItem = this.sumItem.bind(this);
      this.updateOrderToFirebase = this.updateOrderToFirebase.bind(this);

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
      //this.props.addOrders(this.state.new);
      /*const ordersRef=firebase.database().ref().child('order');
       ordersRef.set([
           comands
      ]);*/
      //this.componentComands();
    }

    componentOrders(){
      const ordersRef=firebase.database().ref().child('breakfast');

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
          }

        this.setState({

          orders: newState,

        });

      });

    }


    updateOrderToFirebase = props =>{
     let order = this.props.order;
     const foodOrder =  firebase.database().ref('Ordenes/').child("order").push().key;
     let updates = {};
     updates["Ordenes/" + foodOrder] = order;
     return (firebase.database().ref().update(updates), order="")
    }


    sumItem () {
        const itemPrice = this.state.comands.map((el) => el.price)
        const products = itemPrice.reduce((sum, result) => {
            return sum + result;
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
        <div >
        <button className = 'but'><Link to="/food" className = 'buttons' >Comida.</Link></button>
        <button className = 'but'><Link to="/" className = 'buttons' >Salir.</Link></button>
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
        <div className="container">
                   {console.log(this.props.order)}
                   <button type="submit"  onClick={this.updateOrderToFirebase}>Enviar a cocina</button>
               </div>
        </div>


      )

    };
  }
  export default BreakfastFirebase;
