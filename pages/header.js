import styled from 'styled-components';
import { BREAKPOINTS } from '../constant';
import { useRouter } from 'next/router';
import Link from 'next/link';


export default function Header() {
    return (
        <>
            <DesktopOnly>
                <OuterWrapper>
                    <Navbars>
                        <Name>
                            <h3>naveensingh.dev</h3>
                        </Name>
                        <Nav>
                            <ul className="nav">
                                <li className="nav_li"><Link href="/" rel="noopener noreferrer">Home</Link></li>
                                <li className="nav_li"><a href="#"> Projects</a></li>
                                <li className="nav_li"><a href="#"> Blogs</a></li>
                                <li className="nav_li"><Link href="/now" rel="noopener noreferrer">Now</Link></li>
                            </ul>
                        </Nav>
                    </Navbars>
                </OuterWrapper>
            </DesktopOnly>
        </>
    );
}




const Nav = styled.nav`
  flex: 1;
  text-align: right;
`;

const Name = styled.div`
  // width: 50px;
  cursor: pointer;
  margin: 32px 0;
  color: blue;
`;


const Navbars = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  

  // @media screen and (max-width: 700px) {
  //   width: 100%;
  //   background: linear-gradient(#ff54a2,#ff575a);
  //   position: absolute;
  //   top: 15px;
  //   right: 0;
  //   z-index: 2;
  // }
`;

const OuterWrapper = styled.div`
  width: 100%;
//   min-height: 100vh;
  padding-left: 25%;
  padding-right: 20%;
  box-sizing: border-box;
  overflow: hidden;
`;

const DesktopOnly = styled.span`
  @media ${BREAKPOINTS.md} {
    display: none;
  }
`;