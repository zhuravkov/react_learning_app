import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.topImage}>
                <img src="https://i.pinimg.com/originals/f7/8c/8d/f78c8d8e051356829d21271de673cc98.jpg" className={s.ContentImg} alt="" />
            </div>

            <div className={s.discriptionBlock}>
                ava+disc
            </div>
        </div>);
}


export default ProfileInfo