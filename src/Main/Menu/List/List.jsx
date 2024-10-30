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
import Vacation from "../../../resource/vacation.png";
import Scholarship from "../../../resource/scholarship.png";
import World from "../../../resource/world.png";
import Cook from "../../../resource/cook.png";
import Gost from "../../../resource/gost.png";
import InfoStudent from "../../../resource/infoStudent.png";
import {NavLink} from "react-router-dom";
import { motion} from "framer-motion";

function List() {
    const sections = [
        {id: 1, img: Info, link: "/", text: "Сведения об образовательной организации"},
        {id: 2, img: Structure, link: "/structure", text: "Структура и органы управления образовательной организации"},
        {id: 3, img: Documents, link: "/documents", text: "Документы"},
        {id: 4, img: Education, link: "/education", text: "Образование"},
        {id: 5, img: Managment, link: "/4", text: "Руководство"},
        {id: 6, img: Teacher, link: "/5", text: "Педагогический состав"},
        {id: 8, img: Material, link: "/6", text: "Материально-техническое обеспечение и оснащенность образовательного процесса. Доступная среда"},
        {id: 8, img: Ruble, link: "/7", text: "Платные образовательные услуги"},
        {id: 9, img: Home, link: "/8", text: "Финансово-хозяйственная деятельность"},
        {id: 10, img: Vacation, link: "/9", text: "Вакантные места для приема (перевода) обучающихся"},
        {id: 11, img: Scholarship, link: "/00", text: "Стипендии  и меры поддержки обучающихся "},
        {id: 12, img: World, link: "/12", text: "Международное сотрудничество"},
        {id: 13, img: Cook, link: "/13", text: "Организация питания в образовательной организации"},
        {id: 14, img: Gost, link: "/14", text: "Образовательные стандарты и требования"},
        {id: 15, img: InfoStudent, link: "/15", text: "Информация для студентов, выпускников, кандидатов"}
    ]

    const sectionParse = sections.map(section =>
        <motion.div key={section.id} className={s.Section} whileHover={{scale:1.06}}>
            <div className={s.IconSection}><img className={s.SectionImage} src={section.img} alt="info"/></div>
            <NavLink to={section.link} className={s.Nav}><button className={s.TextSection}>{section.text}</button></NavLink>
        </motion.div>
    )

    return (
        <div className={s.List}>
            {sectionParse}
        </div>
    );
}

export default List;
