import s from "./Text.module.css";
import Licensie from "../../../../resource/licensie.zip";

function Text() {
    return (
        <div className={s.Text}>
            <p>Обучение осуществляется в соответствии <a href={Licensie} download>с лицензией на осуществление образовательной деятельности №3284 от
            24.05.2019 выданную Службой по контролю и надзору в сфере образования ХМАО-Югры.</a> <br/>
            УЦ имеет бессрочную лицензию на осуществление образовательной деятельности по следующим образовательным
            программам:</p>
            • профессиональное обучение<br/>
            • дополнительное образование, подвид - дополнительное профессиональное образование<br/><br/>
            <p>Обучение в Учебном центре АО «РН-Няганьнефтегаз» проводиться по следующим программам:</p>
            • программы профессионального обучения - программы профессиональной подготовки по профессиям рабочих<br/>
            • программы профессионального обучения - программы переподготовки рабочих (обучение вторым (смежным)
            профессиям)<br/>
            • программы профессионального обучения - программы повышения квалификации рабочих<br/>
            • дополнительные профессиональные программы повышения квалификации<br/><br/>

            <p>Обучение персонала осуществляется в очной, очно-заочной и заочной форме обучения:</p>
            • очное теоретическое обучение проводится в учебных классах<br/>
            • практическое обучение проводится в производственных структурных подразделениях, учебном полигоне<br/>
            • электронное обучение и дистанционные образовательные технологии реализуются с применением информационных
            технологий, программных продуктов<br/><br/>

            <p>Для осуществления учебного процесса Учебный центр самостоятельно разрабатывает и утверждает программы
            обучения, учебные планы, календарные учебные графики и расписание учебных занятий.</p>
            <p>В Учебном центре для реализации учебных программ устанавливаются следующие виды учебных занятий: лекции,
            практические занятия, семинары, консультации, занятия на тренажерах, на компьютерах, самостоятельные занятия
            слушателей, а также могут проводиться и другие виды учебных занятий.</p>
            <p>В Учебном центре АО «РН-Няганьнефтегаз» обучение организовано на русском языке.</p>
        </div>
    );
}

export default Text;
