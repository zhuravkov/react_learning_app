import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader';
import Status from './Status/Status';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/* <div className={s.topImage}>
                <img src="https://i.pinimg.com/originals/f7/8c/8d/f78c8d8e051356829d21271de673cc98.jpg" className={s.ContentImg} alt="" />
            </div> */}

            <div className={s.discriptionBlock}>
                <div>
                    {props.profile.name}
                </div>
                <div>
                    <Status status = {props.profile.status} />
                </div>
            </div>
        </div>);
}


export default ProfileInfo