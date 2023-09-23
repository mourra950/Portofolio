import Hero from './Hero.jsx'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Main from './pages/FirstPage/indexpage.jsx'
import About from './pages/About/About.jsx'
import Experience from './pages/Experience/Experience.jsx'
import Project from './pages/Project/Project.jsx'
import { AnimatePresence } from 'framer-motion'


function App() {
    const location = useLocation()
    return (
        <>
            <AnimatePresence mode={'wait'}>

                <Routes location={location} key={location.pathname}>
                    <Route index element={<Main />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/project' element={<Project />} />
                    <Route path='/experience' element={<Experience />} />
                </Routes>
            </AnimatePresence>

        </>
    )
}

export { App }