import styled from 'styled-components';
import { BREAKPOINTS } from '../constant';
import Icon from 'react-icons-kit';
import {twitter} from 'react-icons-kit/icomoon/twitter'
import {github} from 'react-icons-kit/icomoon/github'
import {linkedin} from 'react-icons-kit/icomoon/linkedin'

export default function Footer() {
    return(
        <>
            <Wrapper>
                <Copyright>
                All that stuff up there was written by me, <Name>NaveenSingh</Name>. All rights reserved.
                </Copyright>
                <IconsWrapper>
                    <Icon icon={twitter} size={22}/>
                    <Icon icon={github} size={22}/>
                    <Icon icon={linkedin} size={22}/>
                </IconsWrapper>
            </Wrapper>
        </>
    );
} 

const Name = styled.span`
  font-weight: 600;
`;


const IconsWrapper = styled.div`
display: inline-flex;
justify-content: space-between;
margin: auto;
gap: 15px;
cursor: pointer;
margin-top: 20px;`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
background: #edf2f7;
margin: 10px;
padding: 40px 0 20px;
line-height: 30px;
position: absolute;
bottom: 0;
left: 0;
width: 100%;
color: black`;


const Copyright = styled.div`
font-size: 16px;
text-align: center;
`;