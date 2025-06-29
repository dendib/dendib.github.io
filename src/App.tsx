import "/src/assets/styles/App.scss"
import DefaultLayout from "./layout/layout/DefaultLayout.tsx";
import {  HashRouter, Route, Routes } from 'react-router-dom'
import ToBrandSamsung from "./pages/brand/ToBrandSamsung.tsx";
import ToBrandLg from "./pages/brand/ToBrandLg.tsx";
import ToBrandBosch from "./pages/brand/ToBrandBosch.tsx";

const App = () => {
  return (
  <HashRouter>
   <Routes>
   <Route path="/" element={<DefaultLayout />}/>
   <Route path="/center/Samsung" element={<ToBrandSamsung />} />
   <Route path="/center/LG" element={<ToBrandLg/>} />
   <Route path="/center/Bosch" element={<ToBrandBosch/>} />
   </Routes>
  </HashRouter>
  )
}

export default App