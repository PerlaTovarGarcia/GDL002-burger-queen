import React from 'react';

const Name = props => {

        return (
            <div>

                <div className="container">
                    <div className="row">
                        <div className="col s8 m8">
                            <input
                                id="inputName"
                                type="text"
                                placeholder="Nombre Mesero"
                                onChange={props.onChange}
                                value={props.temporalName}>
                              </input>
                        </div>
                        <div className="col s4 m4">
                        <button className="waves-effect btn btn-save" onClick= {props.onClick} >Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Name;
