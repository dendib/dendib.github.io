import "./BoschSectionsix.scss";
import { useState } from 'react';
import styles from "/src/sections/BoschPage/BoschModul.module.scss"
const BoschSectioSix = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [time, setTime] = useState('');

    return (
        <div className="bosch-section-six">
            <img src="/background_transparent_01 1.png" alt="dedmestniy" />
            <div className="bosch-section-six-box">
                <div className="box1">
                    <h1>Онлайн заявка
                        на вызов мастера</h1>
                    <div className="box-item">
                        <h1>20%</h1>
                        <span>ОСТАВЬТЕ ЗАЯВКУ
                            НА НАШЕМ САЙТЕ
                            И ПОЛУЧИТЕ СКИДКУ</span>
                    </div>
                </div>
                <div className="box2">

                    <div className="input-wrapper">
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            autoComplete="off"
                            placeholder=" "
                        />
                        <label htmlFor="name">Введите ваше имя</label>
                    </div>

                    <div className="input-wrapper">
                        <input

                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            autoComplete="off"
                            placeholder=" "
                        />
                        <label htmlFor="phone">Введите ваш телефон</label>
                    </div>

                    <div className="input-wrapper">
                        <input
                            className="inputlast"
                            type="text"
                            id="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                            autoComplete="off"
                            placeholder=" "
                        />
                        <label htmlFor="time">Выберите удобное время:</label>
                    </div>

                </div>
                <button className={styles["button-blue-bosch"]}>Оставить заявку</button>
            </div>
        </div>
    );
}

export default BoschSectioSix;
