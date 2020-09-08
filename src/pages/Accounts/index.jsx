import React, { useEffect, useState} from 'react'

import axios from 'axios'
import api from '../../services/api'
/*
export default class Accounts extends Component{
  state = {
    contas : []
  }

  async componentDidMount(){
    const users = await axios.get('http://localhost:3001/users')
    const resp = users.data.accs
    
    this.setState({contas: resp})
  }



  



render(){
  const {contas} = this.state
  console.log(contas)
    return (
    <>
    <ul>
      { contas.map( acc=> (
        <li key='acc.id'> {acc.name} {acc.email} </li>
      ))}
    </ul>
    </>
  )
  }
}
*/
export default function Accounts (){
  const [contas, setContas] = useState([])
  const [Loading, setLoading ] = useState(true)

  useEffect( ()=>{
    //
    async function getData() {
          const users = await api.get('/users')
    const resp = users.data.accs
    console.log(users.data.errors)
    setContas(resp)
    }
    getData()

  },[])
  
  return (
    <>
    <ul>
      { contas.map( acc=> (
        <li key={String(acc.id)}> {acc.name} {acc.user} {acc.email} {acc.password}</li>
      ))}
    </ul>
    </>
  )
}