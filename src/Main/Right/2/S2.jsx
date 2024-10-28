import s from "./S2.module.css";
import { motion} from "framer-motion";

function S2() {
    return (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.2}} className={s.S2}>

        </motion.div>
    );
}

export default S2;
