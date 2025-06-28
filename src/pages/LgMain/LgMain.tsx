import { russianCities } from '../../utils/russiacity';
import { Select } from 'antd';
import "./LgMain.scss";
import { useEffect, useState } from 'react';
import img1 from "../../assets/LgImgaes/фон.png";
import img2 from "../../assets/LgImgaes/fon2.png";
import img3 from "../../assets/LgImgaes/fon3.png";
import { LeftOutlined, RightOutlined, StarFilled, StarOutlined } from '@ant-design/icons';
const images = [img1, img2, img3];

const texnalogycLg = [
  {
    img: "../../src/assets/LgImgaes/ga-b459smum-holodilnik-lg-2_600_thumbnail 1.png",
    name: "Холодильник",
  },
  {
    img: "../../src/assets/LgImgaes/стиральная_thumbnail 1.png",
    name: "Стиральная машина"
  },
  {
    img: "../../src/assets/LgImgaes/сушильная 1.png",
    name: "Сушильная машина",
  },
  {
    img: "../../src/assets/LgImgaes/179357025_w640_h640_mikrovolnovaya-pech-lg 1.png",
    name: "Микроволновая печь",
  },
  {
    img: "../../src/assets/LgImgaes/tovar107715_thumbnail 1.png",
    name: "Пылесос",
  },
  {
    img: "../../src/assets/LgImgaes/179357025_w640_h640_mikrovolnovaya-pech-lg 1.png",
    name: "Духовой шкаф",
  },
  {
    img: "../../src/assets/LgImgaes/варочная панель 1.png",
    name: "Варочная панель",
  },
  {
    img: "../../src/assets/LgImgaes/910d6c61ced9f3e6d29cc95b85354145 1.png",
    name: "Стайлер для одежды",
  },
  {
    img: "../../src/assets/LgImgaes/png-transparent-air-conditioning-lg-electronics-Сплит-систем_thumbnail 1.png",
    name: "Кондиционер для дома",
  },
  {
    img: "../../src/assets/LgImgaes/large_02_thumbnail 1.png",
    name: "Очиститель / Увлажнитель воздуха",
  },
  {
    img: "../../src/assets/LgImgaes/вытяжка 1.png",
    name: "Кухонная вытяжка",
  },
];

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
    name: "Владимир Повелецкий",
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

const stories = [
  {
    id: 1,
    hp: "Galaxy Note20 Ultra",
    prob: "Повреждение экрана (трещины на дисплее и тачскрине)",
    solution: "Замена экрана",
    warranty: "1 месяц",
    price: "100 грн",
    master: "Геннадий Левченко",
    client: {
      name: "Иван Красов",
      comment: "Я отдавал в ремонт телефон Samsung. До этого сервиса обратилась в другой, а там запчасти для моей модели закончились. Я позвонил сюда, уточнил, попросил, чтобы за сутки все точно сделали. Мне пообещали, что успеют, и не обманули – на следующий день ближе к вечеру телефон был готов. Дали гарантию, так что если будут какие-то проблемы, обращусь к ним же.",
      rating: 5,
      date: "14.12.2020",
      image: "../../src/assets/LgImgaes/Ellipse 31 (1).png",
      manager: "Николай Филатов"
    }
  },
  {
    id: 2,
    hp: "Samsung A52",
    prob: "Повреждение экрана (трещины на дисплее и тачскрине)",
    solution: "Замена дисплейного модуля",
    warranty: "1 месяц",
    price: "130 грн",
    master: "Сергей Петров",
    client: {
      name: "Андрей Мельников",
      comment: "Я отдавал в ремонт телефон Samsung. До этого сервиса обратилась в другой, а там запчасти для моей модели закончились. Я позвонил сюда, уточнил, попросил, чтобы за сутки все точно сделали. Мне пообещали, что успеют, и не обманули – на следующий день ближе к вечеру телефон был готов. Дали гарантию, так что если будут какие-то проблемы, обращусь к ним же.",
      rating: 4,
      date: "22.01.2021",
      image: "/src/assets/imagesSamsungs/samsungtopimage/Ellipse 31.png",
      manager: "Алексей Смирнов"
    }
  }
];
const reviews2 = [
  {
    id: 1,
    text: "Спасибо за спасённый ноутбук! Обратился за профессиональной чисткой после разлитого на ноут чая, сделали быстро и качественно, всё объяснили и рассказали, как действовать в таких случаях. Очень рекомендую!",
    name: "Александр Меньшов",
    role: "Клиент сервисного центра",
    brand: "Samsung",
    master: "Николай Антоненко",
    date: "19.12.2021",
    img: "../../src/assets/LgImgaes/фото.png",
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
    img: "../../src/assets/LgImgaes/фото (2).png",
    stars: 4,
  },

];
const LgMain = () => {
  const [indextwo, setIndexTwo] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [oneThousandSteps, setOneThousandSteps] = useState('');
  const [name, setName] = useState("");
  const [center, setCenter] = useState("");
  const [phone, setPhone] = useState("");
  const [master, setMaster] = useState("");
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const maxLength = 1000;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setOneThousandSteps(value);
    }
  };
  const handleUpdate = () => {
    setOneThousandSteps("");
    setRating(0);
    setHovered(0);
    setName("");
    setCenter("");
    setPhone("");
    setMaster("");
  }
  const activeColor = '#A50034';
  const defaultColor = '#A50034';
  const [activeTech, setActiveTech] = useState("Бытовая техника");
  const goNext = () => setIndexTwo((prev) => (prev + 1) % reviews2.length);
    const goPrev = () => setIndexTwo((prev) => (prev - 1 + reviews2.length) % reviews2.length);
  
    const currenttwo = reviews2[indextwo];
    const nextIndex = (indextwo + 1) % reviews2.length;
    const faded = reviews2[nextIndex];
  const nextStory = () => {
    setCurrentStoryIndex((prevIndex) =>
      prevIndex + 1 < stories.length ? prevIndex + 1 : 0
    );
  };

  const prevStory = () => {
    setCurrentStoryIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : stories.length - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

 
  const itemsPerReviewSlide = 2; 
  const totalReviewSlides = Math.ceil(reviews.length / itemsPerReviewSlide);

  const nextReviewSlide = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % totalReviewSlides);
  };

  const prevReviewSlide = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + totalReviewSlides) % totalReviewSlides);
  };

  const visibleReviews = reviews.slice(
    currentReviewIndex * itemsPerReviewSlide,
    currentReviewIndex * itemsPerReviewSlide + itemsPerReviewSlide
  );


  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev - 1 <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    const interval = setInterval(goToNextImage, 2000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (val:number |  string): string => String(val).padStart(2, '0');
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = Math.floor(timeLeft % 60);

  const technics = [
    "Бытовая техника",
    "IT продукты",
    "ТВ/Аудио/Видео",
  ];

  return (
    <div>
      <div className="thenavbar">
        <div className="just_navbar">
          <div className="navbar-itemlg1">
            <ul>
              <li>О платформе</li>
              <li>Контакты</li>
              <li>88008008000</li>
            </ul>
          </div>
          <div className="navbar-itemlg2">
            <img className='imgLg' src="../../src/assets/LgImgaes/2108662082.png" alt="LG Logo" />
          </div>
          <div className="navbar-itemlg3">
            <Select className="selectshow2"
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
                ).toLowerCase()
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

    
      <div
        className="background-carouselLg"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      >
        <div className="wrapper-btnslg">
          <button className="nav-button-lg left" onClick={goToPrevImage}>
            <LeftOutlined />
          </button>
          <button className="nav-button-lg right" onClick={goToNextImage}>
            <RightOutlined />
          </button>
        </div>
        <div className="carousel-containerlg">
          <div className="servislg">
            <h1>Сервисный центр LG в Киеве</h1>
            <h4>Ремонт и обслуживание техники от мастеров с 10-летним опытом</h4>
            <div className="btn-lg">
              <button className='lgbtn1'>ВЫБРАТЬ МАСТЕРА</button>
              <h5>ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК</h5>
            </div>
          </div>
          <div className="indicators">
            {images.map((_, index) => (
              <div
                key={index}
                className={`indicator ${index === currentImageIndex ? "active" : ""}`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <main>
        <section className="lg-first">
          <div className="mini-lg-cards">
            <div className="msc first">
              <img src="/src/assets/imagesSamsungs/samsungtopimage/Vector-1.png" alt="diagnostic icon" />
              <span>
                Бесплатная
                диагностика
              </span>
            </div>
            <div className="msc second">
              <img src="/src/assets/imagesSamsungs/samsungtopimage/Vector.png" alt="courier icon" />
              <span>Выезд мастера
                в течение 1 часа</span>
            </div>
            <div className="msc third">
              <img src="/src/assets/imagesSamsungs/samsungtopimage/Group.png" alt="repair icon" />
              <span>Ремонт
                за 1 день</span>
            </div>
          </div>
        </section>
        <section className="lg-second">
          <div className="lg-all-technalogy">
            <h2>Мы осуществляем ремонт техники LG всех видов</h2>
            <p>
              Чтобы ни произошло с Вашей техникой мы всегда постараемся найти самое оптимальное решение для восстановления её работоспособности и внешнего вида, обслужим и осуществим настройку
            </p>
            <div className="technic-address-lg">
              {technics.map((item) => (
                <h3
                  key={item}
                  className={activeTech === item ? 'active' : ''}
                  onClick={() => setActiveTech(item)}
                >
                  {item}
                </h3>
              ))}
            </div>
            <div className="technalogy-cards-lg">
              {texnalogycLg
                .filter((_, index) => {
                  if (activeTech === 'Бытовая техника') return true;
                  else if (activeTech === 'ТВ/Аудио/Видео') return index >= 6 && index < 12;
                  return index < 6; 
                })
                .map((item, index) => (
                  <div
                    key={index}
                    className={`technalogy-card-lg ${index === 0 ? 'tall' : ''}`}
                  >
                    <img src={item.img} alt={item.name} />
                    <span>{item.name}</span>
                  </div>
                ))}
            </div>
            <div className="notfind-lg">
              <h3>Не нашли свой вид техники?</h3>
              <p className="text-lg">
                Наши специалисты бесплатно вас проконсультируют и ответят на все вопросы по телефону
                88008008000 или Вы можете оставить заявку и наш специалист свяжется с Вами в течение 1
                часа
              </p>
              <button className="btn-lg">ОСТАВИТЬ ЗАЯВКУ</button>
            </div>
          </div>
        </section>
        <section className="lg-second2">
          <div className="lg-all-technalogy">
            <h2>Ответьте на 3 вопроса и получите подарок
              от нашего сервисного центра</h2>
            <ul>
              <li className='first-li'>01</li>
              <li><nav></nav></li>
              <li>02</li>
              <li>03</li>
              <li>04</li>
            </ul>
            <h3 className="h-three">1. Выберите ваш вид техники</h3>
            <div className="technic-address-lg">
              {technics.map((item) => (
                <h3
                  key={item}
                  className={activeTech === item ? 'active' : ''}
                  onClick={() => setActiveTech(item)}
                >
                  {item}
                </h3>
              ))}
            </div>
            <div className="technalogy-cards-lg">
              {texnalogycLg
                .filter((_, index) => {
                  if (activeTech === 'Бытовая техника') return true;
                  else if (activeTech === 'ТВ/Аудио/Видео') return index >= 6 && index < 12;
                  return index < 6; 
                })
                .map((item, index) => (
                  <div
                    key={index}
                    className={`technalogy-card-lg ${index === 0 ? 'tall' : ''}`}
                  >
                    <img src={item.img} alt={item.name} />
                    <span>{item.name}</span>
                  </div>
                ))}
            </div>
          </div>
        </section>
        <section className="Lg-four">
          <div className="smile-kuryera">
            <img src="/src/assets/LgImgaes/курьер (1).png" alt="smile" />
            <div className="appeal chaqirmoq ">
              <h1>Мы дорожим
                вашим временем!</h1>
              <p>
                Вам не нужно никуда ехать Мы сделаем все за вас
                <br />
                5 курьеров готовы к выезду прямо сейчас!
              </p>
              <button>ВЫЗВАТЬ КУРЬЕРА</button>
              <span>Услуга предоставляется бесплатно!</span>
            </div>
          </div>
        </section>
        <section className="Lg-five">
          <h1>Ремонт может быть не только качественным, но и комфортным</h1>
          <h3>4 наших главных преимущества</h3>
          <div className="fixed">
            <div className="lg-card">
              <h3>01</h3>
              <h4> 9 из 10 продуктов
                мы чиним за 1 день</h4>
              <div className="lg-linea"></div>
              <img src="/src/assets/imagesSamsungs/samsungtopimage/Rectangle 112.png" alt="img" />
            </div>
            <div className="lg-card">
              <h3>02</h3>
              <h4>После ремонта техника
                проходит контроль качества
                по 26 пунктам</h4>
              <div className="lg-linea"></div>
              <img src="/src/assets/imagesSamsungs/samsungtopimage/Rectangle 113.png" alt="img" />
            </div>
            <div className="lg-card">
              <h3>03</h3>
              <h4>Диагностика 0 грн, даже
                в случае отказа от ремонта</h4>
              <div className="lg-linea"></div>
              <img src="/src/assets/imagesSamsungs/samsungtopimage/Rectangle 114.png" alt="img" />
            </div>
            <div className="lg-card">
              <h3>04</h3>
              <h4>Наш менеджер будет держать вас в курсевсех этапов работы</h4>
              <div className="lg-linea"></div>
              <img src="/src/assets/imagesSamsungs/samsungtopimage/Rectangle 115.png" alt="img" />
            </div>
          </div>
        </section>

        {timeLeft === 0 ? (
          <div className="Lg-six end-discount">
            <h1>Время Скидки Окончен</h1>
            <div className="discounts-box discount-end">
              <div className="discounts-box-top">
                <div className="left-element">
                  <h2>Не Оставьте заявку уже поздно</h2>
                  <h2 className='which'>Не Успели Брат</h2>
                </div>
              </div>
              <div className="discounts-box-bottom">
                <p>Скидка предоставляется при первом обращении в сервис</p>
                <button>ПОЛУЧИТЬ СКИДКУ</button>
                <div className="lg-discount-time">
                  <div className="lg-time">
                    <h1>{`${formatTime(hours)[0]}${formatTime(hours)[1]}:${formatTime(minutes)[0]}${formatTime(minutes)[1]}:${formatTime(seconds)[0]}${formatTime(seconds)[1]}`}</h1>
                  </div>
                  <span>До конца акции осталось</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="Lg-six">
            <div className="discounts-box">
              <div className="discounts-box-top">
                <div className="left-element">
                  <h2>Оставьте заявку
                    в течение 1 часа
                    и получите</h2>
                  <h2 className='which'>СКИДКУ 15%</h2>
                </div>
              </div>
              <div className="discounts-box-bottom">
                <p>Скидка предоставляется при первом обращении в сервис</p>
                <button>ПОЛУЧИТЬ СКИДКУ</button>
                <div className="lg-discount-time">
                  <div className="lg-time">
                    <h1>{`${formatTime(hours)[0]}${formatTime(hours)[1]}:${formatTime(minutes)[0]}${formatTime(minutes)[1]}:${formatTime(seconds)[0]}${formatTime(seconds)[1]}`}</h1>
                  </div>
                  <span>До конца акции осталось</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <section className="Lg-six">
          <h2>Сколько стоит ремонт LG:</h2>
          <h3>Гарантируем лучшую цену в городе!</h3>
          <div className="mini-table">
            <div className="table-left">
              <div className="fix-technology">
                <h4>Ремонт пылесоса</h4>
                <h4>Ремонт холодильника</h4>
                <h4>Ремонт стиральной машины</h4>
                <h4>Ремонт сушильной машины</h4>
                <h4>Ремонт кондиционера</h4>
                <h4>Ремонт вытяжки</h4>
              </div>
              <div className="spans">
                <span>от N грн</span>
                <span>от N грн</span>
                <span>от N грн</span>
                <span>от N грн</span>
                <span>от N грн</span>
                <span>от N грн</span>
              </div>
            </div>
            <div className="table-center-border"></div>
            <div className="table-right">
              <div className="fix-technology">
                <h4>Ремонт пылесоса</h4>
                <h4>Ремонт холодильника</h4>
                <h4>Ремонт стиральной машины</h4>
                <h4>Ремонт сушильной машины</h4>
                <h4>Ремонт вытяжки</h4>
              </div>
              <div className="spans">
                <span>от N грн</span>
                <span>от N грн</span>
                <span>от N грн</span>
                <span>от N грн</span>
                <span>от N грн</span>
              </div>
            </div>
          </div>
          <div className="lg-btns">
            <span>Не нашли цену на ремонт своего устройства?</span>
            <button>ПОСМОТРЕТЬ ПРАЙС</button>
          </div>
        </section>
        <section className="samsung-eight">
          <h2>Мы подобрали лучших мастеров:</h2>
          <div className="slick-carusel">
            {visibleReviews.map((review) => (
              <div className="carousel-item" key={review.id}>
                <div className="imag">
                  <img src={review.img} alt={review.name} />
                </div>
                <div className="table">
                  <h3>{review.name}</h3>
                  <div className="linea3"></div>
                  <p>Мастер по ремонту стиральных машин</p>
                  <p>Стаж работы: {review.date}</p>
                  <div className="linea3"></div>
                  <div className="stars">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                    <span>{review.grade}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="dots">
            {Array.from({ length: totalReviewSlides }).map((_, i) => (
              <span
                key={i}
                onClick={() => setCurrentReviewIndex(i)}
                className={`dot ${i === currentReviewIndex ? "active" : ""}`}
              ></span>
            ))}
          </div>
          <div className="btns-slick">
            <button className='lg-btns-slick' onClick={prevReviewSlide}><LeftOutlined /></button>
            <button className='lg-btns-slick' onClick={nextReviewSlide}><RightOutlined /></button>
          </div>
        </section>

        <section className="samsung-nine">
          <h2>Истории последних обращений в наш сервис</h2>
          <div className="carousel-container">
            <div className="button perviy">
              <button onClick={prevStory}><LeftOutlined /></button>
            </div>
            <div className="carousel-card card2">
              <div className="left-info">
                <h3>{stories[currentStoryIndex]?.hp}</h3>
                <p><strong>Проблема:</strong><br /> {stories[currentStoryIndex]?.prob}</p>
                <p><strong>Решение:</strong><br /> {stories[currentStoryIndex]?.solution}</p>
                <p><strong>Гарантия:</strong> {stories[currentStoryIndex]?.warranty}</p>
                <p><strong>Стоимость:</strong> {stories[currentStoryIndex]?.price}</p>
                <p><strong>Мастер:</strong> {stories[currentStoryIndex]?.master}</p>
              </div>
            </div>
            <div className="right-review">
              <div className="user">
                <img src={stories[currentStoryIndex]?.client.image} alt={stories[currentStoryIndex]?.client.name} />
                <div>
                  <b>{stories[currentStoryIndex]?.client.name}</b>
                  <p>Менеджер: {stories[currentStoryIndex]?.client.manager}</p>
                </div>
              </div>
              <p className="comment">"{stories[currentStoryIndex]?.client.comment}"</p>
              <div className="bottom">
                <span>{stories[currentStoryIndex]?.client.date}</span>
                <span>{"⭐".repeat(stories[currentStoryIndex]?.client.rating || 0)}</span>
              </div>
            </div>
            <div className="button">
              <button onClick={nextStory}><RightOutlined /></button>
            </div>
          </div>
        </section>
        <section className="samsung-ten">
          <h2>Lorem ipsum</h2>
          <p className="lorem1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className="lorem2">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?</p>
        </section>
        <section className='reviews10Lg'>
          <div className="reviews-item10">
            <div className="item-one10">
              <h2>Отзывы</h2>
              <img className='image110' src="/src/assets/images/homepage-img/рейтинг.png" alt="Reyting" />
              <img className='image210' src="/src/assets/images/homepage-img/рейтинг (1).png" />
              <div className="item-son10">
                <button>ОСТАВИТЬ ОТЗЫВ</button>
                <span>ЧИТАТЬ ВСЕ ОТЗЫВЫ</span>
              </div>
            </div>

            <div className="item-two10">
              <div className="carousel-wrapper10">
                <img className='img110' src="/src/assets/LgImgaes/Group.png" />
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
                    <img className='img110' src="/src/assets/images/homepage-img/Frame 32.png" />
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
              <div className="btns210">
                <button onClick={goPrev} className="carousel-btn210"><LeftOutlined /></button>
                <button onClick={goNext} className="carousel-btn210"><RightOutlined /></button>
              </div>
            </div>
          </div>
        </section>
        <section className="inputtik">
      <h1 className="h1inp">Мы будем рады вашему отзыву</h1>
     <h2>Благодаря вашим отзывам наш сервис становится лучше.</h2>
      <div className="simvol">
        <span>
          Введено символов {oneThousandSteps.length} / {maxLength}
        </span>
        <input
          className="inp-boss"
          placeholder="Отзыв"
          type="text"
          value={oneThousandSteps}
          onChange={handleChange}
        />
      </div>

      <div className="inps">
        <div className="inps-left">
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Ваше имя" />
          <input value={center} onChange={(e) => setCenter(e.target.value)} type="text" placeholder="Ваш сервисный центр" />
        </div>
        <div className="inps-right">
          <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Номер телефона" />
          <input value={master} onChange={(e) => setMaster(e.target.value)} type="text" placeholder="Имя вашего мастера " />
        </div>
      </div>

      <div className="points">
        <div className="pointone">
          <span>Ваша оценка</span>
          <div className="scores">
            {[...Array(5)].map((_, index) => {
              const isActive = index < (hovered || rating);
              return (
                <div className='span'
                  key={index}
                  onClick={() => setRating(index + 1)}
                  onMouseEnter={() => setHovered(index + 1)}
                  onMouseLeave={() => setHovered(0)}
                  style={{

                    cursor: 'pointer',
                    color: isActive ? activeColor : defaultColor,
                    transition: 'color 0.2s'
                  }}
                >

                  {isActive ? <StarFilled /> : <StarOutlined />}
                </div>
              );
            })}
          </div>
        </div>
        <div className="pointwo">
         <button className="sendbtnLg">ОТПРАВИТЬ</button>
          <button onClick={handleUpdate} id='btntwo2lg'>отмена</button>
        </div>
      </div>
    </section>
      </main>
      <div className='lg-footer'>
        <span>О платформе</span>
        <span className="second-list">Выбрать сервисный центр</span>
        <img src="../../src/assets/LgImgaes/2108662082.png"  />
        <span className='second-list'>Оставить отзыв</span>
        <span>Контакты</span>
    </div>
    </div>
  );
}

export default LgMain;