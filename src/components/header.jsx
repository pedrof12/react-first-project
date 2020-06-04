import React from "react";

let Hd = (props) => {
    return (
        <>
        {/* Start Banner */}
            <div className="banner_c">
                <div className="banner">
                    <div className="conteudo">
                        <div className="container">
                            
                            <div className="menu">
                                <nav class="navbar navbar-expand-lg">
                                    <a class="navbar-brand" href="#">Minecraft</a>

                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    
                                    <div class="collapse navbar-collapse" id="navbarNav">
                                        <ul class="navbar-nav m-auto">
                                            <li class="nav-item active">
                                                <a class="nav-link" href="#">Início</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Serviços</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Painel</a>
                                            </li>
                                        </ul>

                                        
                                    </div>
                                </nav>
                            </div>

                            <div className="content">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-6">
                                        <h2>
                                        Hora de revolucionar o mercado!
                                        </h2>
                                        <p>
                                            Estamos investindo alto em nossas entranhas, trabalhando duro para revolucionar os servidores minecraft!
                                        </p>
                                        <a href="" className="btn btn_conhecer">Conhecer</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* End Banner */}
        </>
    );
}

export default Hd;