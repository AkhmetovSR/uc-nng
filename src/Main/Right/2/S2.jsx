import s from "./S2.module.css";
import { motion} from "framer-motion";

function S2() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 0.4}} className={s.S2}>
            <div className={s.Structure}>
                <h3>Структура и органы управления образовательной организацией</h3>
            </div>
            <div>
                <p className={s.Title}>Генеральный директор АО «РН-Няганьнефтегаз»</p>
                <p>Муслимов Эдуард Ядкарович</p>
            </div>
            <div>
                <p className={s.Title}>Заместитель генерального директора по персоналу и социальным программам</p>
                <p>Неугомонова Алина Петровна</p>
            </div>
            <div>
                <p className={s.Title}>Начальник Учебного центра</p>
                <p>Миронова Анастасия Ивановна</p>
            </div>
            <div>
                <p>Юридический адрес: Ханты-Мансийский автономный округ –Югра, г. Нягань, ул. Сибирская, дом 10, корпус 1</p>
                <p>АО «РН-Няганьнефтегаз» телефон: 8 (34672) 92-222</p>
                <p>факс: 8 (34672)94-444</p>
                <p>e-mail: rn_nng@nng.rosneft.ru</p>
            </div>
            <div>
                <p className={s.Title}>Начальник Учебного центра АО «РН-Няганьнефтегаз»:</p>
                <p>Миронова Анастасия Ивановна</p>
                <p>Телефон: 8 (34672) 92-222 доб 1536</p>
                <p>E-mail: aimironova@nng.rosneft.ru</p>
            </div>
            <div></div>
        </motion.div>
    );
}

export default S2;
