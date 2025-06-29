import "./SamsungHeader.scss";
import { useEffect, useState } from "react";
import img1 from "/samsungtopimage/Rectangle 122.png";
import img2 from "/samsungtopimage/Rectangle 122.png";
import img3 from "/samsungtopimage/Rectangle 122.png";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const images = [img1, img2, img3];

const SamsungHeader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="background-carousel"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
     <div className="wrapper-btns">
     <button className="nav-button left" onClick={goToPrev}>
        <LeftOutlined />
      </button>
      <button className="nav-button right" onClick={goToNext}>
        <RightOutlined />
      </button>
     </div>
      <div className="carousel-container">

        <div className="servis">
          <h1>Сервисный центр Samsung в Киеве</h1>
          <h4>Ремонт и обслуживание техники от мастеров с 10-летним опытом</h4>
          <div className="btn-samsung">
            <button>ВЫБРАТЬ МАСТЕРА</button>
            <h5>ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК</h5>
          </div>
        </div>
      <div className="indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
          ></div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default SamsungHeader;
