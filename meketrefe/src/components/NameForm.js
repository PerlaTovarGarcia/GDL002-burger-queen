import React, {Component} from 'react';

const NameForm = props => {
        return (
            <div>

                <div className="container">
                            <input
                                id="inputName"
                                type="text"
                                placeholder="Nombre Mesero"
                                onChange={props.onChange}
                                value={props.temporalName}>
                              </input>
                        </div>
                        <button className="waves-effect btn btn-save" onClick= {props.onClick} >Enviar</button>
                        </div>
        )
}

export default NameForm;
