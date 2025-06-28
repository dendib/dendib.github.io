import "./BoschSection2.scss"
import styles from "../BoschModul.module.scss"
const BoschSection = () => {
  return (
    <div className="bosch-section2">
        <div className="bosch-dont-choose">
             <img src="/src/assets/imagesBosch/Mockup 1.png"  />
             <div className="bosch-section2-right">
                 <h2>Не нашли свою поломку?</h2>
                 <p>Наши специалисты бесплатно Вас проконсультируют
                 и ответят на все вопросы по телефону <span>+380-(44) 021-50-10</span></p>
                 <h5>Или мы сами свяжемся с вами в любое удобное время</h5>
                 <button className={styles["button-blue-bosch"]}>Оставить заявку</button>
             </div>
        </div>
    </div>
  )
}

export default BoschSection