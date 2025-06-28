import { Select } from 'antd';
import { russianCities } from '../../utils/russiacity';
import './Inp.scss'
const Inp = () => {
  return (
    <div>
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
        label:city
      }))}
  />
    </div>
  )
}

export default Inp;