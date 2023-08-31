import styled from 'styled-components'

export const SoftSkillCard = styled.div`
  width: 334px;
  min-width: 334px;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.blue.default};
  box-shadow: 4px 4px 10px ${(props) => props.theme.colors.blue.default};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.black.default};
`
