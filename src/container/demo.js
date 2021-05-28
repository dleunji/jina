import React, {useEffect} from 'react';
import {useSelector, connect} from 'react-redux';
import {Demo} from '../component';

const DemoContainer = () =>{
  const {title, description, server, githubLink, ainizeLink} = useSelector(({jina})=>({
    title : jina.info.title,
    description: jina.info.description,
    server: jina.info.server,
    githubLink: jina.info.githubLink,
    ainizeLink: jina.info.ainizeLink
  }));

  return (
    <Demo
    title={title} 
    description={description} 
    server={server}
    githubLink={githubLink}
    ainizeLink={ainizeLink}
    />
  );
}

export default DemoContainer;
