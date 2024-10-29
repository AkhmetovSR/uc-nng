import s from "./Right.module.css";
import S1 from "./1/S1.jsx";
import S2 from "./2/S2.jsx";
import S3 from "./3/S3.jsx";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

function Right() {
    return (
            <div className={s.Right}>
                <Routes>
                    <Route path="/" element={<S1/>}/>
                    <Route path="/structure" element={<S2/>}/>
                    <Route path="/documents" element={<S3/>}/>
                </Routes>
            </div>
    );
}

export default Right;
