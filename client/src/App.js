import { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Books from './Pages/Books';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';
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
          <Route path="/cart" render={(props)=> <Cart isBooksPage={!isBooksPage}/>} />
          <Route path="/notfound" component={NotFound} />
          <Route path="/"  render={(props)=> <Books isBooksPage={isBooksPage}/>} />
          <Redirect to="/notfound" />
        </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
