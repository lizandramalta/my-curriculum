import styled from 'styled-components'

export const HardSkillCard = styled.div`
  width: 334px;
  min-width: 334px;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.white.default};
  box-shadow: 4px 4px 10px ${(props) => props.theme.colors.white.dark};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.black.default};

  .skill-name {
    margin-bottom: 8px;
  }

  .level {
    padding: 4px 16px;
    background-color: ${(props) => props.theme.colors.blue.default};
    font-size: ${(props) => props.theme.typography.fontScale.small};
    border-radius: 24px;
  }
`
