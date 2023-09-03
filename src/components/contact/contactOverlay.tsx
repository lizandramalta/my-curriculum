import { CloseIcon, ContactIcon, MailIcon } from '../../application/theme/icons'
import * as S from '../../styles'

interface ContactOverlayProps {
  onClose: () => void
}

export default function ContactOverlay({ onClose }: ContactOverlayProps) {
  return (
    <S.ContactOverlay>
      <div className="contact-item">
        <MailIcon size={24} className="icon" />
        <h5 className="contact-item-information">lizlrmalta@gmail.com</h5>
      </div>
      <div className="contact-item">
        <ContactIcon size={24} className="icon" />
        <h5 contact-item-information>(61) 9 81166159</h5>
      </div>
      <button className="close-icon" onClick={() => onClose()}>
        <CloseIcon size={24} />
      </button>
    </S.ContactOverlay>
  )
}
