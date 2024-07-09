import '../src/css/index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import Footer from './Footer'

import ThemeContext from './ThemeContext';

import { useContext } from 'react'

export default function App() {

    const {theme} = useContext(ThemeContext)

  return (
    <div id="main" className={theme}>
        <BrowserRouter>
            <Header />
                <div id="headingSpacer">
                    <Routes>
                        <Route path='/portfolio/' element={<Home />} />
                        <Route path='/portfolio/projects' element={<Projects />}/>
                        <Route path='/portfolio/resume' element={<Resume />} />
                        <Route path='/portfolio/contact' element={<Contact />}/>
                    </Routes>
                </div>
                <Footer />
        </BrowserRouter>
    </div>
  )
}
