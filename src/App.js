
import React, { Component } from 'react'
import './App.scss';
import MoviesPage from './components/pages/MoviesPage.js';
import DetailPage from './components/pages/DetailPage';
import AboutPage from './components/pages/AboutPage';
import Footer from './components/Footer';
import Header from './components/Header';
import {Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';


class App extends Component {

  constructor(){
    super()
    this.state={datas: []}
  }


  render() {
		
		return (

      <div className="App">
        
        <Header/>
        <Container text>
					<Route exact path='/' component={MoviesPage}></Route>
          <Route exact path='/movies/:id' component={DetailPage}></Route>
          <Route exact path='/about' component={AboutPage}></Route>
         
        </Container>
        <Footer/>
      </div>

    );

  }

}

export default App;