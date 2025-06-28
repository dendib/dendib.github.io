import React from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { LogoData } from '../../../utils/data';
import "./FindServies.scss";

interface Props {
  onBack: () => void;
  onNext: () => void;
}

const FindServicesone: React.FC<Props> = ({ onBack, onNext }) => {
  const brand = LogoData.slice(0, 6);

  return (
    <div className='h'>

      <div className="how-service">
        <h1>Какой сервис вам нужен</h1>
        <h4>Выберите один из них</h4>
        <div className="brandList">
          {brand.map(item => (
            <div onClick={onNext} className="brandItem" key={item.idLogo}>
              <img src={item.url} alt={item.title} />
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
      <button className='btn-back' onClick={onBack}>
        <LeftOutlined />
      </button>
    </div>
  );
}

export default FindServicesone;
