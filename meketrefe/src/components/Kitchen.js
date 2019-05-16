import React, {Component} from 'react';
import {Link}from 'react-router-dom';

class Kitchen extends Component {


render(){
 return(

<div>

      <h3>Kitchen</h3>
      <Link to="/" className="link">Salir.</Link>
</div>
  );

}

}

export default Kitchen;
