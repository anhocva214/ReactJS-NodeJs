import React, { Component } from 'react';
import Header from './Components/Header';
import Products from './Components/Products';
import AddProducts from './Components/AddProducts';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <div className="container">
            <div className="row">
              <AddProducts />
              <Products />
            </div>
          </div>
        </main>
      </div>
    )
  }
}
