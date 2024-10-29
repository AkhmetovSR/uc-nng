import s from "./Line1.module.css";
import { motion} from "framer-motion";
function Line1() {
    return (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.2}} className={s.Line1}>
            <div className={s.Title}>
                <div className={s.FullName}>Полное наименование</div>
                <div className={s.Name}>Учебный центр<br/> Акционерного общества “РН-Няганьнефтегаз”</div>
                <div className={s.ShortName}>Сокращенное наименование: УЦ АО “РН-Няганьнефтегаз”</div>
            </div>
            <div className={s.LogoRN}></div>
        </motion.div>
    );
}

export default Line1;
