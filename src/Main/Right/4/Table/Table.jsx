import s from "./Table.module.css";

function Table() {

    const arrTable1 = [
        {id:0, title: "Наименование программы обучения", form: "Форма обучения", period: "Срок обучения, часов", program: "Программа электронного обучения", opportunity: "Возможная численность обучающихся", quantity: "Количество бюджетных мест", accreditation: "Государственная аккредитация образовательной деятельности"},
        {id:1, title: "Учебно-тематический план и программа обучения руководителей и специалистов организаций по курсу «Контроль скважины. Управление скважиной при ГНВП» (для направления супервайзинга бурения скважин)", form: "очная / заочная", period: "24", program: "обучающе-контролирующая система Олимпокс", opportunity: "30", quantity: "0", accreditation: "отсутствует"},
        {id:2, title: "Учебно-тематический план и программа обучения руководителей и специалистов организаций по курсу «Контроль скважины. Управление скважиной при ГНВП» (для направления супервайзинга ремонта скважин и скважинных технологий)", form: "очная / заочная", period: "очная / заочная", program: "обучающе-контролирующая система Олимпокс", opportunity: "30", quantity: "0", accreditation: "отсутствует"},
        {id:3, title: "Учебно-тематический план и программа обучения руководителей и специалистов организаций по курсу «Контроль скважины. Управление скважиной при ГНВП» (в процессе эксплуатации скважин)", form: "очная / заочная", period: "24", program: "обучающе-контролирующая система Олимпокс", opportunity: "30", quantity: "0", accreditation: "отсутствует"},
        {id:4, title: "Дополнительная профессиональная программа повышения квалификации \"Общие требования промышленной безопасности\"", form: "заочная", period: "40", program: "обучающе-контролирующая система Олимпокс", opportunity: "30", quantity: "0", accreditation: "отсутствует"},
        {id:5, title: "", form: "", period: "", program: "", opportunity: "", quantity: "", accreditation: ""},
        {id:6, title: "", form: "", period: "", program: "", opportunity: "", quantity: "", accreditation: ""},
        {id:7, title: "", form: "", period: "", program: "", opportunity: "", quantity: "", accreditation: ""},
        {id:8, title: "", form: "", period: "", program: "", opportunity: "", quantity: "", accreditation: ""},
        {id:9, title: "", form: "", period: "", program: "", opportunity: "", quantity: "", accreditation: ""},
        {id:10, title: "", form: "", period: "", program: "", opportunity: "", quantity: "", accreditation: ""},
        {id:11, title: "", form: "", period: "", program: "", opportunity: "", quantity: "", accreditation: ""},
        {id:12, title: "", form: "", period: "", program: "", opportunity: "", quantity: "", accreditation: ""},
        {id:13, title: "", form: "", period: "", program: "", opportunity: "", quantity: "", accreditation: ""},
        {id:14, title: "", form: "", period: "", program: "", opportunity: "", quantity: "", accreditation: ""},
        {id:15, title: "", form: "", period: "", program: "", opportunity: "", quantity: "", accreditation: ""},
        {id:16, title: "", form: "", period: "", program: "", opportunity: "", quantity: "", accreditation: ""}
    ]
    const table1 = arrTable1.map(line =>
    <div key={line.id} style={line.id === 0? {backgroundColor: "#fed100", fontWeight: "bolder"} : {backgroundColor: "white"}} className={s.TableLine}>
        <div>{line.id === 0 ? "№" : line.id}</div>
        <div style={{textAlign: "start"}}>{line.title}</div>
        <div>{line.form}</div>
        <div>{line.period}</div>
        <div>{line.program}</div>
        <div>{line.opportunity}</div>
        <div>{line.quantity}</div>
        <div>{line.accreditation}</div>
    </div>
    )

    return (
        <div className={s.Table}>
            {table1}
        </div>
    );
}

export default Table;
