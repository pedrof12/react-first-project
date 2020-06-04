import React from "react";
import { ReactComponent as Seta } from '../seta.svg';

let Features = (props) => {
    return (
        <div className="features">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="box">
                            <h4>
                                Proteção
                            </h4>
                            <p>
                            Todo o nosso trafego é tratado pelo CloudFlare e por nossos servidores, garantimos total estabilidade no nosso sistema. Por precaução, temos servidores de backup.
                            </p>
                            <a href="" className="btn_plans"><Seta className="icon_seta" />Conheça esses planos</a>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="box">
                            <h4>
                                Robôs hackers
                            </h4>
                            <p>
                            Temos robôs que semanalmente fazem testes nos servidores dos clientes, ele procuram falhas e após esses testes o cliente recebe o relatório no e-mail.
                            </p>
                            <a href="" className="btn_plans"><Seta className="icon_seta" />Conheça esses planos</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;