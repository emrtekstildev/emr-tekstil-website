/* eslint-disable */

import React, { useState } from 'react';
import LangContext,{langs} from './locales/langContext';

//Components
import Header from './components/header/Header';
import Navhead from './components/navbar/Navhead';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import Apply from './components/aplly/Apply';



function App() {
  const [lang,setLang] = useState(langs.TR);

  const [selectedLang,setSelectedLang] = useState("TR");


  const changeLanguage = () => {

    setSelectedLang(lang === "TR" ? "EN" : "TR");

    lang === langs.TR ? setLang(langs.EN) : setLang(langs.TR);
  }
  
  return (
    <LangContext.Provider value={{lang}}>
      
      <div className="App">

        <Header lang={selectedLang} contents={lang} changeLanguage={changeLanguage.bind(this)} />
        <Navhead contents={lang} />

        {/* home start */}
          <Banner contents={lang}/>
          <Container>
            <Home lang={lang} />
          </Container>
        {/* home end */}
        <Apply contents={lang} />
        {/* about start */}
        <Container>
          <About lang={lang}  />
        </Container>
        {/* about end */}
        
        {/* contact start */}
        <Container>
         <Contact lang={lang}  />
        </Container>  
        {/* contact end */}

        <Footer contents={lang}/>
      </div>

    </LangContext.Provider>
  );
}

export default App;
