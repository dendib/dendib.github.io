import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./BoschCarousel.scss";
import { useState } from "react";

const reviews = [
    {
      id: 1,
      name: "Антон Грисевич",
      date: "7 лет",
      img: "/src/assets/LgImgaes/Rectangle 66 (2).png",
      stars: 5,
      grade: "4,6 24 оценки"
    },
    {
      id: 2,
      name: "Павел Матухно",
      date: "3 года",
      img: "/src/assets/LgImgaes/Rectangle 66 (3).png",
      stars: 4,
      grade: "4,6 25 оценки"
    },
    {
      id: 3,
      name: "ВладимЧик Повелецкий",
      date: "1 год",
      img: "/src/assets/imagesSamsungs/samsungtopimage/Rectangle 66 (1).png",
      stars: 4,
      grade: "4,1 24 оценки"
    },
    {
      id: 5,
      name: "Игорь Иванов",
      date: "5 лет",
      img: "/src/assets/imagesSamsungs/samsungtopimage/Rectangle 66.png",
      stars: 5,
      grade: "4,6 24 оценки"
    },
    {
      id: 6,
      name: "Игорь Иванов",
      date: "5 лет",
      img: "/src/assets/imagesSamsungs/samsungtopimage/Rectangle 66.png",
      stars: 5,
      grade: "4,6 24 оценки"
    },
    {
      id: 7,
      name: "Игорь Иванов",
      date: "5 лет",
      img: "/src/assets/imagesSamsungs/samsungtopimage/Rectangle 66.png",
      stars: 5,
      grade: "4,6 24 оценки"
    },
  ];

const BoschCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const getPositionClass = (index:number) => {
    if (index === currentIndex) return "center";
    if (index === (currentIndex + 1) % reviews.length) return "right";
    if (index === (currentIndex - 1 + reviews.length) % reviews.length)
      return "left";
    return "hidden";
  };

  return (
    <section className="carousel-bosch">
      <h1>Мы подобрали лучших мастеров:</h1>
      <div className="carousel-wrapper">
        {reviews.map((review, index) => {
          const posClass = getPositionClass(index);
          if (posClass === "hidden") return null;

          return (
            <div className={`carousel-item ${posClass}`} key={review.id}>
              <div className="imag">
                <img src={review.img} alt={review.name} />
              </div>
              <div className="table">
                <h3>{review.name}</h3>
                <div className="linea5"></div>
                <p>Мастер по ремонту стиральных машин</p>
                <p>Стаж работы: {review.date}</p>
                <div className="linea5"></div>
             <div className="stars-box">
             <div className="stars">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                  <span>{review.grade}</span>
             </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="dots">
        {reviews.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`dot ${i === currentIndex ? "active" : ""}`}
          ></span>
        ))}
      </div>

      <div className="btns-slick-bosch">
        <button className="bosch-btns-slick" onClick={next}>
          <LeftOutlined />
        </button>
        <button className="bosch-btns-slick" onClick={prev}>
          <RightOutlined />
        </button>
      </div>
    </section>
  );
};

export default BoschCarousel;


