import * as S from '../styles'

export type MenuItem = {
  label: string
  action: () => void
}

interface MenuProps {
  menuItens: MenuItem[]
  changeMenuVisibility: (visibility: boolean) => void
}

export default function Menu({ menuItens, changeMenuVisibility }: MenuProps) {
  function handleMenuItemClick(action: () => void) {
    action()
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
