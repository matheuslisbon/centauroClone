import React, { useState } from 'react'
import api from './api'
import {Route, Redirect} from 'react-router-dom'
import {toast} from 'react-toastify'

const PrivateRoute = props => {
  const isLogged = localStorage.getItem('token')
  api.defaults.headers.Authorization = `Bearer ${isLogged}`
  if(isLogged){
    toast.success('Bem Vindo')
  }else{
    toast.error('Entre para continuar')
  }
  return isLogged ? <Route {...props}/> : <Redirect to='/login'/>
}

export default PrivateRoute