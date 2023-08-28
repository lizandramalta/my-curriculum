import * as S from '../styles'
import { Menu } from '.'
import logo from '../assets/logo.png'
import logoMobile from '../assets/mobile_logo.png'
import { MenuIcon } from '../application/theme/icons'
import { useEffect, useState } from 'react'

export default function Header() {
  const [isMobile, setIsMobile] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 770)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <S.Header>
      <figure className="logo">
        <img src={isMobile ? logoMobile : logo} alt="Lizandra Malta" />
      </figure>
      {((isMobile && showMenu) || !isMobile) && <Menu />}
      <button className="menuButton" onClick={() => setShowMenu(!showMenu)}>
        <MenuIcon size={32} />
      </button>
    </S.Header>
  )
}