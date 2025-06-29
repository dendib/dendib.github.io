import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";
import styles from "../BoschModul.module.scss"
import "./BoschSectionEight.scss";
const reviews2 = [
    {
      id: 1,
      text: "Спасибо за спасённый ноутбук! Обратился за профессиональной чисткой после разлитого на ноут чая, сделали быстро и качественно, всё объяснили и рассказали, как действовать в таких случаях. Очень рекомендую!",
      name: "Александр Меньшов",
      role: "Клиент сервисного центра",
      brand: "Samsung",
      master: "Николай Антоненко",
      date: "19.12.2021",
      img: "/фото.png",
      stars: 5,
    },
    {
      id: 2,
      text: "Приятно, когда твою технику обслуживают профессионалы. Менял стекло на Samsung Note 8 и был приятно удивлен качеством. Парень на приемке рассказал про все нюансы и возможные косяки, ибо данная процедура очень сложна в исполнении, а на выходе получилось лучше, чем ожидал. Буду теперь ходить сюда",
      name: "Владимир Повелецкий",
      role: "Клиент сервисного центра",
      brand: "Samsung",
      master: "Илья Сахаров",
      date: "11.11.2021",
      img: "/фото (2).png",
      stars: 4,
    },
  
  ];
const BoschSectionEgith = () => {
    const [indextwo, setIndexTwo] = useState(0);
      const goNext = () => setIndexTwo((prev) => (prev + 1) % reviews2.length);
        const goPrev = () => setIndexTwo((prev) => (prev - 1 + reviews2.length) % reviews2.length);
      
        const currenttwo = reviews2[indextwo];
        const nextIndex = (indextwo + 1) % reviews2.length;
        const faded = reviews2[nextIndex];
  return (
    <section className='bosch-rewievs'>
          <div className="reviews-item10">
            <div className="item-one10">
              <h2>Отзывы</h2>
              <img className='image110' src="/рейтинг.png" alt="Reyting" />
              <img className='image210' src="/рейтинг (1).png" />
              <div className="item-son10">
                <button className={styles["button-blue-bosch"]}>Оставить отзыв</button>
                <span>ЧИТАТЬ ВСЕ ОТЗЫВЫ</span>
              </div>
            </div>

            <div className="item-two10">
              <div className="carousel-wrapper10">
                <img className='img110' src="/Frame 32 (1).png" />
                <div className="carousel10">
                  <div className="item-box10 active10">
                    <p>{currenttwo.text}</p>
                    <div className="linya10"></div>
                    <img className='img210' src={currenttwo.img} alt={currenttwo.name} />
                    <h4>{currenttwo.name}</h4>
                    <div className="customers10">
                      <span>{currenttwo.role} {currenttwo.brand}</span>
                      <span>мастер: {currenttwo.master}</span>
                    </div>
                    <div className="customers210">
                      <span>{currenttwo.date}</span>
                      <span>{Array(currenttwo.stars).fill('⭐').map((star, idx) => (
                        <span key={idx}>{star}</span>
                      ))}</span>
                    </div>
                  </div>

                  <div className="item-box10 faded10 glow10">
                    <img className='img110' src="/Frame 32 (1).png" />
                    <p>{faded.text}</p>
                    <div className="linya10"></div>
                    <img className='img210' src={faded.img} alt={faded.name} />
                    <h4>{faded.name}</h4>
                    <div className="customers10">
                      <span>{faded.role} {faded.brand}</span>
                      <span>мастер: {faded.master}</span>
                    </div>
                    <div className="customers210">
                      <span>{faded.date}</span>
                      <span>{Array(faded.stars).fill('⭐').map((star, idx) => (
                        <span key={idx}>{star}</span>
                      ))}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btnsbosch210">
                <button onClick={goPrev} className="carousel-btnbosch210"><LeftOutlined /></button>
                <button onClick={goNext} className="carousel-btnbosch210"><RightOutlined /></button>
              </div>
            </div>
          </div>
        </section>
  )
}

export default BoschSectionEgith