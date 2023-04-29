import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './Hero.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/FirstPage/indexpage.jsx'
import { Layout } from 'antd'
import About from './pages/About/About.jsx'
import Experience from './pages/Experience/Experience.jsx'
import Project from './pages/Project/Project.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter basename='Portofolio'>
      <Layout>
        <Routes  >
          <Route exact path='/' element={<Main />} />
          <Route exact path='/contact' element={<Hero />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/project' element={<Project />} />
          <Route exact path='/experience' element={<Experience />} />
        </Routes>
      </Layout>
    </BrowserRouter>

  </>

)
