import { useState } from 'react'
import './App.css'
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

function App() {
  const [lang, setLang] = useState('uz')

  return (
    <div className="App">
      <Header lang={lang} setLang={setLang} />
      <Main lang={lang} />
      <Footer lang={lang} />
    </div>
  )
}

export default App
