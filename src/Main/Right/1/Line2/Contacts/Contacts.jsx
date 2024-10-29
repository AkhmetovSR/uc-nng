import s from "./Contacts.module.css"

function Contacts() {
    return (
        <div className={s.Contacts}>
            <div className={s.WorkTime}>
                <h5>Режим работы</h5>
                <pre>Пн-Пт:     8.30 - 18.00</pre>
                <pre>Обед:      12.30 - 14.00</pre>
                <pre>Сб-Вс:     выходной</pre>
            </div>
            <div className={s.Contact}>
                <h5>Контакты</h5>
                <pre>8(34672) 92-222</pre>
                <pre>8(34672) 94-444</pre>
                <pre>rn_nng@nng.rosneft.ru</pre>
            </div>
            <div className={s.Address}>
                <h5>Юридический адрес</h5>
                <pre>Ханты-Мансийский<br/>
                    автономный округ - Югра,<br/>
                    г. Нягань, ул. Сибирская,<br/>
                    дом 10, корпус 1
                </pre>
            </div>
            <div className={s.Manager}>
                <h5>Начальник Учебного центра<br/>АО “РН-Няганьнефтегаз”:</h5>
                <pre>Миронова Анастасия<br/>Ивановна</pre>
                <pre>8 (34672) 92-222 доб. 1536</pre>
                <pre>rn_nng@nng.rosneft.ru</pre>
            </div>
        </div>
    );
}

export default Contacts;
