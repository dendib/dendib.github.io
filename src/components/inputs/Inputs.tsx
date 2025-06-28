import { StarOutlined, StarFilled } from '@ant-design/icons';
import React, { useState } from 'react';
import './Inputs.scss';
import Buttons from '../button/Buttons';

const Inputs = () => {
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
  return (
    <div className="inputtik">
      <h1>Мы будем рады вашему отзыву</h1>

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
          <Buttons  width='135px'
            height='56px' fontSize='17px' text="отправить" />
          <button onClick={handleUpdate} id='btn' >отмена</button>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
