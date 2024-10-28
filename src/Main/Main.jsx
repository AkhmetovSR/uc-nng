import s from "./Main.module.css";
import Menu from "./Menu/Menu.jsx";
import Right from "./Right/Right.jsx";
import S1 from "./Right/1/S1.jsx";
import S2 from "./Right/2/S2.jsx";
// import {Route, Routes} from "react-router-dom";


function Main() {
    return (
        <div className={s.Main}>
            <Menu/>
            <Right/>
            {/*<div>*/}
            {/*    <Routes>*/}
            {/*        <Route path="/" element={<S1/>}/>*/}
            {/*        <Route path="/structure" element={<S2/>}/>*/}
            {/*    </Routes>*/}
            {/*</div>*/}
        </div>


    );
}

export default Main;
