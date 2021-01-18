import React from 'react';
import './App.css';
import Order from './Order';

class App extends React.Component {
  render() {
    const products = [
      {
        id: 102,
        user: "cena@gmail.com",
        product: "Razer Headphone",
        price: {
          value: 99.99,
          currency: "dollars"
        }
      },
      {
        id: 77,
        user: "cena@gmail.com",
        product: "Monster 500mL",
        price: {
          value: 9.99,
          currency: "dollars"
        }
      }
    ]
    return (
      <div className="App">
        <h1> Orders recently created </h1>
         {products.map(courrentProduct => <Order order={courrentProduct} />)}
      </div>
    );
  }
}

export default App;
