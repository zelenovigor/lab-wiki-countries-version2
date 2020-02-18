import React from 'react';
// import logo from './logo.svg';
import './App.css';
// new imports
import {Switch, Route} from 'react-router-dom';
import countries from './countries.json';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="container">
        <div className="row">

          <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <div className="list-group">
              <CountriesList countries={countries} />
            </div>
          </div>

          <Switch>
            <Route
              exact
              path="/countries/:cca3"
              render={props => (
                <CountryDetails {...props} countries={countries} />
              )}
            />
          </Switch>

        </div>
      </div>
    </div>
  );
}
export default App;