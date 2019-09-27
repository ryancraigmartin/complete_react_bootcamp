import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Food from './Food'
import FoodSearch from './FoodSearch'
import Meal from './Meal'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/food/:name" render={routeProps => <Food {...routeProps} />} />
          <Route exact path="/food/:foodName/drink/:drinkName" component={Meal} />
          <Route exact path="/" render={() => <FoodSearch />} />
          <Route render={() => <h1>Error: NOT FOUND!</h1>} />
        </Switch>
      </div>
    )
  }
}

export default App
