import { useEffect, useState } from 'react'
import ContactOverlay from './contactOverlay'
import ContactButton from './contactButton'
import OverlayContainer from './overlayContainer'

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false)
  const [overlayVisible, isOverlayVisible] = useState(false)

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 770)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return overlayVisible ? (
    isMobile ? (
      <OverlayContainer>
        <ContactOverlay onClose={() => isOverlayVisible(false)} />{' '}
      </OverlayContainer>
    ) : (
      <ContactOverlay onClose={() => isOverlayVisible(false)} />
    )
  ) : (
    <ContactButton onClick={() => isOverlayVisible(true)} />
  )
}
