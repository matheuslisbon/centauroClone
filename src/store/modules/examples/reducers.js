import * as types from '../types'

const initialState = {
  botaoClicado: false
}


export default function (state = initialState, action){

  switch(action.type){

    case types.BOTAO_CLICADO_SUCCESS:{
      console.log('Deu Certo')
      const newState = {... state}
      console.log(state)
      newState.botaoClicado = !newState.botaoClicado
      return newState
    }

    case types.BOTAO_CLICADO_FAILURE :{
      console.log('Error Undefined')
      return state
    }

    case types.BOTAO_CLICADO_REQUEST:{
      console.log('Estou fazendo a requisição')
      return state
    }
      
    default:{
      return state
    }
  }
}