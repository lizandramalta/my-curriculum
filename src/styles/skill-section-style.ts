import styled from 'styled-components'

export const SkillSection = styled.section`
  padding: 56px 162px;

  .skill-container {
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    row-gap: 16px;
    column-gap: 36px;
    flex-wrap: wrap;
  }

  @media (max-width: ${(props) => props.theme.breakpoint.tablet}) {
    padding: 56px 32px;
  }

  @media (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    padding: 32px 16px;
    flex-direction: column;

    .skill-container {
      flex-direction: column;
      align-items: center;
    }
  }
`
