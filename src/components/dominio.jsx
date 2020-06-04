import React from "react";
import { ReactComponent as Seta } from '../seta.svg';

let Dominio = (props) => {
    return (
        <div className="dominio_c">
            <div className="dominio">
                <div className="container text-center">
                    <h3>
                        Encontre o domínio perfeito!
                    </h3>
                    <p>
                        O seu nome de domínio é essencial para por um negocio online!
                    </p>
                    <div className="row justify-content-center">
                        <div className="input-group mb-3 col-sm-12 col-md-6">
                            <input type="text" className="form-control" placeholder="seudominio" aria-label="seudominio" aria-describedby="seudominio" />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">.com.br</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dominio;