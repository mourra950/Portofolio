import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './Hero.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './pages/FirstPage/indexpage.jsx'
import About from './pages/About/About.jsx'
import Experience from './pages/Experience/Experience.jsx'
import Project from './pages/Project/Project.jsx'

const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: (<Main />),
  },
  {
    path: "contact",
    element: (<Hero />),
  },
  {
    path: "about",
    element: (<About />),
  },
  {
    path: "project",
    element: (<Project />),
  },
  {
    path: "experience",
    element: (<Experience />),
  },
], { basename: '/Portofolio' });

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Suspense fallback={<h1>Hello</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  </>

)
