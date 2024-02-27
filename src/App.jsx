
import Home from "./Pages/HomePage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Mentorship from "./Pages/Mentorship";
import Resources from "./Pages/Resources";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
       <BrowserRouter>
       <Header/>
      
      
       <Routes>
        <Route exact path="/" element={ <Home/>}/>
        <Route exact path="/about" element={ <About/> }/>
        <Route exact path="/mentorship" element={ <Mentorship/> }/>
        <Route exact path="/resources" element={ <Resources/> }/>
       </Routes>
       <Footer/>
       </BrowserRouter>
       
    </>
  );
}

export default App;

