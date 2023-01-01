import React from "react";
import styled from 'styled-components';
import {angleDoubleRight} from 'react-icons-kit/fa/angleDoubleRight'
import Icon from 'react-icons-kit';
import {check} from 'react-icons-kit/fa/check'
import Link from 'next/link';

function MyImpossibleList(props) {
  const title = props.title;
  const isDone = props.isdone;
  const achievedDate = props.achievedDate
  const links = props.links
  return (
      <Wrapper>
        {isDone ? (
            <>
              <IsDone>
                <Icon size={18} icon={check} /> 
              </IsDone>
              <YesDone>{title}</YesDone>
            </>
            
          ) : (

            <>
             <IsNotDone>
                <Icon className="impicon" size={18} color="white" icon={angleDoubleRight} /> 
              </IsNotDone>
              <NotDone>{title}</NotDone>
            </>
           
           
          )}
          
          <Link href={`/${links ? links : ""}`} passHref>
            <a target="_blank" rel="noopener noreferrer" style={{ cursor : 'pointer',fontWeight: 'bold',textDecoration: 'underline', color: 'blue' }}>
              {achievedDate}
            </a>  
          </Link>
      </Wrapper>
  );
}

const YesDone = styled.div`
  text-decoration: line-through;
`

const NotDone = styled.div`
  color: black;
`

const IsDone = styled.div`
  color: #0a870f;
`

const IsNotDone = styled.div`
color: #3121ed;
`

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`

const AchievedDate = styled.div`
  text-decoration: underline;
  cursor: pointer;
  color: #2c0c8e;
  font-weight: bold;
`



export default MyImpossibleList;
