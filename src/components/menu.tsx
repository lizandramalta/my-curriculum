import { MouseEventHandler } from 'react'
import * as S from '../styles'

export type MenuItem = {
  label: string
  action: MouseEventHandler<HTMLSpanElement> | undefined
}

interface MenuProps {
  menuItens: MenuItem[]
  changeMenuVisibility: (visibility: boolean) => void
}

export default function Menu({ menuItens, changeMenuVisibility }: MenuProps) {
  function handleMenuItemClick(
    action: MouseEventHandler<HTMLSpanElement> | undefined
  ) {
    if (action) {
      const fakeEvent = {
        currentTarget: null,
      } as unknown as React.MouseEvent<HTMLSpanElement>
      action(fakeEvent)
    }
    changeMenuVisibility(false)
  }

  return (
    <S.Menu>
      {menuItens.map((item) => (
        <span onClick={() => handleMenuItemClick(item.action)}>
          {item.label}
        </span>
      ))}
    </S.Menu>
  )
}
