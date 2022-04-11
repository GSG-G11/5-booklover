import { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Books from './Pages/Books';
import Carts from './Pages/Carts';
import NotFound from './Pages/NotFound';
import './App.css'
import 'remixicon/fonts/remixicon.css'

class App extends Component {
  state= {
    isBooksPage : true
  }
  render() {
    const {isBooksPage} = this.state
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/cart" render={(props)=> <Carts isBooksPage={!isBooksPage}/>} />
          <Route path="/notfound" component={NotFound} />
          <Route path="/"  render={(props)=> <Books isBooksPage={isBooksPage}/>} />
          <Redirect to="/notfound" />
        </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
