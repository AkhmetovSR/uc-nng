import { motion} from "framer-motion";
import s from "./S3.module.css";
import Ustav from "../../../resource/ustav.rar";
import SelfCheck from "../../../resource/selfCheck.zip";
import PVRObuch from "../../../resource/PVRobuch.zip";
import Polozheniya from "../../../resource/polozheniya.zip";
import UstavImg from "../../../resource/ustav.webp";
import Report from "../../../resource/report.webp";
import Rules from "../../../resource/rules.webp";
import Documents from "../../../resource/document.webp";

function S3() {
    const documentsArray = [
        {id: 1, img: UstavImg, link: Ustav, text: "Устав АО «РН-Няганьнефтегаз»"},
        {id: 2, img: Report, link: SelfCheck, text: "Отчет о результатах самообследования"},
        {id: 3, img: Rules, link: PVRObuch, text: "Правила внутреннего распорядка обучающихся"},
        {id: 4, img: Documents, link: Polozheniya, text: "Локальные нормативные акты образовательной организации по основным вопросам организации и " +
                "осуществления образовательной деятельности, в том числе правила приема обучающихся, режим занятий обучающихся, формы, " +
                "периодичность и порядок текущего контроля успеваемости и промежуточной аттестации обучающихся; порядок и основания " +
                "перевода, отчисления и восстановления обучающихся; порядок оформления возникновения, приостановления и прекращения отношений между " +
                "образовательной организацией и обучающимися и (или) родителями (законными представителями) несовершеннолетних обучающихся."
        }
    ]

    const documents = documentsArray.map(docum =>
    <div key={docum.id} className={s.Link} className={s.Ref}>
            <div className={s.LinkImg}><img src={docum.img} alt="img"/></div>
            <div><a href={docum.link} download>{docum.text}</a></div>
    </div>
    )

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 0.4}} className={s.S3}>
            <div className={s.Title}><h3>Документы</h3></div>
            {documents}
            <div>
                <h4 className={s.PreTitle}>Правила внутреннего трудового распорядка</h4>
                <div className={s.Text}>Учебный центр является структурным подразделением АО «РН-Няганьнефтегаз». В соответствии с требованиями части 4 статьи 189 ТК РФ,
                    в Обществе разработано Положение АО «РН-Няганьнефтегаз» Правила внутреннего трудового распорядка № П2-03 Р-0015 ЮЛ-415.
                    Данный документ относится к локально-нормативным документам Общества и не подлежит публикации в информационно-телекоммуникационной
                    сети "Интернет".
                </div>
                <h4 className={s.PreTitle}>Коллективный договор</h4>
                <div className={s.Text}>
                    В Учебном центре АО «РН-Няганьнефтегаз» действует Коллективный договор АО «РН-Няганьнефтегаз», принятый 04 декабря 2015 года на Конференции трудового
                    коллектива, пролонгированный до 31 декабря 2023 года и зарегистрирован в отделе трудовых отношений и
                    охраны труда Администрации города Нягани 28 декабря 2020 года.
                </div>
            </div>
        </motion.div>
    );
}

export default S3;
