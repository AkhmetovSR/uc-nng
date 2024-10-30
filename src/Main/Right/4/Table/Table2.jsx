import s from "./Table2.module.css";
import Stud from "../../../../resource/stud.rar";


function Table2() {
    const arrTable2 = [
        {
            id: 1,
            symbol: "№",
            title: "Наименование программы обучения",
            rank: "Разряд",
            form: "Форма обучения\t",
            time: "Продолжительность программы обучения, час.",
            theory: "теоретическое обучение",
            practice: "производственное обучение/практическое обучение",
            term: "Общий срок освоения программы, час.",
            opportunity: "Возможная численность обучающихся",
            quantity: "Количество бюджетных мест",
            note: "Примечание",
            accreditation: "Государственная аккредитация образовательной деятельности"
        }
    ]
    const titleTable2 = arrTable2.map(line =>
        <div key={line.id} className={s.TableLine}>
            <div>{line.symbol}</div>
            <div>{line.title}</div>
            <div>{line.rank}</div>
            <div>{line.form}</div>
            <div className={s.Term}>
                <div>{line.time}</div>
                <div className={s.theoryPractice}>
                    <div>{line.theory}</div>
                    <div>{line.practice}</div>
                </div>
            </div>
            <div>{line.term}</div>
            <div>{line.opportunity}</div>
            <div>{line.quantity}</div>
            <div>{line.note}</div>
            <div>{line.accreditation}</div>
        </div>
    )

    const table2Array = [
        {
            id: 1,
            profession1: "Машинист технологических насосов",
            profession2: "Машинист технологических насосов",
            profession3: "Машинист технологических насосов",
            profession4: "",
            rank3: "3",
            rank4: "4",
            rank5: "5",
            rank6: "",
            form: "",
            theory: "",
            practice: "",
            term: "",
            opportunity: "",
            quantity: "",
            note: "",
            accreditation: "отсутствует",
        },
    ]

    return (
        <div className={s.Table2}>
            <div className={s.Dop}><a href={Stud} download>Программы профессионального обучения</a></div>
            {titleTable2}
        </div>
    );
}

export default Table2;
