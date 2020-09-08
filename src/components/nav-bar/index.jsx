import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'


export default function NavBar (){
  const botaoClicado = useSelector(state => state.example.botaoClicado )
  return (
    <>
    <section className='header'>
      <ul>
      <li>Seja bem vindo</li>
      <li>Covid-19</li>
      <li>Atendimento</li>
      </ul>

    </section>

    <div className='nav-bar'>
    <section className='nav-itens'>
      <Link to='/'><img src="https://spacentauro-a.akamaihd.net/assets/logo-centauro-header2.0.svg" alt=""/></Link>
      <input type="text" placeholder=' busque por produtos, esportes, marcas ou times'/>

      <div className='inp-log'>
        <p> <Link to='/login' className='inp-link'>Entre ou se cadastre</Link> </p>
      </div>
    </section>


    </div>
    <div className='prods'>
      <ul>
        <li><Link to='/prods' className='li-link'>Produtos</Link></li>
        <li><Link to='/contas' className='li-link'>Vendedores</Link></li>
        <li><Link to='/createProd' className='li-link'>Criar Produto</Link></li>
        <li><Link to='/prodsFind/masculina' className='li-link'>Homens</Link></li>
        <li><Link to='/prodsFind/feminina' className='li-link'>Mulheres</Link></li>
        <li><Link to='/prodsFind/infantil' className='li-link'>infantil</Link></li>
        <li><Link to='/prodsFind/roupa' className='li-link'>Roupas</Link></li>
        <li>{botaoClicado? 'LIGADO': 'DESLIGADO'}</li>


      </ul>
    </div>
    </>
  )
}