import s from "./S1.module.css";

function S1() {
    return (
        <div className={s.S1}>
            <div className={s.Line1}>
                <div className={s.Title}></div>
                <div className={s.LogoRN}></div>
            </div>
            <div className={s.Line2}>
                <div className={s.HistoryNow}>
                    <div className={s.History}></div>
                    <div className={s.Now}></div>
                </div>
                <div className={s.Contacts}></div>
            </div>
        </div>
    );
}

export default S1;
