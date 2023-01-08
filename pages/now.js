
import styled from 'styled-components';
import { BREAKPOINTS } from '../constant';
import Header from './header';
import Footer from './footer'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import ThingsIUse from '../components/thingsuse';
import RightNow from './rightnow';
import { Paragraph } from '../components/Paragraph/Paragraph';
import Icon from 'react-icons-kit';
import {androidArrowForward} from 'react-icons-kit/ionicons/androidArrowForward'
import Link from 'next/link';

import { Emoji, EmojiStyle } from 'emoji-picker-react';
import { Heading } from '../components/Heading/Heading';


export default function Now() {
    return(
        <>
            <div className={styles.container}>
                <Head>
                    <title>Now - NaveenSingh</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main>
                    <Header/>
                    <Wrapper>
                        <OuterWrapper>
                            <Heading>What I&apos;m doing now</Heading>
                            <hr/> 
                            <span style={{ color:'black',fontSize: '12px',letterSpacing: '0.7px',fontWeight: 'bold', fontStyle: 'italic' }}> Updated : 09 January, 2023</span>
                            <br/><br/>
                            <Paragraph>
                                Yes what I&apos;m doing now But unfortunately nothing too exciting going on in my life right now, Recently being more conscious about health, So just started hitting into the gym and exercises,
                                taking care of what i eating,
                            </Paragraph>
                            <Paragraph>
                                    I&apos;ve been listening to some good podcasts in spotify, Which brings lot&apos;s of insight and positive vibes
                            </Paragraph>
                            <div style={{ color: '#3121ed',fontWeight: 'bold' }}>
                                <Icon size={22} icon={androidArrowForward} /> 
                                <span style={{ color:'black',fontSize: '16px',letterSpacing: '0.7px',fontWeight: 'bold'  }}>  Podcasted by Poonguzhali : 
                                <Link href='https://open.spotify.com/show/3uuun3KM8prR0gCmIeLqBL' style={{ fontStyle: 'normal',color: '#3121ed'}} rel="noopener noreferrer">
                                        <span className={styles.thingiuselink}> < a href='https://open.spotify.com/show/3uuun3KM8prR0gCmIeLqBL'> Yours Positively - Tamil Self Improvement & Mental Wellness </a>
                                    </span> 
                                </Link>
                                </span>
                            </div>
                            <div style={{ color: '#3121ed',fontWeight: 'bold',marginTop: '0.9rem' }}>
                                <Icon size={22} icon={androidArrowForward} /> 
                                <span style={{ color:'black',fontSize: '16px',letterSpacing: '0.7px',fontWeight: 'bold'  }}>   The RJ Balaji Podcast  : 
                                <Link href='https://open.spotify.com/show/58g95EqsrSk5ViIl3wGDzo#login' style={{ fontStyle: 'normal',color: '#3121ed'}} rel="noopener noreferrer">
                                        <span className={styles.thingiuselink}> < a href='https://open.spotify.com/show/58g95EqsrSk5ViIl3wGDzo#login'> Naallanaa Murukku </a>
                                    </span> 
                                </Link>
                                </span>
                            </div>
                            <br/><br/>
                            

                            <h2>Right Now</h2> <br/>
                           
                           <div style={{ display: 'flex', flexDirection: 'column',gap: '13px' }}>
                                <div style={{ display: 'flex', flexDirection: 'row',gap: '10px' }}>
                                {/* <Icon style={{color: '#3121ed'}} size={22} icon={androidArrowForward} />    */}
                                🚀 &nbsp; Building Habit and System
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row',gap: '10px' }}>
                                    {/* <Emoji unified="1f3c4" size="25" />   */}
                                    🧑🏻‍💻 &nbsp; Learning Flutter & CSS
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row',gap: '10px' }}>
                                    {/* <Emoji unified="1f6a7" size="24" />   */}
                                    🚧 &nbsp; Building this blog website (Nextjs)
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row',gap: '10px' }}>
                                    {/* <Emoji unified="1f4da" size="25" />   */}
                                    📖 &nbsp; Current Reading -
                                    <Link href='https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834' style={{ fontStyle: 'normal',color: '#3121ed'}} rel="noopener noreferrer">
                                        <span className={styles.thingiuselink}> < a href='https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834'> Atomic Habit : James-Clear </a>
                                    </span> 
                                </Link>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row',gap: '10px' }}>
                                    {/* <Emoji unified="1f91d" size="25" />   */}
                                    🤝 &nbsp; Let&apos;s get&apos;s connected
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row',gap: '10px' }}>
                                    {/* <Emoji unified="1f4cd" size="25" />   */}
                                    📍&nbsp; Living in Mettupalayam, India
                                </div>
                           </div>
                            {/* <ul style={{letterSpacing: '0.7px'}}>
                                <li> <Emoji unified="1f423" size="25" /> Building Habit and System</li>
                                <li>Learning Flutter & CSS </li>
                                <li>Building this Website </li>
                                <li>Current Reading </li>
                                <li>Let's get's Connected</li>
                                <li>Living in Mettupalayam, India</li>
                            </ul> */}
                            
                            {/* <RightNow 
                                title="Learning Blender & UI/UX Design"
                                links="https://google.com"
                                emoji=""
                            >

                            </RightNow> */}
                            {/* <ThingsIUse
                            title="Building this website"
                            titlevalue=""
                            links="">
                            </ThingsIUse> */}
                        </OuterWrapper>
                    </Wrapper>
                </main>
                <Footer/>
            </div>
        </>
    );

}


const OuterWrapper = styled.div`
width: 100%;
//min-height: 100vh;
padding-left: 25%;
padding-right: 20%;
box-sizing: border-box;
overflow: hidden;
`;

const Wrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media ${BREAKPOINTS.sm} {
    font-size: 0.7rem;
    margin-bottom: 1.5rem;
  }
`