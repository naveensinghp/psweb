import styled from 'styled-components';
import { Paragraph } from '../components/Paragraph/Paragraph';
import RecentBlogPreview from '../components/RecentBlogPreview/RecentBlogPreview';
import { BREAKPOINTS } from "../constant";
import Link from 'next/link';
import { Heading } from '../components/Heading/Heading';



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
                    I am aspiring Software Developer, Where I live in India and Working at <strong> VIDSYSOFT TECH</strong> company as <b>Team Lead</b>, Who trying to be good developer on my daily life, Which i personally belives in life it&apos;s  all lies about making an impact, It can say it as <b> Imapct is Everything</b> So just create an impact on everywhere!!
                    </Paragraph>
                   
                    <Paragraph>
                    The Goal of this blog is about to share the stuff I&apos;ve learned often and the biggest motivation for me at first was just to remember things for myself just want to make sure that I keep this as reference for myself.
                    </Paragraph>
                    {/* <EndofLine></EndofLine> */}
                    {/* <svg  style={{ margin: '70px auto' }} width="100" height="50"><path d="M 0,25 Q 5,30 10,25 Q 15,20 20,25 Q 25,30 30,25 Q 35,20 40,25 Q 45,30 50,25 Q 55,20 60,25 Q 65,30 70,25 Q 75,20 80,25 Q 85,30 90,25 Q 95,20 100,25" fill="none" stroke-linecap="round" stroke="#D500F9" stroke-width="2"></path>
                    </svg> */}
                    <Heading>Recent Blog</Heading>
                    <RecentBlogPreview
                    title="My Rewind of 2022"
                    createdDate="Decemember 31th, 2022"
                    blogHint="My Thoughts towards over a year in 2022"
                    bloglink="posts/my-review-2022"
                  />
                   {/* <RecentBlogPreview
                    title="Creating and Using API Routes in Nextjs"
                    createdDate="Decemember 30th, 2022"
                    blogHint="How to Create Single Shared Layout"
                    bloglink="posts/things-to-focus"
                  /> */}
                </OuterWrapper>
            </Wrapper>
        </>
    );
}



const NameStyle = styled.h1`
letter-spacing: 0.9px`;


const EndofLine = styled.div`
border: 3px solid #ababab;
border-radius: 12px;
margin: 70px auto;
width: 50px;`;


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