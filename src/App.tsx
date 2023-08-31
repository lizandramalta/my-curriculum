import { useEffect, useRef, useState } from 'react'
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
  EXPERIENCE_TITLE,
  WORD_PERIOD,
} from './application/constants/experienceTexts'
import {
  hardSkills,
  languageSkills,
  softSkills,
} from './application/data/skills'
import { SkillCard } from './components'
import {
  COURSE,
  EDUCATION_TITLE,
  UNIVERSITY,
} from './application/constants/educationTexts'
import { HABILITIES_TITLE } from './application/constants/habilitiesTexts'
import { LANGUAGE_TITLE } from './application/constants/languageTexts'
import { MenuItem } from './components/menu'

function App() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const experieceRef = useRef<HTMLDivElement>(null)
  const habilitiesRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const languageRef = useRef<HTMLDivElement>(null)

  const handleResize = () => {
    setIsTablet(window.innerWidth <= 992 && window.innerWidth > 770)
    setIsMobile(window.innerWidth <= 770)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) =>
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' })

  const menuItens: MenuItem[] = [
    { label: 'Experiência', action: () => scrollToSection(experieceRef) },
    { label: 'Habilidades', action: () => scrollToSection(habilitiesRef) },
    { label: 'Educação', action: () => scrollToSection(educationRef) },
    { label: 'Idiomas', action: () => scrollToSection(languageRef) },
  ]

  function getPersonalPhoto() {
    if (isMobile) return PersonalPhotoMobile
    if (isTablet) return PersonalPhotoTablet
    return PersonalPhotoDesktop
  }

  return (
    <S.Container>
      <Header menuItens={menuItens} />
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
      <S.ExperienceSection ref={experieceRef}>
        <div className="section-title-container">
          <h1 className="bold section-title">{EXPERIENCE_TITLE}</h1>
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
      <S.SkillSection ref={habilitiesRef}>
        <h1 className="bold">{HABILITIES_TITLE}</h1>
        <div className="skill-container">
          {softSkills.map((skill) => (
            <SkillCard skillName={skill.name} />
          ))}
        </div>
        <div className="skill-container">
          {hardSkills.map((skill) => (
            <SkillCard skillName={skill.name} skillLevel={skill.level} />
          ))}
        </div>
      </S.SkillSection>
      <S.EducationSection ref={educationRef}>
        <div className="section-title-container">
          <h1 className="bold section-title">{EDUCATION_TITLE}</h1>
        </div>
        <div className="section-description-container">
          <h5 className="bold">{COURSE}</h5>
          <h5>{UNIVERSITY}</h5>
        </div>
      </S.EducationSection>
      <S.LanguageSection ref={languageRef}>
        <h1 className="bold">{LANGUAGE_TITLE}</h1>
        <div className="language-container">
          {languageSkills.map((skill) => (
            <SkillCard skillName={skill.name} skillLevel={skill.level} />
          ))}
        </div>
      </S.LanguageSection>
    </S.Container>
  )
}

export default App
