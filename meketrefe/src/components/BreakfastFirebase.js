  import React, {Component} from 'react';
  import {Link}from 'react-router-dom';
  //import ComandBreakfast from './BreakfastOrder';
  //import ComandBreakfast from './ComandBreakfast';
  import NameForm from './NameForm';
  import firebase from '../firebase';


  class BreakfastFirebase extends Component {
    constructor(props) {
      super(props);
      this.state={
        orders:[],
        comands:[],
        value:''

      };
      //this.componentOrders = this.componentOrders.bind(this);
      this.submit = this.submit.bind(this);
      this.addName = this.addName.bind(this);

    };

    addName(value){
      this.setState({
        value
      });

    }
    submit(name, price){
      console.log(name, price)
      //console.log('props', this.props.addOrders)
      //const orders = this.state.orders;

      const order = {
        name: name,
        price: price
      }
      //   console.log(orders)
      this.setState({
        comands:[...this.state.comands, order]
        //this.props.addOrders(this.state.orders);
      })

      //orders.push(order);
      //this.props.addOrders(this.state.orders);
    }



    componentDidMount() {
      console.log('el componente se agregó al DOM')
      this.componentOrders();
      //this.props.addOrders(this.state.new);

    }

    componentOrders(){
      const ordersRef=firebase.database().ref().child('breakfast');

      ordersRef.on('value',(snapshot)=>{
        let ordersNew = snapshot.val();
        let newState=[];
        for(let order in ordersNew){

          newState.push({
            id: order,
            name: ordersNew[order].name,
            price: ordersNew[order].price

          });


        }

        this.setState({

          orders: newState,

        });

      });
      //this.props.addOrders(this.state.orders);
    }
    removeRow = (event, index) => {
          event.preventDefault();
          this.state.comands.splice(index, 1);
          this.setState({div:this.state.comands});
      }



    render(){
      return (
        <div>
        <div>

        <Link to="/comandFood" className="link">Comida.</Link>
        <Link to="/" className="link">Salir.</Link>

        <div>
        <NameForm  addName={this.addName} />
        </div>
        <div>
        <section>
        {this.state.orders.map((postDetail)=>{
          return(
            <div key={postDetail.name}>

            <h3>{postDetail.name}</h3>
            <p>{postDetail.price}</p>
            <button onClick={()=>{
              this.submit(postDetail.name, postDetail.price);
            }} type="submit" >Agregar</button>

            </div>
          )
        })}

        </section>

        </div>

        <div>
                <div><h5>Mesero: <span >{this.state.value}</span></h5></div>
        </div>
        <div>
              <ul>
                {this.state.comands.map((comand, index) => {
                  return(
                  <div key={comand.name}>
                  <h3>{comand.name}</h3>
                  <p>{comand.price}</p>
                  <button  onClick={(event) => this.removeRow(event, index)}>eliminar</button>

                </div>
                )}
              )
                }
              </ul>
        </div>

        </div>
        </div>


      );

    };
  }
  export default BreakfastFirebase;
