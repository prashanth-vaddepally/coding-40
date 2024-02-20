// Write your code here
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

const Header = () => {
  const reason = () => {
    ;<Popup
      trigger={
        <button type="button">
          <GiHamburgerMenu />
          kk
        </button>
      }
    >
      <button data-testid="closeButton">
        <IoMdClose />
        close
      </button>
      <div>
        <Link to="/">
          <AiFillHome />
          <h1>Home</h1>
        </Link>
        <Link to="/about">
          <BsInfoCircleFill />
          <h1>About</h1>
        </Link>
      </div>
    </Popup>
  }

  return (
    <div>
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
      <button data-testid="hamburgerIconButton" onClick={reason()}>
        <GiHamburgerMenu />
        show
      </button>
    </div>
  )
}

export default Header
