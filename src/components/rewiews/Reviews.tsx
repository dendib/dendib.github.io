import { useState } from 'react';
import "./Reviews.scss";
import Buttons from '../button/Buttons';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const reviews = [
  {
    id: 1,
    text: "Спасибо за спасённый ноутбук! Обратился за профессиональной чисткой после разлитого на ноут чая, сделали быстро и качественно, всё объяснили и рассказали, как действовать в таких случаях. Очень рекомендую!",
    name: "Александр Меньшов",
    role: "Клиент сервисного центра",
    brand: "Samsung",
    master: "Николай Антоненко",
    date: "19.12.2021",
    img: "src/assets/images/homepage-img/Ellipse 31-1.png",
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
    img: "src/assets/images/homepage-img/Ellipse 31.png",
    stars: 4,
  },

];

const Reviews = () => {
  const [index, setIndex] = useState(0);

  const goNext = () => setIndex((prev) => (prev + 1) % reviews.length);
  const goPrev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  const current = reviews[index];
  const nextIndex = (index + 1) % reviews.length;
  const faded = reviews[nextIndex];

  return (
    <div className='reviews'>
      <div className="reviews-item">
        <div className="item-one">
          <h2>Отзывы</h2>
          <img className='image1' src="/src/assets/images/homepage-img/рейтинг.png" alt="Reyting" />
          <img className='image2' src="/src/assets/images/homepage-img/рейтинг (1).png"  />
          <div className="item-son">
            <Buttons text="ОСТАВИТЬ ОТЗЫВ" width='179px'  onClick={() => console.log('Button clicked')} />
            <span>ЧИТАТЬ ВСЕ ОТЗЫВЫ</span>
          </div>
        </div>

        <div className="item-two">
          <div className="carousel-wrapper">
                <img className='img1' src="/src/assets/images/homepage-img/Frame 32.png"  />
            <div className="carousel">
              <div className="item-box active">
                <p>{current.text}</p>
                <div className="linya"></div>
                <img className='img2' src={current.img} alt={current.name} />
                <h4>{current.name}</h4>
                <div className="customers">
                  <span>{current.role} {current.brand}</span>
                  <span>мастер: {current.master}</span>
                </div>
                <div className="customers2">
                  <span>{current.date}</span>
                  <span> {Array(current.stars).fill('⭐').map((star, idx) => (
    <span key={idx}>{star}</span>
  ))}</span>
                </div>
              </div>

              <div className="item-box faded glow">
              <img className='img1' src="/src/assets/images/homepage-img/Frame 32.png"  />
                <p>{faded.text}</p>
                <div className="linya"></div>
                <img className='img2' src={faded.img} alt={faded.name} />
                <h4>{faded.name}</h4>
                <div className="customers">
                  <span>{faded.role} {faded.brand}</span>
                  <span>мастер: {faded.master}</span>
                </div>
                <div className="customers2">
                  <span>{faded.date}</span>
                  <span> {Array(faded.stars).fill('⭐').map((star, idx) => (
    <span key={idx}>{star}</span>
  ))}</span>
                </div>
              </div>
            </div>

          </div>
          <div className="btns">
            <button onClick={goPrev} className="carousel-btn"><LeftOutlined/></button>
            <button onClick={goNext} className="carousel-btn"><RightOutlined/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
