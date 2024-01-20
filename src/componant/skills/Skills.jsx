import React from 'react'
import "./skills.css"
const Skills = () => {
  return (
    <section>
        <div className="skill">
            <div className="text">
                <h1>skills</h1>
                <p>Every skill i have written is a skill that i have good knowledge of, not to beautify my site
                </p>
            </div>
            <div className="row">
                <section className='col'>
                    <div className="skills-container">
                        <div className="hope">
                            <div className="subject"></div>
                            <div className="progress-bar">
                                <div className="progress-line"></div>
                            </div>
                        </div>
                        <div className="hope">
                            <div className="subject">css</div>
                            <div className="progress-bar">
                                <div className="progress-line"></div>
                            </div>
                        </div>
                        <div className="hope">
                            <div className="subject">bootstrap</div>
                            <div className="progress-bar" >
                                <div className="progress-line"></div>
                            </div>
                        </div>
                        <div className="hope">
                            <div className="subject">javascript</div>
                            <div className="progress-bar" >
                                <div className="progress-line"></div>
                            </div>
                        </div>
                        <div className="hope">
                            <div className="subject">react</div>
                            <div className="progress-bar">
                                <div className="progress-line"></div>
                            </div>
                        </div>
                        
                    </div>
                </section>
            </div>
        </div>

    </section>
  )
}

export default Skills