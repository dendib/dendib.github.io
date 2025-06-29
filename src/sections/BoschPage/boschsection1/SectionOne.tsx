import "./SectionOne.scss"
const SectionOne = () => {
  return (
    <div className="boschsection1">
        <h1>Популярные поломки духовых шкафов Bosch</h1>
        <p>Что бы ни произошло с Вашей техникой мы всегда постараемся найти самое оптимальное решение для восстановления её работоспособности и внешнего вида, обслужим и осуществим настройку</p>
        <div className="charchsBosch">
           <div className="charch">
            <img src="/иконка@2x.png" />
            <div className="charch-item">
              <span>84%</span>
              <div className="the-charch"></div>
            </div>
            <h5>Не включается</h5>
           </div>
           <div className="charch">
            <img src="/иконка.png" />
            <div className="charch-item charch1">
              <span>80%</span>
              <div className="the-charch"></div>
            </div>
            <h5>Не нагревается</h5>
           </div>
           <div className="charch">
            <img src="/bosch ikonka.png" />
            <div className="charch-item">
              <span>74%</span>
              <div className="the-charch"></div>
            </div>
            <h5>Духовой шкаф
            греет частично</h5>
           </div>
           <div className="charch">
            <img src="/иконка bosch(1).png" />
            <div className="charch-item">
              <span>85%</span>
              <div className="the-charch"></div>
            </div>
            <h5>Перегревается</h5>
           </div>
           <div className="charch">
            <img src="/иконка (3).png" />
            <div className="charch-item">
              <span>76%</span>
              <div className="the-charch"></div>
            </div>
            <h5>Имеет
            посторонний запах</h5>
           </div>
           <div className="charch">
            <img src="/иконка (4).png" />
            <div className="charch-item">
              <span>87%</span>
              <div className="the-charch"></div>
            </div>
            <h5>Конвекция снижает
            температуру в духовке</h5>
           </div>
         
        </div>
    </div>
  )
}

export default SectionOne;