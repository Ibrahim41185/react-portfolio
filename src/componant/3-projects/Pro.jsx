import React from 'react'
import "./pro.css"
import { useState } from 'react'
const projects = [
  { proTitlt: "html&css ", category: "react", paragraph:"simble porjects html&css", imgpath: "1.png" },
  { proTitlt: "react projects", category: "react",paragraph:"interface watches store",  imgpath: "3.png", href:"https://style-watchs.vercel.app/" },
  { proTitlt: "javascript projects", category: "css",paragraph:"simble porjects javascript", imgpath: "4.png", href:"https://iphones-five.vercel.app/"  },
  { proTitlt: "react projects", category: "react",paragraph:"projects with react", imgpath: "Screenshot 2024-01-18 114732.png", href:"https://react-park-gamma.vercel.app/"},
  { proTitlt: "javascript projects", category: "javascript",paragraph:"to do list with javascript", imgpath: "Screenshot 2024-01-20 063546.png" },
  { proTitlt: "javascript projects", category: "css",
  paragraph:"A simple program that converts Egyptian pounds to us dollars and euro with javascript", 
  imgpath: "7.png", href:"https://doller.vercel.app/"}
]
const Pro = () => {
  const [arr, setArr] = useState(projects);
  return (
    <section className='main'>
      <h2 className='work'>work</h2>
      <h1>that is afew my work as arepresention of my skills as an react frontend developer</h1>
      <div className="left-sec">
        

        
      </div>
      <div className="right-sec">
        {arr.map((items) => {
          return (
            <div key={items.categort} className="cards ">
              <img src={items.imgpath} alt="" />
              <div className="box">
                <h2 className='title'> {items.proTitlt} </h2>
                <p className='sup-title'> {items.paragraph} </p>
                <div className="links">
                  <button><a href= {items.href} > {items.href} </a></button>
                </div>
              </div>
            </div>

          )
        }
        )}
      </div>


    </section>
  )
}

export default Pro