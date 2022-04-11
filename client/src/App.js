import { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Books from './Pages/Books';
import Carts from './Pages/Carts';
import NotFound from './Pages/NotFound';
import './App.css'
import 'remixicon/fonts/remixicon.css'
import SingleBook from './Pages/SingleBook';

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

          <Route path="/"  render={(props)=> <Books isBooksPage={isBooksPage}/>}  exact/>

          <Route path="/book/:id" component={SingleBook} />

          <Redirect to="/notfound" />
        </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
