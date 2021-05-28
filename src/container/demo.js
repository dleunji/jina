import React, {useEffect} from 'react';
import {useSelector, connect} from 'react-redux';
import {CrossModal} from '../component';

const DemoContainer = ({title, description, server, githubLink, ainizeLink}) =>{
  return (
    <CrossModal 
    title={title} 
    description={description} 
    server={server}
    githubLink={githubLink}
    ainizeLink={ainizeLink}
    />
  );
}

export default connect(
  ({jina})=>({
    title : jina.info.title,
    description: jina.info.description,
    githubLink: jina.info.githubLink,
    ainizeLink: jina.info.ainizeLink
  }), {
    //액션 생성
  },
)(DemoContainer);
