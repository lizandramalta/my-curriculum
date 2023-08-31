import styled from 'styled-components'

export const EducationSection = styled.section`
  display: flex;
  padding: 56px 162px;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  background-color: ${(props) => props.theme.colors.green.dark};
  color: ${(props) => props.theme.colors.white.default};

  .section-description-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media (max-width: ${(props) => props.theme.breakpoint.tablet}) {
    padding: 56px 32px;
  }

  @media (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    padding: 32px 16px;

    .section-title {
      font-size: ${(props) => props.theme.typography.fontScale.h2};
    }
  }
`
