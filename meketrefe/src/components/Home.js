import React, {Component} from 'react';
import {Link}from 'react-router-dom';

class Home extends Component {


  render(){
    return(

        <div>
              <h3>Burger Queen</h3>
              <div>
                  <Link to="/kitchen" className="link">Cocina.</Link>
                  <Link to="/breakfastFirebase" className="link">Pedidos.</Link>
              </div>
        </div>
          );

          }

}

export default Home;
