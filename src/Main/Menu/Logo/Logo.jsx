import s from "./Logo.module.css";
import LogoNNG from "../../../resource/LogoNNG.webp";


function Logo() {
    return (
        <div className={s.Logo}>
            <div className={s.Logotype}>
                <img className={s.LogoNNG} src={LogoNNG} alt="LogoNNG"/>
            </div>
            <div className={s.Title}>
                <div className={s.LearningCenter}>Учебный центр</div>
                <div className={s.AORNNNG}>АО “РН-Няганьнефтегаз”</div>
            </div>
        </div>
    );
}

export default Logo;
