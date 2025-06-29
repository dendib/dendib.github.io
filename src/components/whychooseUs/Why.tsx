import "./Why.scss"
const Why = () => {
  return (
    <div className="why">
      <div className="top-contain">
        <h2 className="text">Почему нас выбирают</h2>
        <p>С нами выгодно, быстро, качественно</p>
        <div className="cards">
          <div className="card">
            <div className="why-me">
            <h1>01</h1>
            <h4>Быстрый поиск исполнителя</h4>
            <p className="p">
              Поможем легко и быстро найти сервис, который сможет справиться с
              задачей качественно
            </p>
            <div className="linea"></div>
            <img src="/public/Ellipse 2.png" alt="img" />
            </div>
          </div>
          <div className="card">
            <div className="why-me">
            <h1>02</h1>
            <h4>Гарантия и качество</h4>
            <p className="p">
            Только проверенные сервисные центры, высококлассные специалисты, официальные поставщики и лицензионное ПО
            </p>
            <div className="linea"></div>
            <img src="/public/Ellipse 1.png" alt="img" />
            </div>
          </div>
          <div className="card">
            <div className="why-me">
            <h1>03</h1>
            <h4>Реальные отзывы</h4>
            <p className="p">
              Мы составили собственную систему рейтинга специалистов на
              основании отзывов от реальных клиентов
            </p>
            <div className="linea"></div>
            <img src="/public/Ellipse 2-1.png" alt="img" />
          </div>
            </div>
        </div>
      </div>
      <div className="center-contain">
        <h2 className="text">О платформе</h2>
        <div className="contain-box">
          <div className="item-left">
<div className="item-left-one">
<img src="/src/assets/images/homecard/Rectangle 115.png" alt="photo" />
<div className="div1"></div>
</div>
<div className="item-left-two">
<div className="div2"> </div>
<div className="div3"> </div>
</div>
<div className="image">
<img src="/src/assets/images/homecard/Rectangle 116.png" alt="photo" />
</div>
          </div>
          <div className="item-right">
            <p>Наша платформа – это надежный информационный ресурс для поиска лучших исполнителей по ремонту техники.</p>
            <p className="paragraf">Основная цель нашего онлайн-сервиса – предоставить пользоваетелям возможность безопасно ремонтировать свою технику в проверенных сервисных центрах. Функцию проверки мы берем на себя и рекомендуем вам только надежные сервисные центры, отмечая их специальным значком и формируя рейтинг сервисов на основе отзывов клиентов.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
