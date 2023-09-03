import { ContactIcon } from '../../application/theme/icons'
import * as S from '../../styles'

interface ContactButtonProps {
  onClick: () => void
}

export default function ContactButton({ onClick }: ContactButtonProps) {
  return (
    <S.ContactButton onClick={() => onClick()}>
      <p className="bold text">Entre em contato</p>
      <div className="icon">
        <ContactIcon size={26} />
      </div>
    </S.ContactButton>
  )
}
