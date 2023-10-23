import LogoGlobal from '../../assets/logo.svg';
import './_style.scss'

export default function Logo() {
  return (
    <div>
       <img src={LogoGlobal} alt='logo' />  
    </div>
  )
}