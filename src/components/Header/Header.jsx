import s from './Header.module.css';
import logo1 from  './logo1.png';


const Header = () =>{
    return (
        <header className={s.header}>
            <img src={logo1} className={s.logo1} alt="" />
        </header>
    );
}

export default Header