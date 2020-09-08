import React, {useState, useEffect} from 'react'
import api from '../../services/api'
import './styles.css'

export default function ProdsMasc (props){
  const [data, setData] = useState([])
  //const [counter, setCounter] = useState(0)

  //const { id } = useParams();
  //console.log(id)

  const { name } = props.match.params;



  useEffect(()=>{
    async function getData(){
          const response = await api.get(`/prods/find/${name}`)
          const resp = response.data
          setData(resp)
    }
    getData()
  }, [name])

  return (
    <>
    <section >
  <div><img className="img-frete" src="https://imgcentauro-a.akamaihd.net/05_Campanhas/2020/vestuario/inverno/vestuario_inverno.jpg" alt=""/></div>

    <div className='prods-list'>
    {data.map(prod=>(
      <div key={String(prod.id)} className='prod-find'>
                <img src={prod.linkImg} alt=""/>
        <p>{prod.name}</p> 
        <p>{prod.cores}</p>
        <p>De: R$ {prod.value}</p>
        <p className='prod-value'>Por: R$ {prod.descont}</p>


      </div>
    ))}
    </div><img className='img-frete' src="https://imgcentauro-a.akamaihd.net/01_Desk/2020/07-Julho/20200702-LeveTudo/Desk_FreteGratis.jpg" alt=""/>
  
    </section>
    </>
  )

}