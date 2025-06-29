import "./Bosch.scss";
import { russianCities } from "../../utils/russiacity";
import { Select } from 'antd';
import styles from "./BoschModul.module.scss"
import SectionOne from "./boschsection1/SectionOne";
import BoschSection from "./boschsection2/BoschSection";
import BoschSection3 from "./boschsection3/BoschSection3";
import BoschCarousel from "./boschsection4/BoschCarousel";
import BoschTitle from "./boschsection5/BoschTitle";
import BoschSectioSix from "./boschsection6/BoschSectioSix";
import BoschSectionSeven from "./boschsection.7/BoschSeven";
import BoschSectionEgith from "./boschsection8/BoschSectionEgith";
import BoschSectionine from "./boschsection9/BoschSectionine";
import BoschFooter from "./boschFooter/BoschFooter";
const Bosch = () => {
  return (
    <div className='bosch-main'>
      <div className="top-linea"></div>
      <div className="thenavbar">
        <div className="just_navbar">
          <div className="navbar-item1">
            <ul>
              <li>О платформе</li>
              <li>Контакты</li>
              <li>88008008000</li>
            </ul>
          </div>
          <div className="navbar-item2">
            <img className={window.innerWidth == 370 ? styles["imagesBosch-for-phone"] : styles.imagesBosch} src="/лого 1.png" />
          </div>
          <div className="navbar-item3">
            <Select className="selectshow"
              showSearch
              placeholder="ваш город"
              optionFilterProp="label"
              filterSort={(optionA, optionB) => {
                let _a, _b;
                return (
                  (_a = optionA === null || optionA === void 0 ? void 0 : optionA.label) !== null &&
                    _a !== void 0
                    ? _a
                    : ''
                )
                  .toLowerCase()
                  .localeCompare(
                    ((_b = optionB === null || optionB === void 0 ? void 0 : optionB.label) !== null &&
                      _b !== void 0
                      ? _b
                      : ''
                    ).toLowerCase(),
                  );
              }}
              options={russianCities.map(city => ({
                value: city,
                label: city
              }))}
            />
          </div>
        </div>
      </div>
      <div className="fon-bosch">
        <div className="fon-bosch-item1">
          <h2>Ремонт духового шкафа Bosch в Киеве</h2>
          <p>Считайте, что вопрос уже решен. Профессиональная поддержка всегда рядом, что бы Вам ни потребовалось</p>
          <div className="fon-bosch-item1-btns">
            <button id="btn1" className={styles["button-blue-bosch"]}>Заказать обратный звонок</button>
            <button id="btn2" className={styles["button-border-bosch"]}>Выбрать мастера</button>
          </div>
        </div>
        <div className="fon-bosch-item2">
          <div className="steps">
          <img src="/Vector.png"  />

            <span>Бесплатная
              диагностика</span>
          </div>
          <div className="steps">
          <img src="/Vector-1.png"  />
            <span>Бесплатный
            выезд мастера
          </span></div>
          <div className="steps">
            <img src="/Frame 31.png"  /><span>Ремонт
            за 1 день
          </span></div>
          <div className="steps">
          <img src="/Vector-3.png"  /><span>Гарантия
          от 365 дней
          </span></div>
          <div className="steps">
            <img src="/Frame 45.png"  /><span>Опыт мастеров
            более 10 лет
          </span></div>
          <div className="steps">
          <img src="/Vector-4.png"  /><span>Персональный
          менеджер
          </span></div>
        </div>
      </div>
      <div>
        <SectionOne/>
      </div>
      <div>
        <BoschSection/>
      </div>
      <div>
        <BoschSection3/>
      </div>
      <div>
        <BoschCarousel/>
      </div>
      <div><BoschTitle /></div>
      <div>
        <BoschSectioSix/>
      </div>
      <div>
        <BoschSectionSeven/>
      </div>
      <div>
        <BoschSectionEgith/>
      </div>
      <div>
        <BoschSectionine/>
      </div>
      <div>
        <BoschFooter/>
      </div>
    </div>
  )
}

export default Bosch