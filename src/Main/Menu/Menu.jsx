import s from "./Menu.module.css";
import Logo from "./Logo/Logo.jsx";
import List from "./List/List.jsx";
import Ministerstvo from "./Ministerstvo/Ministerstvo.jsx";
import { motion } from "framer-motion";

function Menu() {
    return (
        <motion.div initial={{x: -1000, opacity: 0}} animate={{x: 0, opacity: 100}} transition={{velocity: 2}} className={s.Menu}>
            <Logo/>
            <List/>
            <Ministerstvo/>
        </motion.div>
    );
}

export default Menu;
