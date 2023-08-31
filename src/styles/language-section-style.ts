import styled from 'styled-components'

export const LanguageSection = styled.section`
  padding: 56px 162px;

  .language-container {
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

    .language-container {
      flex-direction: column;
      align-items: center;
    }
  }
`
