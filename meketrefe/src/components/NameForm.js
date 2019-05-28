import React, {Component} from 'react';
  import '../css/nameForm.css';


class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Perla'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event, value) {
    //console.log(event,value);
    //console.log(this.state.value);
    //console.log('props', this.props.addName);
    event.preventDefault();
    this.props.addName(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className = 'butt'>
          Mesero que atendio:
          <select className="orderSelect" variant="warning" value={this.state.value} onChange={this.handleChange}>
            <option value="Perla">Perla</option>
            <option value="Gerardo">Gerardo</option>
            <option value="Sandra">Sandra</option>
            <option value="Luis">Luis</option>
          </select>
        </label>
        <input className="sumit" type="submit" value="Submit" />
      </form>
    );
  }
}
export default NameForm;
