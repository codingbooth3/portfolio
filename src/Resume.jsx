import '../src/css/Resume.css'
import { useContext, useState, useEffect } from 'react'
import ThemeContext from './ThemeContext'

export default function Resume() {

  const [resumeBackground, setResumeBackground] = useState()
  const [links, setLinks] = useState()

  const {theme} = useContext(ThemeContext)

  useEffect(() => {

    if (theme === 'black') {
      setResumeBackground('whiteResume')
      setLinks('whiteLinks')
    }
  
    if (theme === 'white') {
      setResumeBackground('blackResume')
      setLinks('blackLinks')
    }
  }, [theme])

  return (
    <div id='resumeContainer' className={resumeBackground}>
      <div id="resumeHeader">
        <div id="leftResumeHeader">
          <h1>Christopher Booth</h1>
          <h4>Full-stack developer focusing on front-end development.</h4>
        </div>
        <div id="rightResumeHeader">
          <h3>Auxier, KY 41602</h3>
          <h3><a href="tel:6062268995" className={links}>606-226-8995</a></h3>
          <h3><a href="mailto:codingbooth03@gmail.com" className='cornflower'>codingbooth03@gmail.com</a></h3>
          <h3><a href="https://github.com/codingbooth3" className={links} target='_blank'>Github</a></h3>
        </div>
      </div>
      <div id="resumeBody">
        <div id="leftResumeBody">
          <div id="projectsContainer">
            <h3 className='cornflower'>Projects</h3>
            <div id="weightlyContainer">
              <h1>Weightly</h1>
              <h4>HTML, CSS, JS, REACT, EXPRESS, NODE, MONGO.DB</h4>
              <h5>A modern weight loss tracker with logging technology to keep track of
              weight and <br /> help create diets for people to lose weight</h5>
              <div className="resumeLinksContainer">
                <h4><a href="" className={links}>Live Site</a></h4>
                <h4><a href="" className={links}>Repository</a></h4>
              </div>
              
            </div>
            <div id="brutureContainer">
              <h1>Bruture</h1>
              <h4>HTML, CSS, JS, REACT, EXPRESS, NODE, MONGO.DB</h4>
              <h5>An ecommerce store with a functional shopping cart and react routes to
              make a <br /> multi page site.</h5>
              <div className="resumeLinksContainer">
                <h4><a href="" className={links}>Live Site</a></h4>
                <h4><a href="" className={links}>Repository</a></h4>
              </div>
            </div>
            <div id="frienderContainer">
              <h1>Friender</h1>
              <h4>HTML, CSS, JS, React, Express, Node, MongoDB</h4>
              <h5>An app used to create chat groups and talk with friends.</h5>
              <div className="resumeLinksContainer">
                <h4><a href="" className={links}>Live Site</a></h4>
                <h4><a href="" className={links}>Repository</a></h4>
              </div>
            </div>
          </div>
          <h3 className='cornflower'>Education</h3>
          <div id="educationContainer">
            <ol id='educationList'>
              <li id='cs50Container' className='resumeEducationClasses'>
                <p className='resumeEducationTitles'>CS50P: CS50&apos;s Introduction to Programming with Python</p>
                <h4 id="cs50Dates" className='resumeEducationDates'>March 2022 - December 2023</h4>
                <h4 id="cs50LiveLinkResume"><a href="https://courses.edx.org/certificates/9aa4a388a39e486baabfbd4ab08d9436?_gl=1*1tz1cz0*_ga*MTE2MDg3MDY2OS4xNjY4MTYyMDU2*_ga_D3KS4KMDT0*MTY4NzA3MDQ4NC44LjEuMTY4NzA3MDUzNS45LjAuMA.." target='_blank' className={links}>Certificate Here</a></h4>
              </li>
              <li id='responsiveContainer' className='resumeEducationClasses'>
                <p className='resumeEducationTitle'>Free Code Camp : Responsive Web Design</p>
                <h4 id="responsiveDates" className='resumeEducationDates'>February 2023 - April 2023</h4>
                <h4 id="responsiveLiveLinkResume"><a href="https://www.freecodecamp.org/certification/fcc6f0c0cfa-9cf0-4117-adff-e35f85aa8676/responsive-web-design" target='_blank' className={links}>Certificate Here</a></h4>
              </li>
              <li id='dataContainer' className='resumeEducationClasses'>
                <p className='resumeEducationTitle'>Free Code Camp : Javascript Algorithms and Data Structures</p>
                <h4 id="dataDates" className='resumeEducationDates'>April 2023 - May 2023</h4>
                <h4 id="dataLiveLinkResume"><a href="https://www.freecodecamp.org/certification/fcc6f0c0cfa-9cf0-4117-adff-e35f85aa8676/responsive-web-design" target='_blank' className={links}>Certificate Here</a></h4>
              </li>
              <li id='completeContainer' className='resumeEducationClasses'>
                <p className='resumeEducationTitle'>Udemy : The Complete 2023 Web Development Bootcamp</p>
                <h4 id="completeDates" className='resumeEducationDates'>May 2023 - June 2023</h4>
                <h4 id="completeLiveLinkResume"><a href="https://www.udemy.com/certificate/UC-7b70b60b-6511-427c-b1bc-517e43cf968c/" target='_blank' className={links}>Certificate Here</a></h4>
              </li>
            </ol>
          </div>
        </div>
        <div id="rightResumeBody">
          <div id="skillsContainer">
            <h3 id="skillsTitle" className='cornflower'>
              Skills
            </h3>
            <ul id="skillsResumeBody">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.JS</li>
              <li>Express.JS</li>
              <li>Mongo.DB</li>
              <li>Node.JS</li>
              <li>Python</li>
            </ul>
          </div>
          <div id="technologyContainer">
            <h3 id="technologyTitle" className='cornflower'>
              Technologies
            </h3>
            <ul id="techResumeBody">
              <li>Zoom</li>
              <li>Vercel</li>
              <li>Github</li>
              <li>CMS</li>
              <li>VSCode</li>
              <li>Figma</li>
              <li>MailChimp</li>
              <li>Wordpress</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
