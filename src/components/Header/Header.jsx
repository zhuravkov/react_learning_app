import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import logo1 from  './logo1.png';


const Header = (props) =>{
    return (
        <header className={s.header}>
            <img src={logo1} className={s.logo1} alt="" />
            <div className={s.loginBlock} >
                { props.isAuth ?  props.login:
                <NavLink to = {'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header