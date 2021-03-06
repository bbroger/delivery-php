import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Container from '@material-ui/core/Container'

import Header from './Header'
import DeliveriesList from '../pages/DeliveriesList'
import Delivery from '../pages/Delivery'
import CreateDelivery from '../pages/CreateDelivery'

const classes = {
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: 20,
    paddingBottom: 20,
  },

};

class App extends Component {
    render () {
        return (
          <BrowserRouter>
            <div>
              <Header />
               <main style={classes.content}>
                <Container maxWidth="lg" style={classes.container}>
                    <Switch>
                        <Route exact path='/' component={DeliveriesList} />
                        <Route path='/create' component={CreateDelivery} />
                        <Route path='/:id' component={Delivery} />
                    </Switch>
                </Container>
               </main>
            </div>
          </BrowserRouter>
        )
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
