import React, {Context, useContext} from 'react'

import {Switch, Route} from 'react-router-dom'
//import NavBar from './components/nav-bar/index'
import Header from './pages/header/index'
import Prods from './pages/prods/index'
import Login from './pages/Login/index'
import Accounts from './pages/Accounts/index'
import Register from './pages/Register/index'
import CreateProd from './pages/CreateProd/index'
import ProdsMasc from './pages/prodsMasc/index'
import PrivateRoute from './services/privateRoute'
export default function Routes(){

  return (
      <Switch>
        
          <Route exact path='/' component={Header}/>
          <Route path='/prods' component={Prods}/>
          <Route path='/login' component={Login}/>
          <PrivateRoute path='/contas' component={Accounts}/>
          <Route path='/register' component={Register}/>
          <Route path='/createProd' component={CreateProd}/>
          <Route path='/prodsFind/:name' component={ProdsMasc}/>
      </Switch>
  )
}