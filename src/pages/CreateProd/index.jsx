import React, {useState} from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
import './style.css'
 
export default function CreateProd(){
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [linkImg, setLinkImg] = useState('')
  const [cores, setCores] = useState([])
  const [value, setValue] = useState('')
  const [descont, setDescont] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(cores)
    if(!name || !category || !linkImg || !cores || !value || !descont){
      toast.error('Preencha Corretamente Todos os Campos')
    }
    const response = await axios.post('http://localhost:3001/prods',{
      name, category, linkImg, cores, value, descont
  }).then(res=>{
    console.log(res.data)
    toast.success(res.data)
    })
  }

  return (
    <>
    <form action="" onSubmit={handleSubmit} className='form-register'>
      <h2>Criar Produto !</h2>

      <p>Nome do produto:</p>
      <input type="text" name='name' onChange={e => setName(e.target.value)} value={name} placeholder=' Digite seu nome'/>

      <p>Link da Foto do produto:</p>
      <input type="text" name='linkImg' onChange={e => setLinkImg(e.target.value)} value={linkImg} placeholder=' http://example->img.com'/>

      <p>Valor do produto:</p>
      <input type="text" name='value' onChange={e => setValue(e.target.value)} value={value} placeholder=' Exemplo :20 '/>

      <p>Desconto do produto:</p>
      <input type="text" name='descont' onChange={e => setDescont(e.target.value)} value={descont} placeholder=' Exemplo :10'/>

      <p>Cor do produto:</p>
{cores}
      <select name="cores" id="" onChange={e => { 
        let ColorArray = []
        ColorArray.push(e.target.value)
        setCores(ColorArray)
        
        }} >
        <option value="preto">Preto</option>
        <option value="branco">Branco</option>
        <option value="azul">Azul</option>
        <option value="verde">Verde</option>
      </select>


      <p>categoria do produto:</p>
        {category}
      <select name="category" id="" onChange={e => setCategory(e.target.value)} >
        <option value="masculina">Homens</option>
        <option value="feminina">Mulheres</option>
        <option value="roupa">Roupas</option>
        <option value="infantil">Crianças</option>

      </select>


<br/>
      <button type='submit'>CADASTRAR</button>
    </form>
    </>
  )
}