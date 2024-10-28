import s from "./S1.module.css";
import { motion} from "framer-motion";
import {useState} from "react";

function S1() {
    return (
        <motion.div className={s.S1}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.2}} className={s.Line1}>
                <div className={s.Title}>
                    <div className={s.FullName}>Полное наименование</div>
                    <div className={s.Name}>Учебный центр<br/> Акционерного общества “РН-Няганьнефтегаз”</div>
                    <div className={s.ShortName}>Сокращенное наименование: УЦ АО “РН-Няганьнефтегаз”</div>
                </div>
                <div className={s.LogoRN}></div>
            </motion.div>
            <div className={s.Line2}>
                <div className={s.HistoryNow}>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.3}} className={s.History}>
                        <motion.div className={s.Top}>asdasd</motion.div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.4}} className={s.Now}>asdasd</motion.div>
                </div>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.5}} className={s.Contacts}>asdasd</motion.div>
            </div>
        </motion.div>
    );
}

export default S1;
