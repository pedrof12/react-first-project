import React from "react";
import { Player } from 'video-react';
import { ReactComponent as Seta } from '../seta.svg';

let Datacenter = (props) => {
    return (
        <div className="datacenter">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <h5>
                            FLEXÍVEL E ESCALÁVEL
                        </h5>
                        <h3>
                            Datacenter virtual
                        </h3>
                        <p>
                            Especial para sua empresa, aqui você pode criar máquinas virtuais e edita-las conforme a necessidade do seu sistemas pagando apenas o tempo de uso!  
                        </p>
                        <a href="" className="btn_mais"><Seta className="icon_seta" />Saiba mais</a>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <img src="https://cdn.discordapp.com/attachments/621799643507851265/718139776901054624/Grupo_22.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>      
    );
}

export default Datacenter;