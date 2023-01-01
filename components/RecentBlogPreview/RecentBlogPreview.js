import React from "react";
import styled from 'styled-components';

function RecentBlogPreview(props) {
  const title = props.title;
  const createdDate = props.createdDate
  const blogHint = props.blogHint;
  const bloglink = props.bloglink;
  return (
    <div className="card-container">
          <a className="card" href={bloglink}>
              <span>
                <h3 style={{letterSpacing:'0.3px'}}>
                {title} <br/>
                  <span style={{fontSize: '12px',color:'#142841'}}>{createdDate}</span> <br/>
                  <span style={{fontSize: '14px',color:'#494b4b',letterSpacing:'0.3px'}}>
                    {blogHint}
                    </span>
                </h3>
              </span> 
              
          </a>
        
      </div>
  );
}

export default RecentBlogPreview;
