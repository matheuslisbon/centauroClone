import {createGlobalStyle} from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle `
  body .Toastify .Toastify__toast-container .Toastify__toast--success{
    background: springgreen;
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--error{
    background: crimson;
  }
`

