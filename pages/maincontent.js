import styled from 'styled-components';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { BREAKPOINTS } from "../constant";




export default function MainContent(){
    return(
        <>
            <Wrapper>
                <OuterWrapper>
                    <NameStyle>
                        Hi, I&apos;m NaveenSingh.
                    </NameStyle>
                    <br/>
                    <Paragraph>
                    Im a Software Developer, Where I live in India and Working at VIDSYSOFT TECH company as <b>Team Lead</b>, Who trying to be good developer on my daily life, Which i personally belives in life it&apos;s  all lies about <b> Imapct is Everything</b> So just create an impact on everywhere!!
                    </Paragraph>
                   
                    <Paragraph>
                    This blog is my attempt to share the stuff I&apos;ve learned often and i think the biggest motivation for me at first was just to remember things for myself Im learning these new things and I want to make sure that I have a reference for myself.
                    </Paragraph>
                    <br/>
                </OuterWrapper>
            </Wrapper>
        </>
    );
}


const NameStyle = styled.h1`
letter-spacing: 0.9px`;


const OuterWrapper = styled.div`
width: 100%;
//min-height: 100vh;
padding-left: 25%;
padding-right: 20%;
box-sizing: border-box;
overflow: hidden;
`;


const Wrapper = styled.div`
  margin-top: 2rem;
  @media ${BREAKPOINTS.sm} {
    font-size: 0.7rem;
    margin-bottom: 1.5rem;
  }
`