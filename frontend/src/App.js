import React from 'react';
//this is app js and its fine to work .............
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen';

import  {BrowserRouter, Route} from 'react-router-dom'
 
   

function App() {
  return (
     
     <BrowserRouter> 

    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            amazona
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
      <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>

        
      </main>
      <footer className="row center">All right reserved</footer>
    </div>

    </BrowserRouter>
  );
}

export default App;