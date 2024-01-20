import React from 'react'
import Header from './componant/1-header/Header'
import Main from './componant/2-main/Main'
import Skills from './componant/skills/Skills'
import Pro from './componant/3-projects/Pro'
import Contact from './componant/4-contact/Contact'
import Footer from './componant/footer`/Footer'


const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className='light'></div>
      <Main />
      <div className='light'></div>
      <Skills />
      <Pro />
      <div className='light'></div>
      <Contact />
      <div className='light'></div>
      <Footer />
    </div>
  )
}

export default App