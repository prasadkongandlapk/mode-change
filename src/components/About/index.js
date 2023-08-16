import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeTxt = isDarkTheme ? 'home-text-dark' : 'home-text-light'
      const homeAlt = isDarkTheme ? 'about' : 'theme'
      const homeBg = isDarkTheme ? 'dark-bg' : 'light-bg'
      const homeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      return (
        <div className={homeBg}>
          <Navbar />
          <div className="home-dark-img-bg">
            <img className="home-img" src={homeImg} alt={homeAlt} />
            <h1 className={homeTxt}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
