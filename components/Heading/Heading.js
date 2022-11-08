import styled from 'styled-components';
import { BREAKPOINTS } from '../../constant';


export const Heading = styled.h2`
//   font-size: 1rem;
//   letter-spacing: 0.5px;
//   margin-bottom: 1rem;
    color: #e91e63;

  @media ${BREAKPOINTS.sm} {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }
`;
