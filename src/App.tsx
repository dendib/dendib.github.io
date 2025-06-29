import "/src/assets/styles/App.scss"
import DefaultLayout from "./layout/layout/DefaultLayout.tsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ToBrandSamsung from "./pages/brand/ToBrandSamsung.tsx";
import ToBrandLg from "./pages/brand/ToBrandLg.tsx";
import ToBrandBosch from "./pages/brand/ToBrandBosch.tsx";

const App = () => {
  return (
  <BrowserRouter>
   <Routes>
   <Route path="/" element={<DefaultLayout />} />
   <Route path="/center/Samsung/" element={<ToBrandSamsung />} />
   <Route path="/center/LG/" element={<ToBrandLg/>} />
   <Route path="/center/Bosch/" element={<ToBrandBosch/>} />
   </Routes>
  </BrowserRouter>
  )
}

export default App