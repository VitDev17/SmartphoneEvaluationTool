import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Noleggio from './Noleggio'
import Acquisto from './Acquisto'
import Vendita from './Vendita'
import Valutatore from './Valutatore'
import Riparazione from './Riparazione'
import App from './App'
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <Switch>
     <Route exact path='/' component={App}/>
    <Route path='/noleggio' component={Noleggio}/>
    <Route path='/acquisto' component={Acquisto}/>
    <Route path='/vendita' component={Vendita}/>
    <Route path='/riparazione' component={Riparazione}/>
    <Route path='/valutatore' component={Valutatore}/>
  </Switch>
)

export default Main
