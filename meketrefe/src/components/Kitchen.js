import React, {Component} from 'react';
import {Link}from 'react-router-dom';
import '../css/links.css';
import logo from '../imagenes/logo3.png';

class Kitchen extends Component {


render(){
 return(

<div>


      <Link to="/" className = 'buttons' >Salir.</Link>
      <div>
      <img src={logo} alt="Logo"  style={{ width:'100%', height:'100%'}}/>
      </div>
</div>
  );

}

}

export default Kitchen;
