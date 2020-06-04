import React from "react";

let Etapa = (props) => {
    return (
        <div className="etapa">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <ul class="timeline">
                            <li>
                                <a> O domínio</a>
                                <p>Não perca tempo! Compre o seu domínio você pode utilizar para o seu servidor, para o seu site e para milhares de outras instancias.</p>
                            </li>
                            <li>
                                <a>A hospedagem</a>
                                <p>Feito a compra do domínio, você precisa comprar a hospedagem! Aqui você recebe total acesso e um suporte lindo para te ajudar.</p>
                            </li>
                            <li>
                                <a>O servidor</a>
                                <p>Agora você precisa configurar o seu servidor, basta seguir os passos do nosso painel e em menos de 5 minutos ele estará online!</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <img src="https://cdn.discordapp.com/attachments/621799643507851265/718151492418404452/bde.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Etapa;