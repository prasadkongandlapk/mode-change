import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeAlt = isDarkTheme ? 'home' : 'theme'

      const homeTxt = isDarkTheme ? 'home-text-dark' : 'home-text-light'

      const homeBg = isDarkTheme ? 'dark-bg' : 'light-bg'
      const homeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      return (
        <div className={homeBg}>
          <Navbar />
          <div className="home-dark-img-bg">
            <img className="home-img" src={homeImg} alt="home" />
            <h1 className={homeTxt}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
