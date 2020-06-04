import React from "react";
import { ReactComponent as Seta } from '../seta.svg';

let Services = (props) => {
    return (
        <div className="services">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="box">
                            <h4>
                                Minecraft
                            </h4>
                            <p>
                                Servidores especiais no Canadá com o dobro de processamento para networks.
                            </p>
                            <a href="" className="btn_plans"><Seta className="icon_seta" />Conheça esses planos</a>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="box">
                            <h4>
                                Datacenter
                            </h4>
                            <p>
                                Datacenter virtual. Crie, edite, delete máquinas virtuais para o seu negócio! 
                            </p>
                            <a href="" className="btn_plans"><Seta className="icon_seta" />Conheça esses planos</a>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="box">
                            <h4>
                                Dedicados
                            </h4>
                            <p>
                                Servidores dedicados em datacenters especiais com proteção anti-ddos.
                            </p>
                            <a href="" className="btn_plans"><Seta className="icon_seta" />Conheça esses planos</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;