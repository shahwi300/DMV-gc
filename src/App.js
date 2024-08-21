import { BrowserRouter, Routes, Route, useNavigate  } from "react-router-dom";
import { MyContextProvider } from "./components/context";
import Home from './pages/home';
import Header from './components/header';
import Footer from "./components/footer";
import NoPage from "./components/no-page";
import About from "./pages/about";
import Services from "./pages/services";
import ContactUs from "./pages/contact-us";
import HandymanServices from "./pages/handyman-services";
import Faqs from "./pages/faqs";
import ServiceDetailPage from "./components/service-detail-page";


function App() {
    
    return (
        <BrowserRouter>
            <MyContextProvider>
                <Header />
                <Routes>
                    <Route exact index element={<Home />} />
                    <Route exact path="about" element={<About />} />
                    <Route exact path="services" element={<Services />} />
                    <Route exact path="/services/:id" element={<ServiceDetailPage />} />
                    <Route exact path="handyman-services" element={<HandymanServices />} />
                    <Route exact path="faq" element={<Faqs />} />
                    <Route exact path="contact" element={<ContactUs />} />
                    <Route exact path="*" element={<NoPage />} />
                </Routes>
                <Footer />
            </MyContextProvider>
        </BrowserRouter>
    );
}

export default App;
