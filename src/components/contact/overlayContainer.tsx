import { HTMLProps } from 'react'
import * as S from '../../styles'

export default function OverlayContainer({
  children,
}: HTMLProps<HTMLDivElement>) {
  return <S.OverlayContainer>{children}</S.OverlayContainer>
}
