import React from 'react'
// import * as BooksAPI from './BooksAPI'
import 'semantic-ui-css/semantic.min.css';
import './App.css'
import Home from './containers//Home'
import SearchPage from './containers/SearchPage'

import {Switch, Route} from 'react-router-dom'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={SearchPage} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
