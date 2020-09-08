import React, {useState} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import './style.css'

export default function Register(){
  const [name, setName] = useState('')
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e){
    e.preventDefault()
    let formErrors = false

    if(name.length < 3 || name.length >255){
      toast.error('nome invalido tem que ter entre 3 e 255 caracteres')
      formErrors = true
    }
    if(user.length < 3 || user.length >255){
      toast.error('Usuario invalido tem que ter entre 3 e 255 caracteres')
      formErrors = true
    }
    if(email.length < 3 || email.length >255){
      toast.error('email invalido tem que ter entre 3 e 255 caracteres')
      formErrors = true
    }
    if(password.length < 3 || password.length >255){
      toast.error('senha invalido tem que ter entre 3 e 255 caracteres')
      formErrors = true
    }
    if(formErrors) return
    toast.success('chegou')
    try {
    const response = await axios.post('http://localhost:3001/users', {
      name, user, email, password
    })
    console.log(response.data)
    } catch (error) {
      console.log(error)
    }


  }

  return (
    <>
    <form action="" onSubmit={handleSubmit} className='form-register'>
      <h2>Cadastre-se já </h2>

      <p>Seu Nome:</p>
      <input type="text" name='name' onChange={e => setName(e.target.value)} value={name} placeholder=' Digite seu nome'/>

      <p>Seu Usuario:</p>
      <input type="text" name='user' onChange={e => setUser(e.target.value)} value={user} placeholder=' Digite seu usuario'/>

      <p>Seu Email:</p>
      <input type="text" name='email' onChange={e => setEmail(e.target.value)} value={email} placeholder=' Digite seu email'/>

      <p>Seu Senha:</p>
      <input type="text" name='password' onChange={e => setPassword(e.target.value)} value={password} placeholder=' Digite sua senha'/>
<br/>
      <button type='submit'>CADASTRAR</button>
    </form>

    </>
  )
}