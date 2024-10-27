import s from "./Ministerstvo.module.css";
import MinNauki from "../../../resource/MinNauki.webp";
import MinProsv from "../../../resource/MinProsv.webp";

function Ministerstvo() {
    return (
        <div className={s.Ministerstvo}>
            <div className={s.MinNauki}><img src={MinNauki} alt="MinNauki"/></div>
            <div className={s.MinProsv}><img src={MinProsv} alt="MinProsv"/></div>
        </div>
    );
}

export default Ministerstvo;
