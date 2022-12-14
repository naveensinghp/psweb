
import styled from 'styled-components';
import {androidArrowForward} from 'react-icons-kit/ionicons/androidArrowForward'
import Icon from 'react-icons-kit';
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Header from './header';
import { Heading } from '../components/Heading/Heading';

export default function Projects() {
  return(
    <div className={styles.container}>
      <Head>
          <title>MyProjects</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Header/>
          <Wrapper>
          <Heading style={{textAlign:"center"}}>
            Projects
          </Heading>
           <span style={{textAlign:"center"}}>  
           My Side Projects</span>
            <Comingsoon>
                <h4>Building - Addin gup</h4>
            </Comingsoon>
          </Wrapper>
      </main>
    </div>
  );

}


const Wrapper = styled.div`
width: 100%;
//min-height: 100vh;
padding-left: 25%;
padding-right: 20%;
box-sizing: border-box;
overflow: hidden;
`

const Comingsoon = styled.div`
padding: 10px;
border-style: dotted;
`;


