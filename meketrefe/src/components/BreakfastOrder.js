import React, {Component} from 'react';

class ComandBreakfast extends Component {
  constructor(props) {
    super(props);
    this.state={
      orders:[],
      comands:[]

  };

};

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
              {this.state.comands.map((comand, index) => {
                return(
                <div key={index}>
                <h3>{comand.name}</h3>
                <p>{comand.price}</p>
                <button  onClick={(event) => this.removeRow(event, index)}>eliminar</button>

              </div>
              )}
            )
              }
            </div>
      </div>

      </div>


    );

  };
}
export default ComandBreakfast;
