import { MouseEventHandler } from 'react'
import * as S from '../styles'

export type MenuItem = {
  label: string
  action: MouseEventHandler<HTMLSpanElement> | undefined
}

interface MenuProps {
  menuItens: MenuItem[]
}

export default function Menu({ menuItens }: MenuProps) {
  return (
    <S.Menu>
      {menuItens.map((item) => (
        <span onClick={item.action}>{item.label}</span>
      ))}
    </S.Menu>
  )
}
