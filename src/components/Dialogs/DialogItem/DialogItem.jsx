import { NavLink } from 'react-router-dom';
import s from '.././Dialogs.module.css';

const Dialog = (props) => {
    return (
        <div className= {s.dialogItem}>
            <img src="https://steamuserimages-a.akamaihd.net/ugc/1698402776116313451/993A8BB58E84D0960A398BF731A257A4DB09F261/" alt="" />
            < NavLink to={`./user_id_${props.id}`} className={(navData) => navData.isActive ? s.dialogActive : s.dialog}>{props.name}</NavLink>
        </div >
    );
}

export default Dialog;