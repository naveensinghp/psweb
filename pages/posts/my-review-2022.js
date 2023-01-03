
import React from "react";
import styled from 'styled-components';
import {arrowLeft} from 'react-icons-kit/feather/arrowLeft'
import Icon from 'react-icons-kit';
import { Heading } from "../../components/Heading/Heading";
import Link from 'next/link';
import {ic_keyboard_backspace} from 'react-icons-kit/md/ic_keyboard_backspace'
import Head from 'next/head'
import Image from 'next/image'
import {androidArrowForward} from 'react-icons-kit/ionicons/androidArrowForward'
import {angleDoubleRight} from 'react-icons-kit/fa/angleDoubleRight'

function ThingstoFocusBlog() {
  return (
   <>
      <Head>
        <title>2022 Review</title>
      </Head>
      <LeftIcon>
          <Link href="/" rel="noopener noreferrer">
            <Icon size={22} color="white" icon={arrowLeft} /> 
          </Link>
      </LeftIcon>
      <Hr></Hr>
    <Wrapper>
      <div><h1 style={{ fontSize: '3rem',lineHeight:'4rem',fontWeight: '700'}}> Review of my 2022</h1></div>
      <Subheading>
        Written on <span style={{ color:'#e91e63',fontSize: '16px',letterSpacing: '0.7px',fontWeight: 'bold'}}> December 31st, 2022</span>
      </Subheading>
      <Content>
        <p>
          Here comes end of 2022, Well writing my first blog on this website, So might be quite sounds silly and some mistakes too, Please don&apos;t mind it,  <br/> <br/>
          Let me rewind myself towards 2022, On the January and half of month i was working software developer in <strong>VIDSYSOFT</strong> and doing same things following the same routines<br/> <br/>

          But working in the startup it&apos;s like challenging because you always being like pressure cooker, I had an chances to work in the mobile technology <b>(Flutter)</b>, Which is completely new to me, Still in the learning 

          <br/><br/>
          Then later in month launched my personal website, To have my digital garden space, Thinking to write more technical blogs and what running on minds, <br/><br/>
          On the month of November, One of my bucket list has been full filled i can say, Which was i brought the PS5 Console😍 Reason why i felt happy ps5 untill still now in the demand, so i feel lucky to have, I tired twice and thirce to place order in Shopatsc but does not happened, On luckily on fourth time i got it,
        </p>
        <br/> <br/>
          <Image src="/assets/images/console.png" alt="PS5 Console"  width={675} height={508} />
          <PhotoText>Playstation 5</PhotoText>
        <br/>
        <p>Sharing this might be sounds silly on the personal things, But i like to keep an record though as long this website stays into it</p> <br/>
        <h3>My Commits</h3> 
         <p>Looks like my github contributions graph are very less, But ok i am making progress</p><br/>
        <Image src="/assets/images/2022_git.png" alt="Console"  width={1828} height={448} />
        <br/>
        <p>Additionally level up my skilled in the flutter technology</p>
        <br/><br/>
        <h3>Conclusion</h3>
        <p>
            From the year of conclusion what i can say to myself was that i should do more things like creating value on myself, Creating my own reputation to the work as well on the developer community side, I should not be lazy to do, I should constantly upgrade myself, 
          </p><br/>
          <p>People around the world going through some of COVID cases and lot of some unknown disease, So on let this year(2023) brings lot of joy and peace to the world</p> <br/>
          <p>So yeah that&apos;s it, Wishing you very Happy New Year-2023 🍾</p>
        <br/>
        {/* <div>
          <Icon size={22} icon={angleDoubleRight} style={{ color : 'blue'}} /> 
          <span style={{ fontSize: '16px',letterSpacing: '0.7px',fontWeight: 'bold'  }}> 
          Read 10 Books</span>
        </div>
        <div>
          <Icon size={22} icon={angleDoubleRight} style={{ color : 'blue'}} /> 
          <span style={{ color:'black',fontSize: '16px',letterSpacing: '0.7px',fontWeight: 'bold'  }}> 
          Focused on Building Skills</span>
        </div>
        <div>
          <Icon size={22} icon={angleDoubleRight} style={{ color : 'blue'}} /> 
          <span style={{ color:'black',fontSize: '16px',letterSpacing: '0.7px',fontWeight: 'bold'  }}> 
          Create More Value</span>
        </div>
        <div>
          <Icon size={22} icon={angleDoubleRight} style={{ color : 'blue'}} /> 
          <span style={{ color:'black',fontSize: '16px',letterSpacing: '0.7px',fontWeight: 'bold'  }}> 
          Make a passive incomes</span>
        </div>
        <br/><br/> */}
      </Content>
    </Wrapper>
    
   </>
  );
}
const Hr = styled.div`
  border-top: 1px solid #dddddd;
  //box-shadow: 0px 1px 0px rgb(0 0 0 / 8%)
`;


const PhotoText = styled.div`
  text-align: center;
`;


const LeftIcon = styled.div`
  padding: 14px;
  color: grey;
  cursor: pointer;
`;

const Subheading = styled.div`
color : grey;
`;

const Content = styled.div`
  padding-top: 20px;
  font-size: 1.2rem;
`;


const Wrapper = styled.div`
width: 100%;
//min-height: 100vh;
padding-left: 24%;
padding-right: 25%;
box-sizing: border-box;
padding-top: 100px;
overflow: hidden;
`;

export default ThingstoFocusBlog;
