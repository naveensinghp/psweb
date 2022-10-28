
import styled from 'styled-components';
import {androidArrowForward} from 'react-icons-kit/ionicons/androidArrowForward'
import Icon from 'react-icons-kit';
import Link from 'next/link';
import styles from '../styles/Home.module.css'


function RightNow(props) {
  const title = props.title;
  const titlevalue = props.titlevalue
  const emoji = props.emoji
  const links = props.links

  return (
    <Wrapper>
        {/* <div style={{ color: '#3121ed',fontWeight: 'bold' }}>
            <Icon size={22} icon={androidArrowForward} /> 
            <span style={{ color:'black',fontSize: '16px',fontStyle: 'italic',letterSpacing: '0.7px',fontWeight: 'bold'  }}>  {title} : 
            <Link href={links} style={{ fontStyle: 'normal',color: '#3121ed'}} rel="noopener noreferrer">
                    <span className={styles.thingiuselink}> < a href={links} > {titlevalue}</a></span> 
            </Link>
            </span>
        </div> */}
        😇
    </Wrapper>
  );
}




const Text = styled.span`
    color:'black';
    fontSize: '16px';
    fontStyle: 'italic';
    letterSpacing: '0.7px';
    fontWeight: 'bold'    
`

const Wrapper = styled.div`
width: 100%;
//min-height: 100vh;
padding-left: 25%;
padding-right: 20%;
box-sizing: border-box;
overflow: hidden;

`

export default RightNow;
