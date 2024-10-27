import s from "./List.module.css";
import Info from "../../../resource/info.png";
import Structure from "../../../resource/structure.png";
import Documents from "../../../resource/documents.png";
import Education from "../../../resource/education.png";
import Managment from "../../../resource/managment.png";
import Teacher from "../../../resource/teacher.png";
import Material from "../../../resource/material.png";
import Ruble from "../../../resource/ruble.png";
import Home from "../../../resource/home.png";

function List() {
    const sections = [
        {id: 1, img: Info, link: "", text: "Сведения об образовательной организации"},
        {id: 2, img: Structure, link: "", text: "Структура и органы управления образовательной организации"},
        {id: 3, img: Documents, link: "", text: "Документы"},
        {id: 4, img: Education, link: "", text: "Образование"},
        {id: 5, img: Managment, link: "", text: "Руководство"},
        {id: 6, img: Teacher, link: "", text: "Педагогический состав"},
        {id: 8, img: Material, link: "", text: "Материально-техническое обеспечение и оснащенность образовательного процесса. Доступная среда"},
        {id: 8, img: Ruble, link: "", text: "Платные образовательные услуги"},
        {id: 9, img: Home, link: "", text: "Финансово-хозяйственная деятельность"},
        {id: 10, img: "", link: "", text: "Вакантные места для приема (перевода) обучающихся"},
        {id: 11, img: "", link: "", text: "Стипендии  и меры поддержки обучающихся "},
        {id: 12, img: "", link: "", text: "Международное сотрудничество"},
        {id: 13, img: "", link: "", text: "Организация питания в образовательной организации"},
        {id: 14, img: "", link: "", text: "Образовательные стандарты и требования"},
        {id: 15, img: "", link: "", text: "Информация для студентов, выпускников, кандидатов"}
    ]

    const sectionParse = sections.map(section =>
        <div key={section.id} className={s.Section}>
            <div className={s.IconSection}><img className={s.SectionImage} src={section.img} alt="info"/></div>
            <button className={s.TextSection}>{section.text}</button>
        </div>

    )

    return (
        <div className={s.List}>
            {sectionParse}
        </div>
    );
}

export default List;
