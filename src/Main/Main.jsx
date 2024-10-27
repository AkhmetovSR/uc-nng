import s from "./Main.module.css";
import Menu from "./Menu/Menu.jsx";
import Right from "./Right/Right.jsx";

function Main() {
    return (
        <div className={s.Main}>
            <Menu/>
            <Right/>
        </div>
    );
}

export default Main;
