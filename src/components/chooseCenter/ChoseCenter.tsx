import  { useState, useEffect } from 'react';
import { LogoData } from '../../utils/data';
import { Link, useNavigate } from 'react-router-dom';
import './Chose.scss';
import { DownOutlined,} from '@ant-design/icons';

const ChoseCenter = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);

  const filteredLogos = LogoData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const visibleLogos = showAll ? filteredLogos : filteredLogos.slice(0, 16);
  useEffect(() => {
    if (performance.navigation.type === 1) {
      navigate('/');
    }
  }, []);

  return (
    <div className='section-top'>
      <div className='section-chose'>
        <h1>Выберите сервисный центр</h1>
        <div className='inp-box'>
          <input
            className='inp'
            type='text'
            placeholder='Производитель вашего устройства'
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowAll(false); 
            }}
          />
        </div>

        <h2>Алфавитный указатель производителей</h2>
        <div className='div'>
        <span className="abc-letters">ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
        <span className='A_Я'>А-Я</span>
        <span className='other'>Прочие</span>
        </div>
        </div>

        <div className='section-chose-Logo'>
          {visibleLogos.map((item, index) => (
            <Link to={`/center/${encodeURIComponent(item.title)}`} key={index}>
              <div className='logos'>
                <img src={item.url} alt={item.title} />
                <div className='title'>
                <p>Сервисный центр {item.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
     <div className="btns">
     {!showAll && filteredLogos.length > 16 && (
          <button className='bott' onClick={() => setShowAll(true)}>
            Показать еще  <DownOutlined style={{color: "#FF8522", fontSize: "17px"}} />
          </button>
        )}
     </div>
        
    </div>
  );
};

export default ChoseCenter;
