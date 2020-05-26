import React from 'react';
import Navbar from './components/navBar/navbar';
import './App.css';
import MeubleList from './components/meubleList/meubleList';
import { Route } from 'react-router-dom';
import AddMeuble from './components/addMeuble/addMeuble';

function App() {
  return (
    <div className="App" id="outer-container">
      <div className="text-center header">
          <h3>Chaima Meubles</h3>
        </div>
      <Navbar/>
      <div id="page-wrap" className="page-wrap">
        <Route exact path="/" component={MeubleList}/>
        <Route exact path="/ajouter" component={AddMeuble}/>         
        <Route exact path="/ajouter/:id" render={(props)=><AddMeuble id={props.match.params.id}/>}/>         
      </div>
    </div>
  );
}

export default App;
