export type SkillLevelType = 'basic' | 'intermediary' | 'advanced'

type Skill = {
  name: string
  level?: SkillLevelType
}

export const softSkills: Skill[] = [
  { name: 'Trabalho em equipe' },
  { name: 'Aprendizado rápido' },
  { name: 'Atenção a detalhes' },
  { name: 'Automotivação' },
  { name: 'Resolução de problemas' },
]

export const hardSkills: Skill[] = [
  { name: 'Javascript', level: 'advanced' },
  { name: 'Typescript', level: 'advanced' },
  { name: 'HTML', level: 'advanced' },
  { name: 'CSS', level: 'advanced' },
  { name: 'React', level: 'advanced' },
  { name: 'React Native', level: 'advanced' },
  { name: 'Git', level: 'advanced' },
  { name: 'Scrum', level: 'advanced' },
  { name: 'Bootstrap', level: 'intermediary' },
  { name: 'Java', level: 'basic' },
  { name: 'Docker', level: 'basic' },
  { name: 'SASS', level: 'basic' },
  { name: 'C', level: 'basic' },
]

export const languageSkills: Skill[] = [
  { name: 'Inglês', level: 'intermediary' },
]
