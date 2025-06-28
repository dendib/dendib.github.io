import React, { useEffect, useState } from 'react';
import { technologies } from "../../utils/texnalogy";
import { LogoData } from '../../utils/data';
import './FindService.scss';
import FindServicesone from './find-services/FindServicesone';
import FindServicetwo from './find-services/FindServicetwo';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

const FindService = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 3;
  const [showButton, setShowButton] = useState(false);
  const [carouselStart, setCarouselStart] = useState(0);
  const visibleCount = 6;
  useEffect(() => {
    const handleResize = () => {
      setShowButton(window.innerWidth <= 576);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNextCarousel = () => {
    if (carouselStart + visibleCount < technologies.length) {
      setCarouselStart(prev => prev + visibleCount);
    }
  };

  const handlePrevCarousel = () => {
    if (carouselStart > 0) {
      setCarouselStart(prev => prev - visibleCount);
    }
  };
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };
  const handleNextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };
  const progressPercent = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className='find-section'>
      <div className="find-wrapper">
        <h1>Найти подходящий сервис очень просто</h1>
        <h4>Ответьте на 3 вопроса и мы подберем сервис для обслуживания вашей техники</h4>
      </div>

      <div className="find-container">
        <div className="find-header">
          <span>{`${currentStep + 1}/${totalSteps}`}</span>
          <div style={{
            borderRadius: "10px",
            backgroundImage: "linear-gradient(91.35deg, #FF0000 -44.12%, #FE7303 77.81%)",
            backgroundRepeat: "no-repeat",
            backgroundSize: `${progressPercent}% 100%`,
            backgroundColor: "#e0e0e0",
            height: "8px",
            width: "100%"
          }}></div>
        </div>

        {currentStep === 0 && (
          <>
            <h2>"Что чиним?"</h2>
            <div className="find-steps">
              {technologies
                .slice(
                  showButton ? carouselStart : 0,
                  showButton ? carouselStart + visibleCount : technologies.length
                )
                .map((item, index) => (
                  <div className="find-step" key={index} onClick={handleNextStep}>
                    <img src={item.whatRepair} alt={item.whatIsIt} />
                    <span>{item.whatIsIt}</span>
                  </div>
                ))}
            </div>
            {showButton && (
              <div className="find-buttons">
                {carouselStart > 0 && (
                  <button className="carousel-button" onClick={handlePrevCarousel}>
                    <LeftOutlined />
                  </button>
                )}
                {carouselStart + visibleCount < technologies.length && (
                  <button className="carousel-button" onClick={handleNextCarousel}>
                    <RightOutlined />
                  </button>
                )}
              </div>
            )}
          </>
        )}

        {currentStep === 1 && (
          <FindServicesone onNext={handleNextStep} onBack={handleBack} />
        )}

        {currentStep === 2 && (
          <FindServicetwo onBack={handleBack} />
        )}
      </div>
    </div>
  );
};

export default FindService;
