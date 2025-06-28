import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import  { useState, } from "react";
import "./MainContent.scss";
import { forCarousel } from "../../utils/data";
import ChoseCenter from "../../components/chooseCenter/ChoseCenter";
import Why from "../../components/whychooseUs/Why";
import FindService from "../../components/findservice/FindServic";
import Reviews from "../../components/rewiews/Reviews";
import Inputs from "../../components/inputs/Inputs";
import AskQuestion from "../../components/comments/Coments";
const MainContent = () => {
  const [carousel, setcarousel] = useState(0);
  const legth = forCarousel.length;
  const slideToLeft = () => {
    setcarousel((prev) => (prev === legth - 1 ? 0 : prev + 1))
  }
  const slideToRight = () => {
    // setcarousel((prev) => (prev === 3 ? (length = 0) : prev + 1))
    setcarousel((prev) => (prev === legth - 1 ? 0 : prev + 1));
  }
  return (
    <main className='main-content'>
      <div className="main-content-container">
        <div className="main-content-wrapper">
          <div className="main-content-header">
            <div className="main-content-title">
              <div className="title-h1">
                  <h1 className="main-content-title-h1">
                  Сервисные центры техники в Киеве222
                </h1>
              </div>
              <div className="subtitle-box">
              <p className="main-content-subtitle">
                Подбор сервисных центров по вашему производителю
              </p>
              </div>
              <div className="system_items">
                <div className="system_item">
                  <img className="img1" src="./src/assets/images/logotips/Frame 20.png" alt="logo" />
                  <span>
                    <p>100% проверенные
                    сервисные центры</p>
                  </span>
                </div>
                <div className="system_item">
                  <img className="img2" src="./src/assets/images/logotips/Vector-1.png" alt="logo" />
                  <span>
                    <p>Квалифицированные
                    специалисты</p>
                  </span>
                </div>
                <div className="system_item">
                    <img className="img3" src="./src/assets/images/logotips/Vector.png" alt="logo" />
                    <img className="img3" src="./" alt="logo" />
                  <span>
                    <p>Собственная
                    система рейтинга</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="main-content-image-box">
              <div className="import-image">
              <img className="ps" src={forCarousel[carousel].image} alt={`slide-${carousel}`} />
              </div>
              <div className="btn">
                <button onClick={slideToLeft}><LeftOutlined className="Outlined"  /></button>
                <button onClickCapture={slideToRight} ><RightOutlined className="Outlined" /></button>
              </div>
            </div>
          </div>

          <div className="main-content-main">
            <div className="main-content-head">
                <div>
                  <ChoseCenter/>
                </div>
                 <div>
                 <FindService/>
                 </div>
                <div>
                  <Why/>
                </div>
                <div>
                  <Reviews />
                </div>
                <div>
                  <Inputs/>
                </div>
                <div>
                <AskQuestion/>
                </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default MainContent