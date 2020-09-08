import React from 'react'
import './style.css'
export default function Prods(){
  return (
    <>
      <h1>Promoções em destaque</h1>
      <div className='itens-prods'>
        <img className='img' src="https://imgcentauro-a.akamaihd.net/05_Campanhas/2020/Brasileirao/Mobile_Secundaria1.jpg" alt=""/>
        <img className='img' src="https://imgcentauro-a.akamaihd.net/05_Campanhas/2020/TreinoDelas/20200820/Desk.png" alt=""/>
        <img className='img' src="https://imgcentauro-a.akamaihd.net/05_Campanhas/2020/TreineEmCasa/20200820/Desk_Treine.png" alt=""/>
      </div>

      <h1>Não vai passar frio</h1>
      <div className="intem">
        <img src="https://imgcentauro-a.akamaihd.net/05_Campanhas/2020/LiquidaInverno/Desk_v2.jpg" alt=""/>
      </div>
    </>
  )
}