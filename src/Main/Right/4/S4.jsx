import s from "./S4.module.css";
import Text from "./Text/Text.jsx";
import Table1 from "./Table/Table1.jsx";
import Table2 from "./Table/Table2.jsx";

function S4() {
    return (
        <div className={s.S4}>
            <h4>Образование</h4>
            <Text/>
            <Table1/>
            <Table2/>
        </div>
    );
}

export default S4;
