import React, {useState} from 'react'
import './style.css'
import {useDispatch} from 'react-redux'
import api from '../../services/api'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import history from '../../services/history'
import * as exampleActions from '../../store/modules/examples/actions'

export default function Login (){
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()


  async function handleSubmit(e){
    e.preventDefault()
    let formErrors = false
    
    if(!user || user.length < 3 || user.length > 255){
      toast.error('usuario precisa ter entre 3 e 255 caracteres')
      formErrors = true
    }
        if(!password || password.length < 3 || password.length > 255){
          toast.error('senha precisa ter entre 3 e 255 caracteres')
      formErrors = true
    }
    if(formErrors) return 
    toast.success('form certo')

    try {
      const response = await api.post('/login', {
        user,
        password
      }).then(res=> {
        const token = res.data.token
        console.log(token)
        localStorage.setItem('token', token)
        api.defaults.headers.Authorization = `Bearer ${token}`
        history.push('/contas')

      })
    } catch (error) {
      console.log(error)
    }


  }
    function handleclick(e) {
      dispatch(exampleActions.clicaBotaoRequest())
    }


  return (
    <>
      <header className="login">
        <h2>Bem-vindo!</h2>
        <form action="" method='post' onSubmit={handleSubmit}>

          <input type="text"  name='user' value={user} placeholder='Usuario ou Nome' onChange={e=> setUser(e.target.value)}/>

<br/>
          <input type="text"  name='password' value={password} placeholder='Senha' onChange={e=> setPassword(e.target.value)}/>
<br/>
          <button className='entrar' onClick={handleclick}>ENTRAR</button>
          <br/>
          <Link to='/register' className='create-acc'>CRIAR UMA CONTA</Link>

        </form>
      </header>
    </>    
  )
}