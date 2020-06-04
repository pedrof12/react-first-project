import React from "react";
import { ReactComponent as Seta } from '../seta.svg';

let Chat = (props) => {
    return (
        <div className="chat">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <img src="https://cdn.discordapp.com/attachments/621799643507851265/718141978977501245/chat.png" alt=""/>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <h5>
                            SIMPLES E PROFISSIONAL
                        </h5>
                        <h3>
                            Atendimento
                        </h3>
                        <p>
                            Montamos uma equipe de suporte com muita experiência para que você consiga solucionar os problemas. Sem contar que respondemos em menos de 1 minuto!
                        </p>
                        <a href="" className="btn_mais"><Seta className="icon_seta" />Saiba mais</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;