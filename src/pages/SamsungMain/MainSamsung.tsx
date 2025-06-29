import { useState, useEffect,  } from "react";
import { StarOutlined, StarFilled } from '@ant-design/icons';
import SamsungNavbar from "../brand/samsungNavbar/SamsungNavbar";
import SamsungHeader from "../brand/samsungheaders/SamsungHeader";
import "./MainSamsung.scss";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const reviews2 = [
  {
    id: 1,
    text: "Спасибо за спасённый ноутбук! Обратился за профессиональной чисткой после разлитого на ноут чая, сделали быстро и качественно, всё объяснили и рассказали, как действовать в таких случаях. Очень рекомендую!",
    name: "Александр Меньшов",
    role: "Клиент сервисного центра",
    brand: "Samsung",
    master: "Николай Антоненко",
    date: "19.12.2021",
    img: "/Ellipse 31-1.png",
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
    img: "/Ellipse 31.png",
    stars: 4,
  },

];
const stories = [
  {
    id: 1,
    phone: "Galaxy Note20 Ultra",
    problem: "Повреждение экрана (трещины на дисплее и тачскрине)",
    solution: "Замена экрана",
    warranty: "1 месяц",
    price: "100 грн",
    master: "Геннадий Левченко",
    client: {
      name: "Иван Красов",
      comment: "Я отдавал в ремонт телефон Samsung. До этого сервиса обратилась в другой, а там запчасти для моей модели закончились. Я позвонил сюда, уточнил, попросил, чтобы за сутки все точно сделали. Мне пообещали, что успеют, и не обманули – на следующий день ближе к вечеру телефон был готов. Дали гарантию, так что если будут какие-то проблемы, обращусь к ним же.",
      rating: 5,
      date: "14.12.2020",
      image: "/Ellipse 31.png",
      manager: "Николай Филатов"
    }
  },
  {
    id: 2,
    phone: "Samsung A52",
    problem: "Повреждение экрана (трещины на дисплее и тачскрине)",
    solution: "Замена дисплейного модуля",
    warranty: "1 месяц",
    price: "130 грн",
    master: "Сергей Петров",
    client: {
      name: "Андрей Мельников",
      comment: "Я отдавал в ремонт телефон Samsung. До этого сервиса обратилась в другой, а там запчасти для моей модели закончились. Я позвонил сюда, уточнил, попросил, чтобы за сутки все точно сделали. Мне пообещали, что успеют, и не обманули – на следующий день ближе к вечеру телефон был готов. Дали гарантию, так что если будут какие-то проблемы, обращусь к ним же.",
      rating: 4,
      date: "22.01.2021",
      image: "/Ellipse 31.png",
      manager: "Алексей Смирнов"
    }
  }
];
const reviews = [
  {
    id: 1,
    name: "Антон Грисевич",
    date: "7 лет",
    img: "/Rectangle 66.png",
    stars: 5,
    grade: "4,6 24 оценки"
  },
  {
    id: 2,
    name: "Павел Матухно",
    date: "3 года",
    img: "/Rectangle 66 (1).png",
    stars: 4,
    grade: "4,6 25 оценки"
  },
  {
    id: 3,
    name: "Владимир Повелецкий",
    date: "1 год",
    img: "/Rectangle 66 (1).png",
    stars: 4,
    grade: "4,1 24 оценки"
  },
  {
    id: 4,
    name: "Игорь Иванов",
    date: "5 лет",
    img: "/Rectangle 66.png",
    stars: 5,
    grade: "4,6 24 оценки"
  },
];
const MainSamsung = () => {
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
    const activeColor = '#FF5722';
    const defaultColor = '#ccc';
  const [activeTech, setActiveTech] = useState("");
  const [timeLeft, setTimeLeft] = useState(3600);
  const [index, setIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
    const [indextwo, setIndexTwo] = useState(0);
    
    const goNext = () => setIndexTwo((prev) => (prev + 1) % reviews2.length);
    const goPrev = () => setIndexTwo((prev) => (prev - 1 + reviews2.length) % reviews2.length);
  
    const currenttwo = reviews2[indextwo];
    const nextIndex = (indextwo + 1) % reviews2.length;
    const faded = reviews2[nextIndex];
  
  const itemsPerSlide = 2;
  const totalSlides = Math.ceil(reviews.length / itemsPerSlide);
  
  const next = () => {
    if (index < totalSlides - 1) setIndex(index + 1);
  };

  const start = () => {
    if (index > 0) setIndex(index - 1);
  };

  const goToSlide = (i:number) => {
    setIndex(i);
  };
  

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const current = stories[currentIndex];


  const visibleReviews = reviews.slice(
    index * itemsPerSlide,
    index * itemsPerSlide + itemsPerSlide
  );
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);
  const formatTime = (val:number | string): string => String(val).padStart(2, '0');
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  const technics = [
    "Бытовая техника",
    "Цифровая техника",
    "Компьютерная техника",
    "ТВ и Аудио",
  ];
  const texnalogyc = [
    {
      img: "/samsungcardimg/ru-vacuum-cleaners-vc15k4136-vc15k4136vl-ev-rperspectiveorange-92236560 1.png",
      title: "Пелесос",
    },
    {
      img: "/samsungcardimg/good_img_a67e9e6d-f0c0-11e9-80c7-005056840c70_600_thumbnail 1.png",
      title: "Парогенератор"
    },
    {
      img: "/samsungcardimg/13hq_thumbnail 1.png",
      title: "Гладильна система",
    },
    {
      img: "/samsungcardimg/ru-front-loading-washer-ww10t554daws1-ww90t554cax-lp-362691647 1.png",
      title: "Стиральная машина",
    },
    {
      img: "/samsungcardimg/ru-dryer-dv90t5240aws3-dv90t5240at-lp-380686879 1.png",
      title: "Сушильная машина",
    },
    {
      img: "/samsungcardimg/ru-dw4000rm-dishwasher-with-less-noise-44db-dw50r4050fs-wt-468108974 1.png",
      title: "Посудомоечная машина",
    },
    {
      img: "/samsungcardimg/ru-rb3000a-bottom-freezer-refrigerator-with-space-efficiency-rb33a3440sa-wt-412254345 1.png",
      title: "Холодильник",
    },
    {
      img: "/samsungcardimg/ru-nv68r3541rs-nv68r3541rs-wt-frontsilver-181088503 1.png",
      title: "Духовой шкаф",
    },
    {
      img: "/samsungcardimg/ru-na64h3030bswt-na64h3030bs-wt-frontsilver-187009129 1.png",
      title: "Варочная панель",
    },
    {
      img: "/samsungcardimg/ru-rb3000a-bottom-freezer-refrigerator-with-space-efficiency-rb33a3440sa-wt-412254345 1.png",
      title: "Кухонная вытяжка",
    },
    {
      img: "/samsungcardimg/ru-mq7000a-389388-ms20a7013at-bw-447035962 1.png ",
      title: "Микроволновая печь",
    },
    {
      img: "/samsungcardimg/ru-wall-mount-ar5000h-ar24aqhqdurner-404693126 1.png",
      title: "Кондиционер"
    }
  ]
  return (
    <div className="samsung-main">
      <header>
        <SamsungNavbar />
        <SamsungHeader />
      </header>
      <main>
        <section className="samsung-first">
          <div className="mini-samsung-cards">
            <div className="msc first">
              <img src="/Frame 28.png" />
              <span>
                Бесплатная
                диагностика
              </span>
            </div>
            <div className="msc second">
              <img src="/Frame 29.png" />
              <span>Выезд мастера
                в течение 1 часа</span>
            </div>
            <div className="msc third">
              <img src="/Group.png" />
              <span>Ремонт
                за 1 день</span>
            </div>
          </div>
        </section>
        <section className="samsung-second">
          <div className="samsung-all-technalogy">
            <h2>Мы осуществляем ремонт техники Samsung всех видов</h2>
            <p>Чтобы ни произошло с Вашей техникой мы всегда постараемся найти самое оптимальное решение для восстановления её работоспособности и внешнего вида, обслужим и осуществим настройку</p>
            <div className="technic-address">
              {technics.map((item) => (
                <h3
                  key={item}
                  className={activeTech === item ? "active" : ""}
                  onClick={() => setActiveTech(item)}

                >
                  {item}
                </h3>
              ))}
            </div>
            <div className="technalogy-cards">
              {texnalogyc
                .filter((_, index) => {
                  if (activeTech === "Бытовая техника") return true;
                  else if (activeTech === "ТВ и Аудио") return index >= 6 && index < 12;
                  return index < 6;
                })
                .map((item, index) => (
                  <div key={index} className="technalogy-card">
                    <img src={item.img} />
                    <span>{item.title}</span>
                  </div>
                ))}
            </div>
            <div className="notfind">
              <h3>Не нашли свой вид техники?</h3>
              <p className="text">Наши специалисты бесплатно вас проконсультируют и ответят на все вопросы по телефону 88008008000 или Вы можете оставить заявку и наш специалист свяжется с Вами в течение 1 часа</p>
              <button>ОСТАВИТЬ ЗАЯВКУ</button>
            </div>
          </div>

        </section>
        <section className="samsung-third">
          <div className="samsung-all-technalogy">
            <h2 className="third-h2">Ответьте на 3 вопроса и получите подарок
              от нашего сервисного центра</h2>
            <ul>
              <li>01</li>
              <li><nav></nav></li>
              <li>02</li>
              <li>03</li>
              <li>04</li>
            </ul>
            <h3 className="h-three">1. Выберите ваш вид техники</h3>
            <div className="technic-address-2">
              {technics.map((item) => (
                <h3
                  key={item}
                  className={activeTech === item ? "active" : ""}
                  onClick={() => setActiveTech(item)}

                >
                  {item}
                </h3>
              ))}
            </div>
            <div className="technalogy-cards">
              {texnalogyc
                .filter((_, index) => {
                  if (activeTech === "Бытовая техника") return true;
                  else if (activeTech === "ТВ и Аудио") return index >= 6 && index < 12;
                  return index < 6;
                })
                .map((item, index) => (
                  <div key={index} className="technalogy-card">
                    <img src={item.img} />
                    <span>{item.title}</span>
                  </div>
                ))}
            </div>
          </div>
        </section>
        <section className="samsung-four">
          <div className="smile-kuryera">
            <img src="/курьер.png" alt="smile" />
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
        <section className="samsung-five">
          <h1>Ремонт может быть не только качественным, но и комфортным</h1>
          <h3>4 наших главных преимущества</h3>
          <div className="fixed">
            <div className="samsung-card">

              <h3>01</h3>
              <h4> 9 из 10 продуктов
                мы чиним за 1 день</h4>

              <div className="samsung-linea"></div>
              <img src="/Rectangle 112.png" alt="img" />
            </div>
            <div className="samsung-card">
              <h3>02</h3>
              <h4>После ремонта техника
                проходит контроль качества
                по 26 пунктам</h4>
              <div className="samsung-linea"></div>
              <img src="/Rectangle 113.png" alt="img" />
            </div>
            <div className="samsung-card">
              <h3>03</h3>
              <h4>Диагностика 0 грн, даже
                в случае отказа от ремонта</h4>
              <div className="samsung-linea"></div>
              <img src="/Rectangle 114.png" alt="img" />
            </div>
            <div className="samsung-card">
              <h3>04</h3>
              <h4>Наш менеджер будет держать вас в курсевсех этапов работы</h4>
              <div className="samsung-linea"></div>
              <img src="/Rectangle samsung 115.png" alt="img" />
            </div>
          </div>
        </section>
        <section className="samsung-six">
          <h1 className="discount">
            Оставьте заявку в течение 1ч и получите СКИДКУ 15%
          </h1>
            <span className="omega">До конца акции осталось</span>
          <div className="one-hour">
            <div className="time-discount">
              <div className="time-hours">
                <div className="all-time">
                  <span className="time">{formatTime(hours)[0]}</span>
                </div>
                <div className="all-time">
                  <span className="time">{formatTime(hours)[1]}</span>
                </div>
              </div>
              <div className="time-minuts">
                <div className="all-time">
                  <span className="time">{formatTime(minutes)[0]}</span>
                </div>
                <div className="all-time">
                  <span className="time">{formatTime(minutes)[1]}</span>
                </div>
              </div>
              <div className="time-seconds">
                <div className="all-time">
                <span className="time">{formatTime(seconds)[0]}</span>
                </div>
               <div className="all-time">
               <span className="time">{formatTime(seconds)[1]}</span>
               </div>
              </div>
            </div>
            <button className="time-btn">ПОЛУЧИТЬ СКИДКУ</button>
          </div>
          <div className="clock">
          </div>
        </section>
        <section className="samsung-seven">
            <h2>Сколько стоит ремонт Samsung:</h2>
            <span>Гарантируем лучшую цену в городе!</span>
            <div className="nothing">
              <div className="elements">
                 <div className="element1">
                    <h3>Ремонт пылесоса</h3>
                    <h3>Ремонт кофеварки</h3>
                    <h3>Ремонт мультиварки</h3>
                    <h3>Ремонт утюга</h3>
                 </div>
                 <div className="element2">
                    <span>от N грн</span>
                    <span>от N грн</span>
                    <span>от N грн</span>
                    <span>от N грн</span>
                 </div>
              </div>
              <div className="y-linea">
              </div>
              <div className="elements">
                 <div className="element1">
                    <h3>Ремонт пылесоса</h3>
                    <h3>Ремонт кофеварки</h3>
                    <h3>Ремонт мультиварки</h3>
                    <h3>Ремонт утюга</h3>
                 </div>
                 <div className="element2">
                    <span>от N грн</span>
                    <span>от N грн</span>
                    <span>от N грн</span>
                    <span>от N грн</span>
                 </div>
              </div>
              <div className="y-linea">
              </div>
              <div className="elements">
                 <div className="element1">
                    <h3>Ремонт пылесоса</h3>
                    <h3>Ремонт кофеварки</h3>
                    <h3>Ремонт мультиварки</h3>
                    <h3>Ремонт утюга</h3>
                 </div>
                 <div className="element2">
                    <span>от N грн</span>
                    <span>от N грн</span>
                    <span>от N грн</span>
                    <span>от N грн</span>
                 </div>
              </div>
            </div>
            <div className="end-nothing">
              <h4>Не нашли цену на ремонт своего устройства?</h4>
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
            </div></div>
          </div>
        ))}
          </div>
          <div className="dots">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <span
            key={i}
            onClick={() => goToSlide(i)}
            className={`dot ${i === index ? "active" : ""}`}
          ></span>
        ))}
      </div>
      <div className="btns-slick">
        <button onClick={start}><LeftOutlined/></button>
        <button onClick={next}><RightOutlined/></button>
      </div>
        </section>
        <section className="samsung-nine">
          <h2>Истории последних обращений в наш сервис</h2>
        <div className="carousel-container">
       <div className="button perviy">    <button onClick={prevSlide}><LeftOutlined/></button></div>
        <div className="carousel-card">
          <div className="left-info">
            <h3>{current.phone}</h3>
            <p><strong>Проблема:</strong><br /> {current.problem}</p>
            <p><strong>Решение:</strong><br /> {current.solution}</p>
            <p><strong>Гарантия:</strong> {current.warranty}</p>
            <p><strong>Стоимость:</strong> {current.price}</p>
            <p><strong>Мастер:</strong> {current.master}</p>
          </div>
        </div>
          <div className="right-review">
            <div className="user">
              <img src={current.client.image} alt={current.client.name} />
              <div>
                <b>{current.client.name}</b>
                <p>Менеджер: {current.client.manager}</p>
              </div>
            </div>
            <p className="comment">"{current.client.comment}"</p>
            <div className="bottom">
              <span>{current.client.date}</span>
              <span>{"⭐".repeat(current.client.rating)}</span>
            </div>
          </div>

         <div className="button">
         <button onClick={nextSlide}><RightOutlined/></button>
         </div>
      </div>
        </section>
        <section className="samsung-ten">
          <h2>Lorem ipsum</h2>
            <p className="lorem1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="lorem2">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?</p>
        </section>
        <section className='reviews10'>
  <div className="reviews-item10">
    <div className="item-one10">
      <h2>Отзывы</h2>
      <img className='image110' src="/рейтинг.png" alt="Reyting" />
      <img className='image210' src="/рейтинг (1).png" />
      <div className="item-son10">
        <button>ОСТАВИТЬ ОТЗЫВ</button>
        <span>ЧИТАТЬ ВСЕ ОТЗЫВЫ</span>
      </div>
    </div>

    <div className="item-two10">
      <div className="carousel-wrapper10">
        <img className='img110' src="/Frame 32.png" />
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
            <img className='img110' src="/Frame 32.png" />
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
         <button className="sendbtn">ОТПРАВИТЬ</button>
          <button onClick={handleUpdate} id='btntwo2'>отмена</button>
        </div>
      </div>
    </section>
      </main>
      <div className='samsung-footer'>
        <span>О платформе</span>
        <span className="second-list">Выбрать сервисный центр</span>
<img src="/samsung_logo_PNG6 1.png"/>
        <span className='second-list'>Оставить отзыв</span>
        <span>Контакты</span>
    </div>
    </div>
  )
}
export default MainSamsung