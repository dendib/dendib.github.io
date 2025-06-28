import Footer from "../../components/footers/footer";
import Navbar from "../../components/navbar/Navbar";
import MainContent from "../main/MainContent";
const DefaultLayout = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <MainContent/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default DefaultLayout;
