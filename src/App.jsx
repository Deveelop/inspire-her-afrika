
import Home from "./Pages/HomePage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import MentorshipPro from "./Pages/MentorshipPro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
       <BrowserRouter>
      
       <Header/>
       <Routes>
        <Route exact path="/" element={ <Home/>}/>
        <Route exact path="/about" element={ <About/> }/>
        <Route exact path="/mentorship-program" element={ <MentorshipPro/> }/>
       </Routes>
       <Footer/>
       </BrowserRouter>
       
    </>
  );
}

export default App;

