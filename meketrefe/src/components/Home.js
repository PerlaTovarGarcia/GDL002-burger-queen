import React, {Component} from 'react';
import {Link}from 'react-router-dom';
import '../css/links.css';
import logo from '../imagenes/logo2.png';

class Home extends Component {


  render(){
    return(

        <div>
            <div>
            <img src={logo} alt="Logo" style={{ width:'100%', height:'100%'}}/>
            </div>
              <div className = 'buttonsInicio'>
                  <a><Link to="/kitchen" className = 'buttons' style={{ textDecoration: 'none'}}>Cocina.
                  </Link></a>
                  <a><Link to="/breakfastFirebase" className = 'buttons' style={{ textDecoration: 'none'}}>Pedidos.
                  </Link></a>
              </div>
        </div>
          )

          }

}

export default Home;
