import "./Navbar.scss";
import { russianCities } from "../../utils/russiacity";
import { Select } from 'antd';
const Navbar = () => {
  return (
    <div className="thenavbar">
      <div className="just_navbar">
        <div className="navbar-item1">
           <ul>
          <li>О платформе</li>
          <li>Контакты</li>
          <li>88008008000</li>
           </ul>
        </div>
        <div className="navbar-item2">
            <h4>ЛОГОТИП</h4>
        </div>
        <div className="navbar-item3">
<Select  className="selectshow"
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
      )
        .toLowerCase()
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
        label :city
      }))}
  />
        </div>
      </div>
    </div>
  )
}

export default Navbar;