interface SkillCardProps {
  skillName: string
  skillLevel?: SkillLevelType
}
import { SkillLevelType } from '../application/data/skills'
import * as S from '../styles'

export default function SkillCard({ skillName, skillLevel }: SkillCardProps) {
  function getLevelLabel() {
    switch (skillLevel) {
      case 'basic':
        return 'Básico'
      case 'intermediary':
        return 'Intermediário'
      case 'advanced':
        return 'Avançando'
      default:
        return 'Valor inválido'
    }
  }

  return skillLevel ? (
    <S.HardSkillCard>
      <h5 className="skill-name">{skillName}</h5>
      <span className="level">{getLevelLabel()}</span>
    </S.HardSkillCard>
  ) : (
    <S.SoftSkillCard>
      <h5 className="skill-name">{skillName}</h5>
    </S.SoftSkillCard>
  )
}
