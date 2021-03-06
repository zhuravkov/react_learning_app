import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';
import TopFriends from './TopFriends/TopFriends';

const Nav = (props) => {
    
    return (
        
        <nav className={s.nav}>
            <div>
                < NavLink to="/profile" className={(navData) => navData.isActive ? s.navLinkActive : s.navlink}>Профиль</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={(navData) => navData.isActive ? s.navLinkActive : s.navlink}>Сообщения</NavLink>
            </div>
            <div>
                <NavLink to="/news" className={(navData) => navData.isActive ? s.navLinkActive : s.navlink}>Новости</NavLink>
            </div>
            <div>
                <NavLink to="/music" className={(navData) => navData.isActive ? s.navLinkActive : s.navlink}>Музыка</NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={(navData) => navData.isActive ? s.navLinkActive : s.navlink}>Настройки</NavLink>
            </div>
            <div>
                <NavLink to="/users" className={(navData) => navData.isActive ? s.navLinkActive : s.navlink}>Users</NavLink>
            </div>

            {/* <TopFriends state={props.state.sideBar.friends} /> */}
            
        </nav>
    );
}

export default Nav