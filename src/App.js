import React, { Component } from "react";
import Hd from './components/header';
import Service from './components/services';
import Datacenter from './components/datacenter';
import Chat from './components/chat';
import Dominio from './components/dominio';
import Features from './components/features';
import Etapa from './components/etapa';

class App extends Component{
  render() {
    return (
      <>
        <Hd />
        <Service />
        <Datacenter />
        <Chat />
        <Dominio />
        <Features />
        <Etapa />
      </>
    );
  }
}

export default App;