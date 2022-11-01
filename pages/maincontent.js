import styled from 'styled-components';
import { Paragraph } from '../components/Paragraph/Paragraph';
import RecentBlogPreview from '../components/RecentBlogPreview/RecentBlogPreview';
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
                    This blog is about to share the stuff I&apos;ve learned often and i think the biggest motivation for me at first was just to remember things for myself Im learning these new things and I want to make sure that I have a reference for myself.
                    </Paragraph>
                    {/* <svg  style={{ margin: '70px auto' }} width="100" height="50"><path d="M 0,25 Q 5,30 10,25 Q 15,20 20,25 Q 25,30 30,25 Q 35,20 40,25 Q 45,30 50,25 Q 55,20 60,25 Q 65,30 70,25 Q 75,20 80,25 Q 85,30 90,25 Q 95,20 100,25" fill="none" stroke-linecap="round" stroke="#D500F9" stroke-width="2"></path>
                    </svg> */}
                    
                    {/* <h3>Recent Blog </h3> <br/> */}
                    {/* <RecentBlogPreview
                    title="Things to Focus Before Begin Developer"
                    createdDate="October 24th, 2022"
                    blogHint="How to create and use API Routes in Next.js"
                  /> */}
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