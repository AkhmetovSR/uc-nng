import s from "./Line2.module.css";
import {motion} from "framer-motion";
import Contacts from "./Contacts/Contacts.jsx";

function Line2() {
    return (
        <div className={s.Line2}>
            <motion.div initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.3}} className={s.History}>
                <div>
                    <h4>История Учебного центра</h4>
                </div>
                <div>
                    В начале 1980 года на разработку нового Красноленинского нефтегазоконденсатного
                месторождения стали приезжать люди из разных концов страны. Многие без необходимой
                квалификации, учились у специалистов и друг у друга, сообща вникая в тонкости дела. Нехватка
                специалистов остро ощущалась на производстве. И 8 октября 1980 года в посёлке Нях был создан
                филиал Урайского учебно-курсового комбината (УКК). Для подготовки и переподготовки
                работников было выделено три рабочих вагончика. Первый набор слушателей был по специальности
                «Оператор котельных установок».
                1 февраля 1981 года Учебно-курсовой комбинат утратил статус филиала и вошел в состав НГДУ
                «Красноленинскнефть». Вместе с развитием нефтегазодобывающего предприятия, развивалась
                материально-техническая и учебная базы комбината, укреплялся кадровый состав. УКК стал
                кузницей кадров не только нефтяной, но и других отраслей промышленности. В их числе слесарь
                КИПиА, электромонтер по обслуживанию буровых, бурильщик капитального ремонта скважин,
                лаборант химического анализа, машинист технологических насос и другие. Операторы по добыче
                нефти и газа и слесари по ремонту нефтепромыслового оборудования получали практические
                навыки на полигоне, на котором был построен мини-куст с действующим оборудованием,
                станком-качалкой, газозамерной установкой. Здесь же проходили практику студенты.
                Кроме штатных сотрудников в УКК вели занятия и внештатные преподаватели, это были
                специалисты НГДУ «Красноленинскнефть» и производственного объединения
                «Красноленинскнефтегаз». На нефтепромыслах можно встретить работников, для которых УКК стал
                первым и единственным «университетом».
                Через УКК прошли десятки тысяч сотрудников предприятия.
                В разные годы, в след за изменением названия предприятия, комбинат менял свое название. Он
                был в статусе Образовательного центра
                ОАО «ТНК-Нягань», сейчас это Учебный центр АО «РН-Няганьнефтегаз». Но неизменным оставалась
                его задача – поддерживать
                эффективность производства за счёт повышения квалификации сотрудников предприятия,
                совершенствования их профессиональных
                навыков с помощью учебных программ.
                </div>

                <div>
                    <h4>Учебный центр сегодня</h4>
                </div>
                <div>
                    Учебный центр АО «РН-Няганьнефтегаз» является структурным подразделением АО
                    «РН-Няганьнефтегаз» входящим в состав Блока по персоналу и социальным программам.
                    Деятельность Учебного центра направлена на качественное удовлетворение потребности в
                    обучении персонала АО «РН-Няганьнефтегаз». Для организации качественного, удобного и
                    эффективного обучения сотрудников Общества учебные классы организованны в городе Нягань и на
                    территории производственных подразделений.
                    Центр реализует основные программы профессионального обучения и программы дополнительного
                    профессионального образования повышение квалификации.
                    Профессиональная подготовка, переподготовка и повышение квалификации рабочих, специалистов
                    руководителей осуществляется по следующим направлениям:
                    • Добыча нефти и газа
                    • Перекачка и подготовка нефти
                    • Электротехника
                    • Теплотехника и газовое хозяйство
                    • Грузоподъёмные механизмы
                    • Охрана труда
                    • Промышленная безопасность
                </div>
            </motion.div>

            <motion.div initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}} className={s.SubContacts}>
                <Contacts/>
            </motion.div>
        </div>
    );
}

export default Line2;