import { useEffect, useState } from 'react'
import {
  PRESENTATION_FIRST_PARAGRAPH,
  PRESENTATION_SECOND_PARAGRAPH,
  ROLE,
  SALUTION,
} from './application/constants/informationTexts'
import Header from './components/header'
import * as S from './styles'
import PersonalPhotoDesktop from '/desktop_photo.png'
import PersonalPhotoTablet from '/tablet_photo.png'
import PersonalPhotoMobile from '/mobile_photo.png'
import {
  COMPANY,
  CONTRIBUTION_ONE,
  CONTRIBUTION_THREE,
  CONTRIBUTION_TWO,
  RESPONSABILITY,
  SECTION_TITLE,
  WORD_PERIOD,
} from './application/constants/experienceTexts'

function App() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  const handleResize = () => {
    setIsTablet(window.innerWidth <= 992 && window.innerWidth > 770)
    setIsMobile(window.innerWidth <= 770)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function getPersonalPhoto() {
    if (isMobile) return PersonalPhotoMobile
    if (isTablet) return PersonalPhotoTablet
    return PersonalPhotoDesktop
  }

  return (
    <S.Container>
      <Header />
      <S.InformationSection>
        <div className="text-container">
          <h2 className="salution">{SALUTION}</h2>
          <h1 className="bold role">{ROLE}</h1>
          <p className="first-paragraph">{PRESENTATION_FIRST_PARAGRAPH}</p>
          <p className="second-paragraph">{PRESENTATION_SECOND_PARAGRAPH}</p>
        </div>
        <figure>
          <img src={getPersonalPhoto()} />
        </figure>
      </S.InformationSection>
      <S.ExperienceSection>
        <div className="section-title-container">
          <h1 className="bold section-title">{SECTION_TITLE}</h1>
        </div>
        <div className="section-description-container">
          <h5>{WORD_PERIOD}</h5>
          <h5 className="bold">{RESPONSABILITY}</h5>
          <h5>{COMPANY}</h5>
          <ul className="contribution-list">
            <li>{CONTRIBUTION_ONE}</li>
            <li>{CONTRIBUTION_TWO}</li>
            <li>{CONTRIBUTION_THREE}</li>
          </ul>
        </div>
      </S.ExperienceSection>
    </S.Container>
  )
}

export default App
