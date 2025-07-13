import React, { useEffect, useState, useRef } from 'react'
import './Navbar.css'
import menu from '../../assets/Logo/down-arrow.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeName, setActiveName] = useState('Home')
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })
  const navRefs = useRef({})
  const navRefs2 = useRef({})

  const links = [
    { name: 'Home', path: '#' },
    { name: 'About Me', path: '#' },
    { name: 'Contact', path: '#' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  useEffect(() => {
    const currentRef = navRefs.current[activeName]
    if (currentRef) {
      const { offsetLeft, offsetWidth } = currentRef
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth })
    }
  }, [activeName])

  return (
    <div className="navbar">
      <div className="navbar-back rounded-b-xl backgroundcolor-white">
        <div className="navbar-left">
          <p className="text font-bold">dh.Rohan</p>
        </div>

        <div className="navbar-middle overflow-hidden relative">
          <ul
            className={`transition-all duration-250 ease-out-in transform origin-top ${isMenuOpen
              ? 'translate-y-0 opacity-100 scale-y-100'
              : '-translate-y-5 opacity-0 scale-y-0'
              } flex gap-6 relative`}
          >
            {links.map((link) => (
              <li key={link.name}
                ref={el => (navRefs2.current[link.name] = el)}
              >
                <a
                  href={link.path}
                  ref={el => (navRefs.current[link.name] = el)}
                  onClick={() => setActiveName(link.name)}
                  className={` px-1 py-2 ${activeName === link.name ? 'font-bold' : 'text-gray-500'
                    } navbar-menu`}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <span
              className="absolute bottom-0 h-1 bg-blue-500 transition-all duration-300"
              style={{
                left: underlineStyle.left,
                width: underlineStyle.width
              }}
            />
          </ul>
        </div>

        <div className="navbar-right">
          <img
            src={menu}
            alt=""
            className="menu cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
