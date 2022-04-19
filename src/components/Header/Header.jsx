import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import logo1 from  './logo1.png';



const Header = (props) =>{
  
    return (
        <header className={s.header}>
            <img src={logo1} className={s.logo1} alt="" />
            <div className={s.loginBlock} >
                { props.isAuth 
                ?  <div> {props.login } - <button onClick={props.logoutThunk}>LogOut</button> </div>
                : <NavLink to = {'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header