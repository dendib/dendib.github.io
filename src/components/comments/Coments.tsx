import  { useState, useEffect } from 'react';
import {  Modal } from 'antd';
import './Coment.scss';
import Buttons from '../button/Buttons';
const Coments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [questions, setQuestion] = useState([]);  

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (inputValue.trim() !== "") {
      const updatedQuestions = [...questions, inputValue]; 
     localStorage.setItem("savedQuestions", JSON.stringify(updatedQuestions));
      setIsModalOpen(false);
      setInputValue("");
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const saved = localStorage.getItem("savedQuestions");
    if (saved) {
      setQuestion(JSON.parse(saved));
    }
  }, []);
  return (
    <div className='comments'>
      <div className="comments-items">
        <h1>Часто задаваемые вопросы</h1>
        <p className='all'>
          Все ваши часто задаваемые вопросы о нашем сервисе. Если не нашли ответ,<br />
          Вы можете задать его через форму обратной связи
        </p>
        <div className="comment">
          <div className="question">
            <div className="box-img">
            <img src="/src/assets/images/homecard/Group 32.png" alt="photo" />
            </div>
            <p>Что делать, если состояние устройства после ремонта меня не устраивает?</p>
          </div>
          <div className="answer">
             <div className="box-img-answer">
            <img src="/src/assets/images/homecard/Group 33.png" alt="photo" />
             </div>
            <p>
            В этом случае вам не следует подписывать Акт приема-передачи, а сразу уведомить представителя сервисного центра о выявленном несоответствии состояния техники условиям Договора или Акту приема-передачи. Например, вы 
            отдавали в ремонт ноутбук без царапин,
            а получили устройство с поврежденной крышкой.
            </p>
          </div>
            {questions.map((q, index) => (
            <div key={index} className="question2">
            <div className="box-img">
              <img src="/src/assets/images/homecard/Group 32.png" alt="f" />
              </div>
              <p>{q}</p>
            </div>
          ))}
        </div>

        <div className="give-question-button">
          <Buttons text="Задать вопрос" onClick={() => showModal}>
          </Buttons>
          <Modal
            title="Задайте свой вопрос"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Введите ваш вопрос..."
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Coments;
