import styled from 'styled-components';
import { BREAKPOINTS } from '../../constant';


export const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;

  @media ${BREAKPOINTS.sm} {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }
`;
