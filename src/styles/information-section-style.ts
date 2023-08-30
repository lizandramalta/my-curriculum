import styled from 'styled-components'

export const InformationSection = styled.section`
  display: flex;
  padding: 56px 162px;
  justify-content: center;
  align-items: center;
  gap: 32px;

  .salution {
    margin-bottom: 8px;
  }

  .role,
  .first-paragraph {
    margin-bottom: 16px;
  }

  .first-paragraph,
  .second-paragraph {
    line-height: 26px;
  }

  @media (max-width: ${(props) => props.theme.breakpoint.tablet}) {
    padding: 56px 32px;
  }

  @media (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    padding: 56px 16px;
    flex-direction: column;
    gap: 24px;

    .salution {
      font-size: ${(props) => props.theme.typography.fontScale.h3};
    }

    .role {
      font-size: ${(props) => props.theme.typography.fontScale.h2};
    }
  }
`
