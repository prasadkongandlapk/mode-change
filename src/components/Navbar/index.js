import './index.css'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onChangeMode = () => {
        toggleTheme()
      }

      const linksColor = isDarkTheme ? 'dark-p' : 'light-p'
      const logoImgcolor = isDarkTheme ? 'dark-img-color' : 'light-img-color'

      const btnImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png '
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png '

      const logoImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png '
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png '

      const navBg = isDarkTheme ? 'nav-dark-bg' : 'nav-light-bg'
      return (
        <ul className={navBg}>
          <li>
            <img className={logoImgcolor} src={logoImg} alt="website logo" />
          </li>
          <li className="links-bg">
            <Link to="/">
              <li>
                <p className={linksColor}>Home</p>
              </li>
            </Link>
            <Link to="/about">
              <li>
                <p className={linksColor}>About</p>
              </li>
            </Link>
          </li>
          <li data-testid="theme">
            <button type="button" onClick={onChangeMode}>
              <img className="img-btn" src={btnImg} alt="theme" />
            </button>
          </li>
        </ul>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
